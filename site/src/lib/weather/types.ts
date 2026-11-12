export const weatherLocations = [
  { id: "johannesburg", name: "Johannesburg", latitude: -26.2041, longitude: 28.0473 },
  { id: "pretoria", name: "Pretoria", latitude: -25.7479, longitude: 28.2293 },
] as const;

export type WeatherLocation = (typeof weatherLocations)[number];

export type WeatherReading = {
  timestamp: number;
  temperature: number;
  feelsLike: number;
  humidity: number;
  pressure: number;
  windSpeed: number;
  windDirection: number | null;
  windGust: number | null;
  cloudCover: number | null;
  visibility: number | null;
  rain: number | null;
  snow: number | null;
  sunrise: number | null;
  sunset: number | null;
  condition: { id: number; description: string; icon: string };
};

export type CurrentWeather = { updatedAt: string; data: WeatherReading };
