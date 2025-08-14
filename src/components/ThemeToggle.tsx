import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-14 h-7 bg-muted rounded-full flex items-center justify-center">
        <div className="w-5 h-5 bg-background rounded-full" />
      </div>
    );
  }

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative w-14 h-7 bg-gradient-urban rounded-full p-1 transition-all duration-300 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 group"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Track */}
      <div className="w-full h-full rounded-full bg-black/20 absolute inset-0" />
      
      {/* Slider */}
      <div
        className={`relative w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${
          isDark ? 'translate-x-7' : 'translate-x-0'
        }`}
      >
        {/* Icons */}
        <Sun
          className={`absolute w-3 h-3 text-orange-500 transition-all duration-300 ${
            isDark ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
          }`}
        />
        <Moon
          className={`absolute w-3 h-3 text-blue-600 transition-all duration-300 ${
            isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;