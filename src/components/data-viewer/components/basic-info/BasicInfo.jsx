import styles from './BasicInfo.module.css';

export function BasicInfo({ data }) {
  return (
    <section className={styles.basicInfoSection}>
      <p className={styles.behaviour}>
        {data.behaviour.split('\n').map((line, index) => (
          <span key={index}>
            {line}
            <br />
            <br />
          </span>
        ))}
      </p>

      <img
        className={styles.image}
        alt={`${data.name} image`}
        src={data.image}
      />
    </section>
  );
}
