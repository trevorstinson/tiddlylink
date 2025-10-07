import { Copy, CopyCheck } from 'lucide-react';
import React, { FC } from 'react';
import Button from '../Button/Button';
import styles from './LinkHistoryItem.module.css';

interface LinkHistoryItemProps {
  children: string;
}

const LinkHistoryItem: FC<LinkHistoryItemProps> = ({ children }) => {
  const [copyClicked, setCopyClicked] = React.useState(false);

  const handleCopy = async (): Promise<void> => {
    setCopyClicked(true);

    await window.navigator.clipboard.writeText(children);

    window.setTimeout(() => {
      setCopyClicked(false);
    }, 1500);
  };

  return (
    <div className={styles.LinkHistoryItem}>
      <pre>{children}</pre>
      <Button handleClick={handleCopy}>
        {!copyClicked ? <Copy size={24} /> : <CopyCheck size={24} />}
      </Button>
    </div>
  );
};

export default LinkHistoryItem;
