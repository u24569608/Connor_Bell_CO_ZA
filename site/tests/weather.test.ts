import assert from "node:assert/strict";
import { test } from "node:test";

import { GET } from "../src/app/api/weather/route";
import { fetchCurrentWeather } from "../src/lib/weather/provider";
import { weatherLocations } from "../src/lib/weather/types";

const apiKey = "weather-test-key";
const observedAt = Date.UTC(2026, 10, 12, 12) / 1000;

function providerReading() {
  return {
    dt: observedAt,
    main: { temp: 24, feels_like: 25, humidity: 60, pressure: 1012 },
    wind: { speed: 3, deg: 120 },
    clouds: { all: 10 },
    sys: { sunrise: observedAt - 21600, sunset: observedAt + 21600 },
    visibility: 10000,
    weather: [{ id: 800, description: "clear sky", icon: "01d" }],
  };
}

function weatherFetcher(requests: URL[]): typeof fetch {
  return async (input, options) => {
    const url = new URL(String(input));
    requests.push(url);
    assert.equal(url.origin, "https://api.openweathermap.org");
    assert.equal(url.pathname, "/data/2.5/weather");
    assert.equal(url.searchParams.get("appid"), apiKey);
    assert.equal(url.searchParams.get("units"), "metric");
    assert.equal(options?.redirect, "error");
    assert.equal(options?.cache, "no-store");

    return Response.json({ ...providerReading(), unselected: apiKey });
  };
}

test("unknown locations cannot trigger an outbound request", async (context) => {
  const outbound = context.mock.method(globalThis, "fetch", async () => {
    throw new Error("An unknown location caused an outbound request.");
  });
  const response = await GET(new Request("https://example.com/api/weather?location=elsewhere&lat=0&lon=0"));
  assert.equal(response.status, 404);
  assert.equal(outbound.mock.callCount(), 0);
});

test("current readings include selected fields without the API key", async () => {
  const requests: URL[] = [];
  const current = await fetchCurrentWeather(weatherLocations[0], apiKey, weatherFetcher(requests));
  assert.equal(current.temperature, 24);
  assert.equal(current.feelsLike, 25);
  assert.equal(current.windSpeed, 3);
  assert.equal(current.cloudCover, 10);
  assert.equal(current.sunrise, observedAt - 21600);
  assert.equal(current.rain, null);
  assert.equal(JSON.stringify(current).includes(apiKey), false);
});

test("each city uses one request with its fixed coordinates", async () => {
  const requests: URL[] = [];
  await Promise.all(weatherLocations.map((location) => fetchCurrentWeather(location, apiKey, weatherFetcher(requests))));
  assert.equal(requests.length, 2);
  assert.deepEqual(
    requests.map((url) => [url.searchParams.get("lat"), url.searchParams.get("lon")]),
    weatherLocations.map((location) => [String(location.latitude), String(location.longitude)]),
  );
});

test("absent optional observations are represented as null", async () => {
  const fetcher: typeof fetch = async () => Response.json({
    ...providerReading(), clouds: undefined, sys: undefined, wind: { speed: 0 },
  });
  const current = await fetchCurrentWeather(weatherLocations[0], apiKey, fetcher);
  assert.equal(current.windDirection, null);
  assert.equal(current.windGust, null);
  assert.equal(current.cloudCover, null);
  assert.equal(current.sunrise, null);
});

test("malformed weather is rejected", async () => {
  const fetcher: typeof fetch = async () => Response.json({ main: { temp: "not-a-number" } });
  await assert.rejects(fetchCurrentWeather(weatherLocations[0], apiKey, fetcher), /Invalid weather response/);
});

test("failed provider responses are rejected", async () => {
  const fetcher: typeof fetch = async () => Response.json({ message: apiKey }, { status: 401 });
  await assert.rejects(fetchCurrentWeather(weatherLocations[0], apiKey, fetcher), /^Error: OpenWeather request failed\.$/);
});

test("network errors cannot expose credential-bearing URLs", async () => {
  const fetcher: typeof fetch = async (input) => {
    throw new Error(`Network failure for ${String(input)}`);
  };
  await assert.rejects(fetchCurrentWeather(weatherLocations[0], apiKey, fetcher), (error: Error) => {
    assert.equal(error.message, "OpenWeather request failed.");
    assert.equal(String(error.stack).includes(apiKey), false);
    return true;
  });
});
