import { useEffect, useState } from 'react';

function ThemeToggle() {
  const [dark, setDark] = useState(() => localStorage.theme === 'dark');

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="ml-4 px-2 py-1 rounded bg-gray-200 dark:bg-gray-700"
      aria-label="Toggle dark mode"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
}
export default ThemeToggle;