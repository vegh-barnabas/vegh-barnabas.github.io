import Navbar from 'components/navbar/Navbar';
import ThemeSwitcher from 'components/theme-switcher/Theme-switcher';

import styles from 'components/top-bar/Topbar.module.scss';

export default function Topbar() {
  return (
    <div className={styles.topbar}>
      <div className={styles.left}></div>
      <div className={styles.navbarContainer}>
        <Navbar />
      </div>
      <div className={styles.right}>
        <div className={styles.rightContainer}>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
