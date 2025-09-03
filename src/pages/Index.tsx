import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FloatingHearts from '../components/FloatingHearts';
import ApologyMessage from '../components/ApologyMessage';
import VideoSection from '../components/VideoSection';
import EmojiBot from '../components/EmojiBot';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Index = () => {
  const navigate = useNavigate();
  const [loveMeter, setLoveMeter] = useState(0);
  const [randomMessage, setRandomMessage] = useState('');
  const [showHeartShower, setShowHeartShower] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [isButtonRunning, setIsButtonRunning] = useState(false);
  
  const calculateLoveDays = () => {
    const startDate = new Date('2023-03-26');
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const sorryMessages = [
    "Abhii, you're my favorite notification 💌",
    "baby, I'm like WiFi without internet - useless without you! 📶💔",
    "Abhii, you're the peanut butter to my jelly 🥜🍇",
    "baby, I messed up like a GPS in a tunnel 🗺️😵",
    "Abhii, you're my sunshine on a cloudy day ☀️☁️",
    "baby, I'm sorry for being a human tornado 🌪️💨",
    "Abhii, you're the cheese to my pizza 🍕🧀",
    "baby, I love you more than coffee (and that's saying something!) ☕💕",
    "Abhii, you're my favorite person to annoy 😜💖",
    "baby, I'm like a phone with 1% battery - desperate for your love! 🔋❤️"
  ];

  const handleForgiveClick = () => {
    navigate('/love-shower');
  };

  const generateRandomMessage = () => {
    const randomMsg = sorryMessages[Math.floor(Math.random() * sorryMessages.length)];
    setRandomMessage(`Sorry Abhii, ${randomMsg}`);
  };

  const fillLoveMeter = () => {
    const newValue = Math.min(loveMeter + 20, 100);
    setLoveMeter(newValue);
    if (newValue === 100) {
      setShowHeartShower(true);
      setTimeout(() => setShowHeartShower(false), 3000);
    }
  };

  const handleYesClick = () => {
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 4000);
  };

  const handleNoClick = () => {
    setIsButtonRunning(true);
    const newX = Math.random() * 300 - 150;
    const newY = Math.random() * 200 - 100;
    setButtonPosition({ x: newX, y: newY });
    setTimeout(() => {
      setIsButtonRunning(false);
      setButtonPosition({ x: 0, y: 0 });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-soft relative overflow-hidden">
      <FloatingHearts />
      
      {/* Animated Hearts Falling Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {Array.from({ length: 15 }, (_, i) => (
          <div
            key={`bg-heart-${i}`}
            className="absolute opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              animation: `fallDown ${3 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: '1.5rem',
              top: '-10%'
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fallDown {
          0% {
            transform: translateY(-50px) rotate(0deg);
            opacity: 0.3;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      {showHeartShower && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
          {Array.from({ length: 50 }, (_, i) => (
            <div
              key={i}
              className="absolute animate-bounce opacity-90"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: '2rem',
                top: '-10%',
                animationDuration: '2s',
                color: '#dc2626'
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      )}

      {showFireworks && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={`firework-${i}`}
              className="absolute animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: '2rem'
              }}
            >
              🎆
            </div>
          ))}
        </div>
      )}
      
      {/* Header with cute bots */}
      <header className="relative z-10 pt-8 pb-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <EmojiBot emoji="🤖" size="md" animation="bounce" />
            <EmojiBot emoji="💕" size="lg" animation="pulse" />
            <EmojiBot emoji="🤖" size="md" animation="float" />
          </div>
          <p className="text-primary/80 text-lg font-medium">
            A Special Message for My Baby with Love
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pb-16">
        <div className="container mx-auto px-4 space-y-16">
          
          {/* Apology Message Section */}
          <section className="pt-8">
            <ApologyMessage />
          </section>

          {/* Video Section */}
          <section>
            <VideoSection />
          </section>

          {/* Random Message Generator */}
          <section className="text-center">
            <div className="max-w-2xl mx-auto">
              <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-accent/30">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  🎲 Random Sorry Generator 🎲
                </h3>
                <Button 
                  onClick={generateRandomMessage}
                  variant="soft" 
                  size="lg" 
                  className="mb-6"
                >
                  Show me a sorry message 💌
                </Button>
                {randomMessage && (
                  <div className="bg-gradient-soft rounded-2xl p-6">
                    <p className="text-lg font-medium text-primary">
                      {randomMessage}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Love Counter */}
          <section className="text-center">
            <div className="max-w-md mx-auto">
              <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-accent/30">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  📅 Love Counter 📅
                </h3>
                <div className="bg-gradient-soft rounded-2xl p-6 mb-4">
                  <p className="text-3xl font-bold text-primary mb-2">
                    {calculateLoveDays()}
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Days of Love Together ❤️
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Since March 26, 2023 💕
                  </p>
                </div>
                <div className="text-4xl mb-4">
                  💑💖💕
                </div>
              </div>
            </div>
          </section>

          {/* Love Meter */}
          <section className="text-center">
            <div className="max-w-md mx-auto">
              <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-accent/30">
                <h3 className="text-2xl font-bold text-primary mb-4">
                  💖 Love Meter 💖
                </h3>
                <div className="bg-gray-200 rounded-full h-8 mb-4 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-pink-400 to-red-500 h-full rounded-full transition-all duration-500 flex items-center justify-center"
                    style={{ width: `${loveMeter}%` }}
                  >
                    {loveMeter > 0 && (
                      <span className="text-white font-bold text-sm">
                        {loveMeter}% ❤️
                      </span>
                    )}
                  </div>
                </div>
                <Button 
                  onClick={fillLoveMeter}
                  variant="romantic" 
                  size="lg"
                  disabled={loveMeter >= 100}
                >
                  {loveMeter >= 100 ? 'Love Tank Full! 💕' : 'Fill My Heart 💗'}
                </Button>
                {loveMeter >= 100 && (
                  <div className="mt-4 p-4 bg-gradient-soft rounded-2xl">
                    <p className="text-primary font-bold text-lg mb-2">
                      💖 I Love You So Much, Abhii! 💖
                    </p>
                    <p className="text-muted-foreground">
                      You mean everything to me, baby ❤️
                    </p>
                  </div>
                )}

              </div>
            </div>
          </section>

          {/* Interactive Section */}
          <section className="text-center">
            <div className="max-w-2xl mx-auto">
              <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-accent/30">
                <div className="flex justify-center gap-4 mb-6">
                  <EmojiBot emoji="🐶" size="md" animation="bounce" />
                  <EmojiBot emoji="❤️" size="md" animation="pulse" />
                  <EmojiBot emoji="🐱" size="md" animation="float" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Can You Forgive Me, Baby?
                </h3>
                
                <div className="flex justify-center gap-4 mb-8">
                  <EmojiBot emoji="💑" size="lg" animation="bounce" />
                  <EmojiBot emoji="💕" size="lg" animation="pulse" />
                  <EmojiBot emoji="💏" size="lg" animation="float" />
                </div>

                <div className="mb-8">
                  <h4 className="text-xl font-bold text-primary mb-4">
                    Forgive Me, Baby? 🥺
                  </h4>
                  <div className="flex justify-center gap-4 relative">
                    <Button 
                      onClick={handleYesClick}
                      variant="romantic" 
                      size="lg"
                      className="text-lg px-8"
                    >
                      Yes 💕
                    </Button>
                    <Button 
                      onClick={handleNoClick}
                      variant="outline" 
                      size="lg"
                      className={`text-lg px-8 transition-all duration-500 ${
                        isButtonRunning ? 'animate-bounce' : ''
                      }`}
                      style={{
                        transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`
                      }}
                    >
                      No 😢
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="romantic" 
                    size="lg" 
                    className="text-lg px-8"
                    onClick={handleForgiveClick}
                  >
                    <EmojiBot emoji="💖" size="sm" className="mr-2" />
                    I Forgive You
                  </Button>
                  <Button 
                    variant="soft" 
                    size="lg" 
                    className="text-lg px-8"
                    onClick={() => window.open('https://wa.me/917869712770', '_blank')}
                  >
                    <EmojiBot emoji="🤗" size="sm" className="mr-2" />
                    Let's Talk
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom cute bots */}
          <section className="text-center py-8">
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <EmojiBot emoji="🤖" size="lg" animation="float" />
              <EmojiBot emoji="💕" size="md" animation="pulse" />
              <EmojiBot emoji="🌹" size="md" animation="bounce" />
              <EmojiBot emoji="🤖" size="lg" animation="float" className="animate-float-delayed" />
              <EmojiBot emoji="✨" size="md" animation="pulse" />
            </div>
            
            <p className="text-primary/70 text-lg mt-6 font-medium">
              Made with love and cute emoji bots 🤖💖
            </p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
