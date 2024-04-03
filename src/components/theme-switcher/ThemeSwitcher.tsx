import styles from 'components/theme-switcher/ThemeSwitcher.module.scss';

import Switcher from 'components/theme-switcher/switcher/Switcher';

export default function ThemeSwitcher() {
  return (
    <>
      <div className={styles.themeSwitcher}>
        <Switcher></Switcher>
      </div>
    </>
  );
}
