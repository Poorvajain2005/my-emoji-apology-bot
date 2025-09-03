import FloatingHearts from '../components/FloatingHearts';
import ApologyMessage from '../components/ApologyMessage';
import VideoSection from '../components/VideoSection';
import EmojiBot from '../components/EmojiBot';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-soft relative overflow-hidden">
      <FloatingHearts />
      
      {/* Header with cute bots */}
      <header className="relative z-10 pt-8 pb-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <EmojiBot emoji="🤖" size="md" animation="bounce" />
            <EmojiBot emoji="💕" size="lg" animation="pulse" />
            <EmojiBot emoji="🤖" size="md" animation="float" />
          </div>
          <p className="text-primary/80 text-lg font-medium">
            A Special Message with Love
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

          {/* Interactive Section */}
          <section className="text-center">
            <div className="max-w-2xl mx-auto">
              <div className="bg-card/60 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-accent/30">
                <div className="flex justify-center gap-4 mb-6">
                  <EmojiBot emoji="🤖" size="md" animation="float" />
                  <EmojiBot emoji="❤️" size="md" animation="pulse" />
                  <EmojiBot emoji="🤖" size="md" animation="bounce" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Can You Forgive Me?
                </h3>
                
                <p className="text-muted-foreground text-lg mb-8">
                  I promise to be better, to listen more, and to never take your love for granted.
                  You deserve all the love in the world. 
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="romantic" size="lg" className="text-lg px-8">
                    <EmojiBot emoji="💖" size="sm" className="mr-2" />
                    I Forgive You
                  </Button>
                  <Button variant="soft" size="lg" className="text-lg px-8">
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
