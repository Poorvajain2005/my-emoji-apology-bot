import { useState, useEffect } from 'react';
import EmojiBot from './EmojiBot';

const ApologyMessage = () => {
  const messages = [
    {
      title: "I'm Sorry, Baby 🥺",
      main: "I messed up like a phone with 1% battery - completely useless! 📱💔",
      sub: "You're my charger, my WiFi, and my whole world. Please don't put me in airplane mode! ✈️💕"
    },
    {
      title: "Oops, I Did It Again 🙈",
      main: "I'm like a GPS that took a wrong turn - totally lost without your forgiveness! 🗺️💫",
      sub: "You're my destination, my home, and my favorite place to be. Guide me back to your heart? 🏠💖"
    },
    {
      title: "My Heart is Broken 💔",
      main: "I feel like a cookie that crumbled - all in pieces without you! 🍪😭",
      sub: "You're the milk to my cookie, the perfect match. Please help me become whole again! 🥛✨"
    },
    {
      title: "I'm a Hot Mess 🔥",
      main: "I'm like pizza without cheese - technically still pizza, but what's the point?! 🍕😢",
      sub: "You're my cheese, my topping, my everything that makes life delicious! 🧀💕"
    },
    {
      title: "Error 404: Brain Not Found 🤖",
      main: "My brain.exe stopped working when I hurt you. Currently rebooting with love.exe! 💻💙",
      sub: "You're my antivirus, my system update, my everything that keeps me running smoothly! 🛡️💖"
    },
    {
      title: "I'm Pawsitively Sorry 🐕",
      main: "I'm like a puppy who chewed your favorite shoes - guilty but still hoping for cuddles! 👟🥺",
      sub: "You're my favorite human, my treat dispenser, my whole pack. Forgive this silly pup? 🦴💕"
    },
    {
      title: "Weather Update: Stormy ⛈️",
      main: "There's a 100% chance of tears with scattered apologies throughout the day! 🌧️😭",
      sub: "You're my sunshine after the storm, my rainbow, my perfect weather. Clear my skies? 🌈☀️"
    },
    {
      title: "Mission: Impossible 🎬",
      main: "Mission: Be perfect girlfriend. Status: FAILED. Requesting backup from your heart! 💣💔",
      sub: "You're my Tom Cruise, my action hero, my blockbuster love story. Ready for the sequel? 🎭💖"
    },
    {
      title: "Plant Parent Fail 🌱",
      main: "I'm like a cactus trying to be a rose - prickly when I should be soft! 🌵🌹",
      sub: "You're my gardener, my sunshine, my water. Help me bloom into the girlfriend you deserve? 🌸💕"
    },
    {
      title: "Netflix & Chill... NOT 📺",
      main: "I paused our love story at the worst cliffhanger. Can we please press play? ⏯️💔",
      sub: "You're my binge-worthy series, my happy ending, my favorite show. Don't cancel our subscription! 🍿💖"
    }
  ];

  const [currentMessage, setCurrentMessage] = useState(messages[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setCurrentMessage(messages[randomIndex]);
  }, []);
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
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-warm bg-clip-text text-transparent mb-8">
            {currentMessage.title}
          </h1>
          
          <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            <p className="flex items-center justify-center gap-3">
              <EmojiBot emoji="💔" size="sm" animation="pulse" />
              {currentMessage.main}
              <EmojiBot emoji="🥺" size="sm" animation="pulse" />
            </p>
            
            <div className="bg-gradient-soft rounded-2xl p-8 mt-8">
              <p className="text-xl font-semibold text-primary mb-4">
                <EmojiBot emoji="✨" size="sm" animation="pulse" className="mr-2" />
                {currentMessage.sub}
                <EmojiBot emoji="✨" size="sm" animation="pulse" className="ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApologyMessage;