import { getCurrentWeather } from "@/lib/weather/cache";
import { weatherLocations } from "@/lib/weather/types";

const headers = { "Cache-Control": "no-store" };

export async function GET(request: Request) {
  const locationId = new URL(request.url).searchParams.get("location");
  const locations = weatherLocations.filter((location) => locationId === null || location.id === locationId);

  if (locations.length === 0) {
    return Response.json({ error: "Unknown weather location." }, {
      status: 404,
      headers,
    });
  }

  const data = await Promise.all(locations.map(async (location) => {
    try {
      return { location, current: await getCurrentWeather(location) };
    } catch {
      return { location, current: null };
    }
  }));

  if (data.every((item) => item.current === null)) {
    return Response.json({ error: "Weather data is temporarily unavailable." }, {
      status: 503,
      headers,
    });
  }

  return Response.json({
    units: { temperature: "celsius", windSpeed: "metres-per-second", precipitation: "millimetres-per-hour" },
    locations: data,
  }, { headers });
}
