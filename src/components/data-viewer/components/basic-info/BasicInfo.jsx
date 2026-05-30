import styles from './BasicInfo.module.css';

export function BasicInfo({ data }) {
  return (
    <section className={styles.basicInfoSection}>
      <div className={styles.textContainer}>
        <h2 className={styles.sectionHeading}>Behavior & Traits</h2>
        
        <div className={styles.behaviour}>
          {data.behaviour.split('\n').map((line, index) => {
            // Prevent rendering empty paragraphs if there are double newlines
            if (!line.trim()) return null;
            return (
              <p key={index} className={styles.paragraph}>
                {line}
              </p>
            );
          })}
        </div>
      </div>

      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          alt={`${data.name} manifestation`}
          src={data.image}
        />
      </div>
    </section>
  );
}