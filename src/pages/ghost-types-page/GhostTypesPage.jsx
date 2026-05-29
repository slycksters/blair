import { DataList } from '../../components';
import { GhostTypes } from '../../data';
import styles from './GhostTypesPage.module.css';

export function GhostTypesPage() {
  return <DataList data={GhostTypes} title="Ghost Types" />;
}
