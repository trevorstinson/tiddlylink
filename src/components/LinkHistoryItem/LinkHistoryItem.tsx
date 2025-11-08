import { Copy, CopyCheck, RotateCcwSquare, RotateCwSquare } from 'lucide-react';
import React, { FC } from 'react';
import Button from '../Button/Button';
import styles from './LinkHistoryItem.module.css';

export interface LinkHistoryItemProps {
  id?: string;
  originalUrl: string;
  cleanUrl: string | null;
}

const LinkHistoryItem: FC<LinkHistoryItemProps> = ({
  originalUrl,
  cleanUrl,
}) => {
  const [copyClicked, setCopyClicked] = React.useState(false);
  const [switchClicked, setSwitchClicked] = React.useState(false);

  const displayedValue = !switchClicked && !!cleanUrl ? cleanUrl : originalUrl;
  const switchTitle =
    displayedValue === cleanUrl
      ? 'Switch to original link'
      : 'Switch to clean link';

  const handleCopy = async (): Promise<void> => {
    setCopyClicked(true);

    await window.navigator.clipboard.writeText(displayedValue);

    window.setTimeout(() => {
      setCopyClicked(false);
    }, 1500);
  };

  const handleSwitch = (): void => {
    setSwitchClicked(!switchClicked);
  };

  return (
    <div className={styles.LinkHistoryItem}>
      <pre>
        <a href={displayedValue} target="_blank">
          {displayedValue}
        </a>
      </pre>
      <div className={styles.buttonWrapper}>
        {cleanUrl && (
          <Button handleClick={handleSwitch} title={switchTitle}>
            {!switchClicked ? <RotateCcwSquare /> : <RotateCwSquare />}
          </Button>
        )}
        <Button handleClick={handleCopy} title="Copy link">
          {!copyClicked ? <Copy size={24} /> : <CopyCheck size={24} />}
        </Button>
      </div>
    </div>
  );
};

export default LinkHistoryItem;
