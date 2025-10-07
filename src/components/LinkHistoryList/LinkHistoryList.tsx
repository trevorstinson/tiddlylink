import { FC } from 'react';
import LinkHistoryItem from '../LinkHistoryItem/LinkHistoryItem';
import styles from './LinkHistoryList.module.css';

interface LinkHistoryListProps {
  historyList: { id: string; originalUrl: string; cleanUrl: string | null }[];
}

const LinkHistoryList: FC<LinkHistoryListProps> = ({ historyList }) => (
  <div className={styles.LinkHistoryList}>
    {historyList.map(({ id, originalUrl, cleanUrl }) => (
      <LinkHistoryItem key={id} originalUrl={originalUrl} cleanUrl={cleanUrl} />
    ))}
  </div>
);

export default LinkHistoryList;
