import { Link } from 'react-router-dom';
import styles from 'components/navbar/Navbar.module.scss';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to={'/'} className={styles.navbarItem}>
        Home
      </Link>
      <Link to={'/elte'} className={styles.navbarItem}>
        ELTE
      </Link>
      <Link to={'/contact'} className={styles.navbarItem}>
        Contact
      </Link>
    </nav>
  );
}
