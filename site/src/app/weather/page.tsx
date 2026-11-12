import type { Metadata } from "next";
import WeatherPage from "@/components/ui/weather-page";

export const metadata: Metadata = {
  title: "Connor Bell – Weather (Johannesburg)",
  alternates: {
    canonical: "/weather/johannesburg",
  },
};

export default function Weather() {
  return <WeatherPage />;
}
