import { Link } from 'react-router';
import clsx from 'clsx';
import {
  blairLogo,
  cursedObjectImg,
  ghostTypesImg,
  guidesImg,
  itemsImg,
} from '../../assets';
import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <div className={styles.homePage}>
      <div className={styles.content}>
        <figure>
          <img className={styles.logo} src={blairLogo} />
          {/* <p>Created by: Slyckster x Zazel x 01010011 01101001 01101110</p> */}
        </figure>

        <nav className={styles.navigation}>
          <ul className={styles.navigationList}>
            <li className={styles.navigationListItem}>
              <Link to="/blair/ghost-types">
                <span>Ghost Types</span>
                <img alt="Ghost types image" src={ghostTypesImg} />
              </Link>
            </li>
            <li className={styles.navigationListItem}>
              <Link to="/blair/items">
                <span>Items</span>
                <img
                  alt="Items image"
                  className={styles.itemsLinkImg}
                  src={itemsImg}
                />
              </Link>
            </li>
            <li className={styles.navigationListItem}>
              <Link to="/blair/cursed-objects">
                <span>Cursed Objects</span>
                <img alt="Cursed objects image" src={cursedObjectImg} />
              </Link>
            </li>
            <li className={styles.navigationListItem}>
              <Link to="/blair/guides">
                <span>Guides</span>
                <img alt="Guides image" src={guidesImg} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <blockquote
        className={clsx(styles.disclaimerMessage, 'text-subtle wiki-content')}
      >
        Disclaimer: The information presented here is based on personal
        experience. Some details may be inaccurate, outdated, or incomplete.
      </blockquote>
    </div>
  );
}
