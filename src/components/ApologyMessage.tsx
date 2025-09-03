import EmojiBot from './EmojiBot';

const ApologyMessage = () => {
  return (
    <div className="max-w-4xl mx-auto text-center space-y-8">
      <div className="relative">
        <EmojiBot 
          emoji="🤖" 
          size="lg" 
          animation="bounce"
          className="absolute -top-8 -left-8"
        />
        <EmojiBot 
          emoji="💕" 
          size="md" 
          animation="pulse"
          className="absolute -top-4 -right-4"
        />
        
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-12 shadow-romantic border border-primary/20">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-warm bg-clip-text text-transparent mb-8">
            I'm Sorry, Baby
          </h1>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p className="flex items-center justify-center gap-3">
              <EmojiBot emoji="🥺" size="sm" animation="pulse" />
              I know I messed up and I feel terrible about it
              <EmojiBot emoji="😔" size="sm" animation="pulse" />
            </p>
            
            <p className="flex items-center justify-center gap-3">
              <EmojiBot emoji="💝" size="sm" animation="float" />
              You mean the absolute world to me
              <EmojiBot emoji="🌍" size="sm" animation="float" />
            </p>
            
            <p className="flex items-center justify-center gap-3">
              <EmojiBot emoji="🙏" size="sm" animation="bounce" />
              Please forgive me, my love
              <EmojiBot emoji="💖" size="sm" animation="pulse" />
            </p>
            
            <div className="bg-gradient-soft rounded-2xl p-8 mt-8">
              <p className="text-2xl font-semibold text-primary mb-4">
                <EmojiBot emoji="✨" size="sm" animation="pulse" className="mr-2" />
                You are my everything
                <EmojiBot emoji="✨" size="sm" animation="pulse" className="ml-2" />
              </p>
              <p className="text-lg">
                Your smile lights up my day, your laugh is my favorite sound, 
                and your love makes me want to be better every single day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApologyMessage;