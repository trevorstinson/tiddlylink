import { FC } from 'react';
import styles from './LinkHistoryItem.module.css';

interface LinkHistoryItemProps {
  children: string;
}

const LinkHistoryItem: FC<LinkHistoryItemProps> = ({ children }) => (
  <div className={styles.LinkHistoryItem}>
    <pre>{children}</pre>
  </div>
);

export default LinkHistoryItem;
