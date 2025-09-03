import EmojiBot from './EmojiBot';

const VideoSection = () => {
  return (
    <div className="max-w-6xl mx-auto text-center">
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
            Us
            <EmojiBot emoji="💕" size="sm" animation="bounce" className="ml-3" />
          </h2>
          
          <div className="aspect-video bg-gradient-romantic rounded-2xl flex items-center justify-center shadow-glow relative overflow-hidden">
            <img 
              src="/private.jpg" 
              alt="Special message for you" 
              className="w-full h-full object-contain rounded-2xl -rotate-90 scale-125"
            />
            
            {/* Floating emoji decorations */}
            <EmojiBot 
              emoji="💖" 
              size="sm" 
              animation="float"
              className="absolute top-4 left-4 opacity-80"
            />
            <EmojiBot 
              emoji="🌹" 
              size="sm" 
              animation="float"
              className="absolute bottom-4 right-4 opacity-80"
            />
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default VideoSection;