import Navbar from 'components/navbar/Navbar';
import ThemeSwitcher from 'components/theme-switcher/Theme-switcher';

import styles from 'components/top-bar/Top-bar.module.scss';

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <Navbar />
      <ThemeSwitcher />
    </div>
  );
}
