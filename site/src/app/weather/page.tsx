import type { Metadata } from "next";
import WeatherPage from "@/components/ui/weather-page";

export const metadata: Metadata = {
  title: "Connor Bell – Weather",
  alternates: {
    canonical: "/weather",
  },
};

export default function Weather() {
  return <WeatherPage />;
}
