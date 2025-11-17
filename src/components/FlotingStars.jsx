import { useEffect, useState } from "react";

const makeStars = (n) => {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push({
      id: i,
      size: Math.random() * 2 + 0.6,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 6,
      opacity: 0.35 + Math.random() * 0.7
    });
  }
  return arr;
};

const FloatingStars = ({ count = 40 }) => {
  const [stars] = useState(() => makeStars(count));

  return (
    <div className="stars" aria-hidden>
      {stars.map(s => (
        <div
          key={s.id}
          className="star"
          style={{
            width: `${s.size}px`,
            height: `${s.size}px`,
            left: `${s.left}%`,
            top: `${s.top}%`,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
            opacity: s.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingStars;
