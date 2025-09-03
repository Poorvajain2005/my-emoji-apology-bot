interface EmojiBotProps {
  emoji: string;
  size?: 'sm' | 'md' | 'lg';
  animation?: 'float' | 'bounce' | 'pulse';
  className?: string;
}

const EmojiBot = ({ 
  emoji, 
  size = 'md', 
  animation = 'float', 
  className = '' 
}: EmojiBotProps) => {
  const sizeClasses = {
    sm: 'text-2xl',
    md: 'text-4xl',
    lg: 'text-6xl'
  };

  const animationClasses = {
    float: 'animate-float',
    bounce: 'animate-bounce-gentle',
    pulse: 'animate-pulse-heart'
  };

  return (
    <div 
      className={`
        inline-block 
        ${sizeClasses[size]} 
        ${animationClasses[animation]}
        transition-romantic
        hover:scale-110
        cursor-pointer
        select-none
        ${className}
      `}
    >
      {emoji}
    </div>
  );
};

export default EmojiBot;