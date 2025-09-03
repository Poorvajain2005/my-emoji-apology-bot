import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  delay: number;
  size: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        size: Math.random() * 0.5 + 0.5
      }));
      setHearts(newHearts);
    };

    generateHearts();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float opacity-20"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size * 2}rem`,
            top: `${Math.random() * 100}%`
          }}
        >
          💖
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;