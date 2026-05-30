import styles from './Tips.module.css';

export function Tips({ data }) {
  return (
    <section className={styles.tipsSection}>
      <h2 className={styles.sectionHeading}>Hunter's Tips</h2>

      <ul className={styles.tipsList}>
        {data.tips.map((item) => (
          <li className={styles.tipsListItem} key={item.id}>
            <p className={styles.tipText}>{item.text}</p>

            {item.media && item.mediaType === 'audio' && (
              <audio className={styles.mediaAudio} controls>
                <source src={item.media} type="audio/mpeg" />
                Your browser does not support audio.
              </audio>
            )}

            {item.media && item.mediaType === 'video' && (
              <video className={styles.mediaVideo} controls>
                <source src={item.media} type="video/mp4" />
                Your browser does not support video.
              </video>
            )}

            {item.media && item.mediaType === 'youtube' && (
              <div className={styles.iframeWrapper}>
                <iframe
                  allowFullScreen
                  className={styles.mediaIframe}
                  src={item.media}
                  title={item.text}
                />
              </div>
            )}

            {item.media && item.mediaType === 'image' && (
              <img className={styles.mediaImage} alt={item.text} src={item.media} />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}