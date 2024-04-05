import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

import styles from 'components/theme-switcher/Theme-switcher.module.scss';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem('theme');

    if (initialTheme) return initialTheme;
    else {
      const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
      if (darkThemeMq.matches) {
        return 'dark';
      } else {
        document.body.classList.add('light');
        return 'light';
      }
    }
  });

  function getThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      if (savedTheme === 'light') document.body.classList.add('light');
      else document.body.classList.remove('light');

      setTheme(savedTheme);
    } else {
      const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
      if (darkThemeMq.matches) {
        return 'dark';
      } else {
        document.body.classList.add('light');
        return 'light';
      }
    }
  }

  function toggleTheme() {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);

      if (newTheme === 'light') document.body.classList.add('light');
      else document.body.classList.remove('light');

      return newTheme;
    });
  }

  useEffect(() => {
    getThemeFromLocalStorage();
  }, [theme]);

  return (
    <div className={styles.switch}>
      <input
        type="checkbox"
        className={styles.checkbox}
        id="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <label className={styles.label} htmlFor="checkbox">
        <FaMoon className={styles.moon} />
        <FaSun className={styles.sun} />
        <div className={styles.ball}></div>
      </label>
    </div>
  );
}
