import { NavLink } from 'react-router-dom';
import { blairLogo } from '../../assets';
import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <figure>
        <NavLink to="/">
          <img alt="logo" className={styles.logo} src={blairLogo} />
        </NavLink>
      </figure>

      <ul className={styles.navbarList}>
        <li>
          <NavLink
            to="/ghost-types"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Ghost Types
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/items"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Items
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/cursed-objects"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Cursed Objects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/guides"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Guides
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
