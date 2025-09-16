import { FC } from 'react';
import LinkHistoryItem from '../LinkHistoryItem/LinkHistoryItem';
import styles from './LinkHistoryList.module.css';

interface LinkHistoryListProps {
  historyList: { id: string; url: string }[];
}

const LinkHistoryList: FC<LinkHistoryListProps> = ({ historyList }) => (
  <div className={styles.LinkHistoryList}>
    {historyList.map(({ id, url }) => (
      <LinkHistoryItem key={id}>{url}</LinkHistoryItem>
    ))}
  </div>
);

export default LinkHistoryList;
