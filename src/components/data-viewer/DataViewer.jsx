import { BasicInfo, Evidence, Tips } from './components';
import styles from './DataViewer.module.css';

export function DataViewer({ data }) {
  return (
    <div className={styles.dataViewer}>
      <h1 className={styles.title}>{data.name}</h1>

      <div className={styles.dataViewerContent}>
        <BasicInfo data={data} />
        {data.evidences && <Evidence data={data} />}
        {data.tips && <Tips data={data} />}
      </div>
    </div>
  );
}
