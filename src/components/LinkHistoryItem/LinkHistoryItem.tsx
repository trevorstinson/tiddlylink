import { Copy, CopyCheck, RotateCcwSquare, RotateCwSquare } from 'lucide-react';
import React, { FC } from 'react';
import Button from '../Button/Button';
import styles from './LinkHistoryItem.module.css';

interface LinkHistoryItemProps {
  children: string;
}

const LinkHistoryItem: FC<LinkHistoryItemProps> = ({ children }) => {
  const [copyClicked, setCopyClicked] = React.useState(false);
  const [switchClicked, setSwitchClicked] = React.useState(false);

  const handleCopy = async (): Promise<void> => {
    setCopyClicked(true);

    await window.navigator.clipboard.writeText(children);

    window.setTimeout(() => {
      setCopyClicked(false);
    }, 1500);
  };

  const handleSwitch = (): void => {
    setSwitchClicked(!switchClicked);
  };

  return (
    <div className={styles.LinkHistoryItem}>
      <pre>{children}</pre>
      <div>
        <Button handleClick={handleSwitch}>
          {!switchClicked ? <RotateCcwSquare /> : <RotateCwSquare />}
        </Button>
        <Button handleClick={handleCopy}>
          {!copyClicked ? <Copy size={24} /> : <CopyCheck size={24} />}
        </Button>
      </div>
    </div>
  );
};

export default LinkHistoryItem;
