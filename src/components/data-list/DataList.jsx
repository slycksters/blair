import { Link } from 'react-router-dom';
import styles from './DataList.module.css';

export function DataList({ data, title = 'Page Title' }) {
  return (
    <div className={styles.dataListWrapper}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.dataList}>
        {data.map((item) => (
          <Link
            className={styles.dataListItem}
            key={item.id}
            to={`/blair/ghost-types/${item.slug}`}
          >
            <div className={styles.imageWrapper}>
              <img
                alt={`${item.name} image`}
                className={styles.dataListItemImage}
                src={item.image}
              />
              <span className={styles.itemLabel}>{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
