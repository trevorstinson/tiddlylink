import { Copy, CopyCheck } from 'lucide-react';
import React, { FC } from 'react';
import Button from '../Button/Button';
import styles from './LinkHistoryItem.module.css';

interface LinkHistoryItemProps {
  children: string;
}

const LinkHistoryItem: FC<LinkHistoryItemProps> = ({ children }) => {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = async (): Promise<void> => {
    setClicked(true);

    await window.navigator.clipboard.writeText(children);

    window.setTimeout(() => {
      setClicked(false);
    }, 1500);
  };

  return (
    <div className={styles.LinkHistoryItem}>
      <pre>{children}</pre>
      <Button handleClick={handleClick}>
        {!clicked ? <Copy size={24} /> : <CopyCheck size={24} />}
      </Button>
    </div>
  );
};

export default LinkHistoryItem;
