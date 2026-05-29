import { useParams } from 'react-router';
import { DataViewer } from '../../components';
import { GhostTypes } from '../../data';
import styles from './GhostTypeViewPage.module.css';

export function GhostTypeViewPage() {
  const { name } = useParams();
  const ghostType = GhostTypes.find((item) => item.slug === name);

  return <DataViewer data={ghostType} />;
}
