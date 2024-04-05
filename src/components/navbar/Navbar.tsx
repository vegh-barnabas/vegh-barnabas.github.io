import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import styles from 'components/navbar/Navbar.module.scss';

export default function Navbar() {
  const [transition, changeTransition] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      changeTransition(true);
    }, 300);

    return () => clearTimeout(timeout);
  });

  return (
    <nav className={styles.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          [
            styles.navbarItem,
            isActive ? styles.navbarActive : '',
            transition ? styles.transition : '',
          ].join(' ')
        }>
        Home
      </NavLink>
      <NavLink
        to="/elte"
        className={({ isActive }) =>
          [
            styles.navbarItem,
            isActive ? styles.navbarActive : '',
            transition ? styles.transition : '',
          ].join(' ')
        }>
        Elte
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          [
            styles.navbarItem,
            isActive ? styles.navbarActive : '',
            transition ? styles.transition : '',
          ].join(' ')
        }>
        Contact
      </NavLink>
    </nav>
  );
}
