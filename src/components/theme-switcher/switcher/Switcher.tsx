import styles from 'components/theme-switcher/switcher/Switcher.module.scss';
import { useEffect, useState } from 'react';

import { FaMoon, FaSun } from 'react-icons/fa';

export default function Switcher() {
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem('theme');
    return initialTheme ? initialTheme : 'dark';
  });

  function getThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      if (savedTheme === 'light') document.body.classList.add('light');
      else document.body.classList.remove('light');

      setTheme(savedTheme);
    } else {
      // todo add default color by the color scheme
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
    <div className={styles.switch1}>
      <input
        type="checkbox"
        className={styles.checkbox}
        id="chk"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      <label className={styles.label} htmlFor="chk">
        <FaMoon className={styles.moon} />
        <FaSun className={styles.sun} />
        <div className={styles.ball}></div>
      </label>
    </div>
  );
}
