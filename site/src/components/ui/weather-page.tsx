"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { usePathname } from "next/navigation";

import { Spokes } from "@/components/loading-ui/spokes";
import Banner from "@/components/ui/banner";
import Navbar from "@/components/ui/navbar";
import WeatherStars from "@/components/ui/weather-stars";
import { useCricketAmbience } from "@/components/ui/use-cricket-ambience";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { weatherBackground, weatherDate, weatherHasStars, weatherTime, windDirection } from "@/lib/weather/presentation";
import { weatherLocations, type CurrentWeather, type WeatherLocation } from "@/lib/weather/types";

type LocationId = WeatherLocation["id"];
type WeatherData = Record<LocationId, CurrentWeather | null>;
type WeatherResponse = { locations: { location: WeatherLocation; current: CurrentWeather | null }[] };

function Detail({ label, children, className = "" }: { label: string; children: ReactNode; className?: string }) {
  return <div className={`opacity-80 ${className}`}><dt className="whitespace-nowrap">{label}</dt><dd className="font-semibold whitespace-nowrap">{children}</dd></div>;
}

function WeatherDetails({ current, sound }: { current: CurrentWeather; sound: ReturnType<typeof useCricketAmbience> | null }) {
  const weather = current.data;
  const speed = (value: number | null) => value === null ? "—" : `${Math.round(value * 3.6)} km/h`;
  const detailGridClassName = "grid w-fit grid-cols-[repeat(2,7rem)] gap-x-6 gap-y-5 min-[460px]:grid-cols-[repeat(2,7rem)_max-content] sm:gap-x-8 lg:grid-cols-[repeat(5,7rem)]";

  return (
    <div className="w-full max-w-screen-xl px-8 pt-0 pb-16 md:px-24">
      <h2 className="text-base font-semibold tracking-wider uppercase">{weather.condition.description}</h2>
      <p className="mt-1 text-[7rem] leading-none font-medium sm:text-[8rem]" aria-label={`${Math.round(weather.temperature)} degrees Celsius`}>
        {Math.round(weather.temperature)}°
      </p>
      <div className="mt-2 text-base leading-relaxed">
        <p>Feels Like <span className="font-semibold">{Math.round(weather.feelsLike)} °C</span></p>
        <p>Cloud Cover <span className="font-semibold">{weather.cloudCover === null ? "—" : `${Math.round(weather.cloudCover)} %`}</span></p>
        <p>Rainfall <span className="font-semibold">{weather.rain === null ? "—" : `${weather.rain} mm`}</span></p>
      </div>
      <div className="mt-10 space-y-5 text-base tracking-wide leading-tight">
        <dl className={detailGridClassName}>
          <Detail label="Humidity">{Math.round(weather.humidity)} %</Detail>
          <Detail label="Pressure">{Math.round(weather.pressure)} hPa</Detail>
          <Detail label="Visibility">{weather.visibility === null ? "—" : `${weather.visibility / 1000} km`}</Detail>
          <Detail label="Sunrise" className="max-[460px]:col-start-1">{weatherTime(weather.sunrise)}</Detail>
          <Detail label="Sunset">{weatherTime(weather.sunset)}</Detail>
        </dl>
        <dl className={detailGridClassName}>
          <Detail label="Wind Speed">{speed(weather.windSpeed)}</Detail>
          <Detail label="Wind Gusts">{speed(weather.windGust)}</Detail>
          <Detail label="Wind Direction">{windDirection(weather.windDirection)}</Detail>
        </dl>
      </div>
      <p className="mt-10 text-xs opacity-80">
        Weather Data by <a className="inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current" href="https://openweathermap.org/" target="_blank" rel="noreferrer">
          <span className="underline underline-offset-4">OpenWeather</span>
          <span aria-hidden="true" className="material-symbols-sharp" style={{ fontSize: "1rem" }}>north_east</span>
        </a>
      </p>
      <p className="mt-1 text-xs opacity-80">
        Observed on <time dateTime={new Date(weather.timestamp * 1000).toISOString()}>{weatherDate(weather.timestamp)} at {weatherTime(weather.timestamp)}</time>
      </p>
      {sound !== null && <button type="button" data-weather-audio onClick={() => sound.toggle()} disabled={sound.starting} aria-busy={sound.starting} className="group/audio mt-3 inline-flex cursor-pointer items-center gap-1.5 text-xs opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current disabled:cursor-wait">
        <span aria-hidden="true" className="material-symbols-sharp" style={{ fontSize: "1rem", fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}>{sound.enabled === true ? "music_note" : "music_off"}</span>
        <span className="fade-underline underline-offset-5 group-hover/audio:decoration-current group-focus-visible/audio:decoration-current group-active/audio:decoration-current group-disabled/audio:decoration-transparent motion-reduce:transition-none">{sound.enabled === true ? "Disable Audio" : "Enable Audio"}</span>
      </button>}
      {sound !== null && sound.error !== null && <p role="status" className="mt-1 text-xs opacity-80">{sound.error}</p>}
    </div>
  );
}

export default function WeatherPage() {
  const pathname = usePathname();
  const city: LocationId = pathname === "/weather/pretoria" ? "pretoria" : "johannesburg";
  const [weather, setWeather] = useState<WeatherData>({ johannesburg: null, pretoria: null });
  const [isUpdating, setIsUpdating] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryAt, setRetryAt] = useState<number | null>(null);
  const [now, setNow] = useState(0);
  const request = useRef<AbortController | null>(null);
  const panel = useRef<HTMLDivElement>(null);
  const selected = weather[city];
  const background = weatherBackground(selected?.data ?? null, now);
  const clearNight = weatherHasStars(selected?.data ?? null, now);
  const sound = useCricketAmbience(clearNight);

  useEffect(() => {
    const location = weatherLocations.find((location) => location.id === city);
    document.title = `Connor Bell – Weather (${location?.name})`;
  }, [city]);

  const updateWeather = useCallback(async () => {
    request.current?.abort();
    const controller = new AbortController();
    request.current = controller;

    try {
      const response = await fetch("/api/weather", {
        cache: "no-store",
        signal: AbortSignal.any([controller.signal, AbortSignal.timeout(15000)]),
      });

      if (response.status === 429) {
        const retry = response.headers.get("retry-after");
        const seconds = retry === null ? NaN : Number(retry);
        const date = retry === null ? NaN : Date.parse(retry);
        const until = Number.isFinite(seconds) ? Date.now() + seconds * 1000 : date;
        setRetryAt(Number.isFinite(until) && until > Date.now() ? until : Date.now() + 60000);
        throw new Error("Too Many Requests. Try Again Later.");
      }

      if (response.ok !== true) {
        throw new Error("Weather couldn’t be updated. Please try again.");
      }

      const data: WeatherResponse = await response.json();

      if (controller.signal.aborted === true) {
        return;
      }

      setNow(Date.now());
      setWeather((saved) => {
        const next = { ...saved };

        for (const item of data.locations) {
          if ((item.location.id === "johannesburg" || item.location.id === "pretoria") && item.current !== null) {
            next[item.location.id] = item.current;
          }
        }

        return next;
      });

      const unavailable = data.locations.filter((item) => item.current === null).map((item) => item.location.name);

      if (unavailable.length > 0) {
        setError(`Couldn’t update ${unavailable.join(" and ")}. Any previous reading is still shown.`);
      }
    } catch (failure) {
      if (controller.signal.aborted !== true) {
        setError(failure instanceof Error ? failure.message : "Weather couldn’t be updated. Please try again.");
      }
    } finally {
      if (request.current === controller && controller.signal.aborted !== true) {
        setIsUpdating(false);
      }
    }
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => void updateWeather());
    return () => {
      window.cancelAnimationFrame(frame);
      request.current?.abort();
    };
  }, [updateWeather]);

  useEffect(() => {
    if (retryAt === null) {
      return;
    }

    const timeout = window.setTimeout(() => setRetryAt(null), Math.max(retryAt - Date.now(), 0));
    return () => window.clearTimeout(timeout);
  }, [retryAt]);

  useLayoutEffect(() => {
    panel.current?.scrollTo({ top: 0, behavior: "instant" });
  }, [city]);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const previous = root.style.getPropertyValue("--weather-background");
    root.style.setProperty("--weather-background", background);

    return () => {
      if (previous === "") {
        root.style.removeProperty("--weather-background");
      } else {
        root.style.setProperty("--weather-background", previous);
      }
    };
  }, [background]);

  return (
    <main data-page="weather" className="weather-page relative isolate flex h-dvh flex-col overflow-hidden text-white" style={{ "--weather-background": background } as CSSProperties}>
      <meta name="theme-color" content={background} />
      <WeatherStars active={clearNight} />
      <Navbar />
      <Tabs value={city} onValueChange={(value) => {
        if (value === "johannesburg" || value === "pretoria") {
          setNow(Date.now());
          window.history.pushState(null, "", `/weather/${value}${window.location.search}${window.location.hash}`);
        }
      }} className="relative z-10 min-h-0 flex-1 gap-0">
        <Banner heading="Current Weather">
          <div className="flex w-full flex-wrap items-center gap-x-6 gap-y-3">
            <TabsList aria-label="Weather location" activateOnFocus className="grid w-max max-w-full shrink-0 grid-cols-2 p-1.5 group-data-horizontal/tabs:h-auto">
              {weatherLocations.map((location) => (
                <TabsTrigger key={location.id} value={location.id} className="fade-underline h-auto min-w-0 cursor-pointer px-2 py-2 text-sm underline-offset-5 data-active:font-medium sm:px-5 sm:text-base motion-reduce:transition-none">
                  {location.name}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className="text-sm leading-relaxed tracking-wide opacity-80">
              <p>Last Updated at {selected === null ? "—" : <time dateTime={selected.updatedAt}>{weatherTime(selected.updatedAt)}</time>}</p>
              <button type="button" onClick={() => {
                setIsUpdating(true);
                setError(null);
                void updateWeather();
              }} disabled={isUpdating === true || retryAt !== null} aria-label={isUpdating === true ? "Updating" : "Update Now"} aria-busy={isUpdating} className="group/weather-update grid cursor-pointer justify-items-start text-left font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-not-allowed motion-reduce:transition-none">
                <span aria-hidden="true" className={`col-start-1 row-start-1 transition-opacity duration-500 ease-in-out motion-reduce:transition-none ${isUpdating === true ? "opacity-0" : "opacity-100"}`}>
                  <span className="relative after:absolute after:inset-x-0 after:-bottom-[5px] after:h-0.5 after:bg-current after:opacity-0 after:transition-opacity after:duration-500 after:ease-in-out group-hover/weather-update:after:opacity-100 group-focus-visible/weather-update:after:opacity-100 group-active/weather-update:after:opacity-100 motion-reduce:after:transition-none">
                    Update Now
                  </span>
                </span>
                <span aria-hidden="true" className={`col-start-1 row-start-1 inline-flex items-center gap-1.5 transition-opacity duration-500 ease-in-out motion-reduce:transition-none ${isUpdating === true ? "opacity-100" : "opacity-0"}`}>
                  <Spokes aria-hidden="true" />
                  Updating
                </span>
              </button>
            </div>
          </div>
          {error !== null && <p role="status" className="max-w-xl text-sm opacity-80">{error}</p>}
        </Banner>
        <section aria-label="Current weather details" aria-busy={isUpdating} className="relative min-h-0 flex-1 overflow-hidden">
          {weatherLocations.map((location) => {
            const current = weather[location.id];

            return <TabsContent key={location.id} value={location.id} ref={city === location.id ? panel : undefined} className="absolute inset-0 overflow-y-auto overscroll-contain transition-opacity duration-[900ms] ease-in-out data-starting-style:opacity-0 data-ending-style:opacity-0 [&[inert]]:overflow-hidden motion-reduce:transition-none">
              {current !== null
                ? <WeatherDetails current={current} sound={clearNight === true && city === location.id ? sound : null} />
                : <div className="flex h-full items-center px-8 py-8 md:px-24">
                    <p role="status" className="inline-flex items-center gap-2 text-base opacity-80">
                      {isUpdating === true
                        ? <><Spokes aria-hidden="true" /> Loading Current Weather</>
                        : "Current Weather Unavailable."}
                    </p>
                  </div>}
            </TabsContent>;
          })}
        </section>
      </Tabs>
    </main>
  );
}
