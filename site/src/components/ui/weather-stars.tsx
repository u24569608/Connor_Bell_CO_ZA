import type { CSSProperties } from "react";

function makeStars() {
  let seed = 4729;
  const next = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };

  return Array.from({ length: 80 }, (_, index) => ({
    x: next() * 100,
    y: next() * 100,
    size: Math.round(index % 19 === 0 ? 1.8 + next() * 1.4 : 0.8 + next() * 1.6),
    duration: index % 19 === 0 ? 0.9 + next() * 0.6 : index % 5 === 0 ? 2 + next() * 1.5 : 4 + next() * 5,
    delay: -next() * 9,
    brightness: index % 19 === 0 ? 0.95 + next() * 0.05 : index % 8 === 0 ? 0.8 + next() * 0.2 : 0.25 + next() * 0.4,
  }));
}

const stars = makeStars();

export default function WeatherStars({ active }: { active: boolean }) {
  return (
    <div aria-hidden="true" className="weather-stars" data-active={active}>
      {stars.map((star, index) => (
        <span key={index} className="weather-star" data-bright={index % 19 === 0} style={{
          left: `${star.x.toFixed(3)}%`,
          top: `${star.y.toFixed(3)}%`,
          "--size": `${star.size}px`,
          "--duration": `${star.duration.toFixed(2)}s`,
          "--delay": `${star.delay.toFixed(2)}s`,
          "--brightness": star.brightness.toFixed(2),
        } as CSSProperties} />
      ))}
    </div>
  );
}
