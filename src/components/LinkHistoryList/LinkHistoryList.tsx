import { FC } from 'react';
import styles from './LinkHistoryList.module.css';

interface LinkHistoryListProps {
  historyList: { id: string; url: string }[];
}

const LinkHistoryList: FC<LinkHistoryListProps> = ({ historyList }) => (
  <div className={styles.LinkHistoryList}>
    {historyList.map(({ id, url }) => (
      <pre key={id}>{url}</pre>
    ))}
  </div>
);

export default LinkHistoryList;
