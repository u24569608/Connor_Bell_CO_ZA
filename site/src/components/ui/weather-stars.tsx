import type { CSSProperties } from "react";

function makeStars() {
  let seed = 4729;
  const next = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };

  return Array.from({ length: 140 }, (_, index) => ({
    x: next() * 100,
    y: next() * 100,
    size: Math.round(index % 11 === 0 ? 2 + next() : 1 + next()),
    duration: index % 11 === 0 ? 1.4 + next() * 1.2 : index % 5 === 0 ? 2 + next() * 2 : 3 + next() * 4,
    delay: -next() * 7,
    brightness: index % 11 === 0 ? 1 : 0.6 + next() * 0.4,
    minimum: 0.2 + next() * 0.2,
    variant: index % 2 === 0 ? "weather-star-twinkle" : "weather-star-shimmer",
  }));
}

const stars = makeStars();

export default function WeatherStars({ active }: { active: boolean }) {
  return (
    <div aria-hidden="true" className="weather-stars" data-active={active}>
      {stars.map((star, index) => (
        <span key={index} className="weather-star" data-bright={index % 11 === 0} style={{
          left: `${star.x.toFixed(3)}%`,
          top: `${star.y.toFixed(3)}%`,
          "--size": `${star.size}px`,
          "--duration": `${star.duration.toFixed(2)}s`,
          "--delay": `${star.delay.toFixed(2)}s`,
          "--brightness": star.brightness.toFixed(2),
          "--minimum": star.minimum.toFixed(2),
          "--twinkle": star.variant,
        } as CSSProperties} />
      ))}
    </div>
  );
}
