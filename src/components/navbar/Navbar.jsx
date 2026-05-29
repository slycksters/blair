import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { blairLogo } from '../../assets';
import styles from './Navbar.module.css';

export function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <nav className={styles.navbar}>
      <figure>
        <NavLink to="/blair">
          <img alt="logo" className={styles.logo} src={blairLogo} />
        </NavLink>
      </figure>

      {/* DESKTOP NAV */}
      <ul className={styles.navbarList}>
        <li>
          <NavLink
            to="/blair/ghost-types"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Ghost Types
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blair/items"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Items
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blair/cursed-objects"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Cursed Objects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blair/guides"
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
          >
            Guides
          </NavLink>
        </li>
      </ul>

      {/* BURGER ICON */}
      <button
        className={styles.burger}
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <FaBars />
      </button>

      {/* FULLSCREEN MOBILE MENU */}
      {open && (
        <div className={styles.mobileMenu}>
          <button
            className={styles.closeBtn}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

          <NavLink to="/blair/ghost-types" onClick={closeMenu}>
            Ghost Types
          </NavLink>
          <NavLink to="/blair/items" onClick={closeMenu}>
            Items
          </NavLink>
          <NavLink to="/blair/cursed-objects" onClick={closeMenu}>
            Cursed Objects
          </NavLink>
          <NavLink to="/blair/guides" onClick={closeMenu}>
            Guides
          </NavLink>
        </div>
      )}
    </nav>
  );
}
