import { useState, useEffect } from 'react';
import { themes, type ThemeType } from './lib/themes';

function App() {
  const [theme, setTheme] = useState<ThemeType>("light"); // 'light' | 'dark' | 'pika'

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove('light', 'dark', 'pika','limbo');
    root.classList.add(theme);
  }, [theme]);
  const currTheme = themes[theme];

  return (
    <div className={`${currTheme.background} ${currTheme.text} h-screen flex flex-col items-center justify-center transition-colors duration-300`}
    >
      <h1 className="text-2xl mb-6">Theme Switcher</h1>

      <div className="space-x-4">
        <button
          className="px-4 py-2 bg-blue-700 text-white rounded"
          onClick={() => setTheme('light')}
        >
          Light
        </button>

        <button
          className="px-4 py-2 bg-blue-700 text-white rounded"
          onClick={() => setTheme('dark')}
        >
          Dark
        </button>
        <button
          className="px-4 py-2 bg-blue-700 text-white rounded"
          onClick={() => setTheme('pika')}>
          Pika
        </button>
        <button
          className="px-4 py-2 bg-blue-700 text-white rounded"
          onClick={() => setTheme('limbo')}>
          limbo
        </button>
      </div>

      <p className="mt-8">
        Current theme: <strong>{theme}</strong>
      </p>
    </div>
  );
}

export default App;
