import EmojiBot from './EmojiBot';

const VideoSection = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="relative">
        <EmojiBot 
          emoji="🎥" 
          size="md" 
          animation="float"
          className="absolute -top-6 -left-6 z-10"
        />
        <EmojiBot 
          emoji="💌" 
          size="sm" 
          animation="pulse"
          className="absolute top-4 -right-8 z-10"
        />
        
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-accent/30">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            A Special Message For You
            <EmojiBot emoji="📹" size="sm" animation="bounce" className="ml-3" />
          </h2>
          
          <div className="aspect-video bg-gradient-romantic rounded-2xl flex items-center justify-center shadow-glow relative overflow-hidden">
            <div className="text-center space-y-4">
              <EmojiBot emoji="🎬" size="lg" animation="bounce" />
              <p className="text-primary-foreground text-xl font-semibold">
                Your Personal Video Here
              </p>
              <p className="text-primary-foreground/80">
                Record a heartfelt message and replace this placeholder
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <EmojiBot emoji="🥰" size="sm" animation="pulse" />
                <EmojiBot emoji="😘" size="sm" animation="float" />
                <EmojiBot emoji="💕" size="sm" animation="bounce" />
              </div>
            </div>
            
            {/* Floating emoji decorations */}
            <EmojiBot 
              emoji="💖" 
              size="sm" 
              animation="float"
              className="absolute top-4 left-4 opacity-60"
            />
            <EmojiBot 
              emoji="🌹" 
              size="sm" 
              animation="float"
              className="absolute bottom-4 right-4 opacity-60"
            />
          </div>
          
          <p className="text-muted-foreground mt-6 text-lg">
            <EmojiBot emoji="💭" size="sm" animation="pulse" className="mr-2" />
            This is where your heartfelt video message will go
            <EmojiBot emoji="💭" size="sm" animation="pulse" className="ml-2" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;