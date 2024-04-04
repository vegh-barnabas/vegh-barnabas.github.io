import { NavLink } from 'react-router-dom';

import styles from 'components/navbar/Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          [styles.navbarItem, isActive ? styles.navbarActive : ''].join(' ')
        }>
        Home
      </NavLink>
      <NavLink
        to="/elte"
        className={({ isActive }) =>
          [styles.navbarItem, isActive ? styles.navbarActive : ''].join(' ')
        }>
        Elte
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          [styles.navbarItem, isActive ? styles.navbarActive : ''].join(' ')
        }>
        Contact
      </NavLink>
    </nav>
  );
}
