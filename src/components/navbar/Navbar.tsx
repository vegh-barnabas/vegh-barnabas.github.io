import { NavLink } from 'react-router-dom';
import styles from 'components/navbar/Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* <NavLink
        to={'/'}
        // to={'/'}
        // className={`${styles.navbarItem} ${
        //   pathName === '/' ? styles.navbarActive : ''
        // }`}
        // className={({ isActive, isPending }) =>
        //   isPending ? 'pending' : isActive ? 'navbarActive' : ''
        // }
        style={(state) => console.log(state)} // { isActive: true }
      >
        Home
      </NavLink>
      <NavLink to={'/elte'} className={styles.navbarItem}>
        ELTE
      </NavLink>
      <NavLink to={'/contact'} className={styles.navbarItem}>
        Contact
      </NavLink> */}

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
