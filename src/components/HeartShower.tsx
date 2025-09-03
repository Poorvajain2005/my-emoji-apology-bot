import { useEffect, useState } from 'react';

interface Heart {
  id: number;
  left: number;
  delay: number;
  size: number;
}

interface HeartShowerProps {
  isActive: boolean;
  onComplete: () => void;
}

const HeartShower = ({ isActive, onComplete }: HeartShowerProps) => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    if (isActive) {
      const newHearts = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        size: Math.random() * 0.8 + 0.8
      }));
      setHearts(newHearts);

      const timer = setTimeout(() => {
        onComplete();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-bounce opacity-90"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            fontSize: `${heart.size * 3}rem`,
            top: '-10%',
            animationDuration: '3s'
          }}
        >
          💕
        </div>
      ))}
    </div>
  );
};

export default HeartShower;