import { FC } from 'react';
import LinkHistoryItem from '../LinkHistoryItem/LinkHistoryItem';
import styles from './LinkHistoryList.module.css';

interface LinkHistoryListProps {
  historyList: { id: string; cleanUrl: string }[];
}

const LinkHistoryList: FC<LinkHistoryListProps> = ({ historyList }) => (
  <div className={styles.LinkHistoryList}>
    {historyList.map(({ id, cleanUrl: cleanUrl }) => (
      <LinkHistoryItem key={id}>{cleanUrl}</LinkHistoryItem>
    ))}
  </div>
);

export default LinkHistoryList;
