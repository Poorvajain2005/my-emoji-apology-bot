import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmojiBot from '../components/EmojiBot';

const LoveShower = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number; size: number }>>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const generateHearts = () => {
      const newHearts = Array.from({ length: 100 }, (_, i) => ({
        id: Date.now() + i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        size: Math.random() * 1 + 0.8
      }));
      setHearts(prev => [...prev, ...newHearts]);
    };

    generateHearts();
    const interval = setInterval(generateHearts, 500);

    const timer = setTimeout(() => {
      navigate('/');
    }, 8000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  const loveItems = ['❤️', '💕', '💖', '💗', '💘', '💝', '💞', '💟', '♥️', '💋', 'XOXO', 'XO', '💌', '🌹', '💐', '😘', '🥰', '😍', '💑', '💏', '👫', '💒', '💍', '🎀', '🌺', '🌸', '✨', '⭐', '🌟', '💫'];

  return (
    <>
      <style>{`
        @keyframes fallDown {
          0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        .falling-emoji {
          animation: fallDown 1.5s linear infinite;
        }
      `}</style>
      
      <div className="min-h-screen bg-gradient-romantic relative overflow-hidden flex items-center justify-center">
        {hearts.map((heart) => {
          const randomItem = loveItems[Math.floor(Math.random() * loveItems.length)];
          const isText = randomItem === 'XOXO' || randomItem === 'XO';
          return (
            <div
              key={heart.id}
              className="absolute falling-emoji"
              style={{
                left: `${heart.left}%`,
                animationDelay: `${heart.delay}s`,
                fontSize: `${heart.size * (isText ? 1.2 : 1.8)}rem`,
                top: '0px',
                zIndex: 1,
                color: isText ? '#ff1744' : 'inherit',
                fontWeight: isText ? 'bold' : 'normal',
                textShadow: isText ? '2px 2px 4px rgba(0,0,0,0.3)' : 'none'
              }}
            >
              {randomItem}
            </div>
          );
        })}
      
        <div className="text-center z-10 bg-white/20 backdrop-blur-sm rounded-3xl p-12">
        <h1 className="text-6xl font-bold text-white mb-6">
          THANKS FOR FORGIVING ME, BABY! 
          <EmojiBot emoji="💖" size="lg" animation="pulse" className="ml-4" />
        </h1>
          <p className="text-2xl text-white/90">
            Abhii, you are loved beyond measure
          </p>
        </div>
      </div>
    </>
  );
};

export default LoveShower;