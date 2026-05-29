import styles from './Evidence.module.css';

export function Evidence({ data }) {
  return (
    <section className={styles.evidenceSection}>
      <h6>Evidences</h6>

      <ul className={styles.evidenceList}>
        {data.evidences.map((item) => (
          <li className={styles.evidenceListItem} key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
