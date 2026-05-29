import styles from './Tips.module.css';

export function Tips({ data }) {
  return (
    <section className={styles.tipsSection}>
      <h6>Tips</h6>

      <ul className={styles.tipsList}>
        {data.tips.map((item) => (
          <li className={styles.tipsListItem} key={item.id}>
            <p>{item.text}</p>

            {item.media && item.mediaType === 'audio' && (
              <audio className={styles.media} controls>
                <source src={item.media} type="audio/mpeg" />
                Your browser does not support audio.
              </audio>
            )}

            {item.media && item.mediaType === 'video' && (
              <video className={styles.media} controls>
                <source src={item.media} type="video/mp4" />
                Your browser does not support video.
              </video>
            )}

            {item.media && item.mediaType === 'youtube' && (
              <iframe
                allowFullScreen
                className={styles.media}
                src={item.media}
                title={item.text}
              />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
