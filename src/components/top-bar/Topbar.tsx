import Navbar from 'components/navbar/Navbar';
import ThemeSwitcher from 'components/theme-switcher/ThemeSwitcher';

import styles from 'components/top-bar/Topbar.module.scss';

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>
      <div className={styles.themeSwitcherContainer}>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
