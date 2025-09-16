import React, { FC } from 'react';
import LinkHistoryList from '../LinkHistoryList/LinkHistoryList';
import LinkInputArea from '../LinkInputArea/LinkInputArea';
import styles from './LinkCleaner.module.css';

interface LinkCleanerProps {}

const LinkCleaner: FC<LinkCleanerProps> = () => {
  const [urlInput, setUrlInput] = React.useState('');
  const [historyList, setHistoryList] = React.useState(
    [] as { id: string; url: string }[]
  );

  const createHistoryItem = (input: string) => ({
    id: crypto.randomUUID(),
    url: input,
  });

  React.useEffect(() => {
    const indexOfQuestionMark = urlInput.indexOf('?');

    if (urlInput.length === 0) {
      return;
    }

    let newItem;

    if (indexOfQuestionMark === -1) {
      newItem = createHistoryItem(urlInput);
    } else {
      const cleaned = urlInput.slice(0, indexOfQuestionMark);
      newItem = createHistoryItem(cleaned);
    }

    setHistoryList([...historyList, newItem]);
    setUrlInput('');
  }, [urlInput]);

  return (
    <div className={styles.LinkCleaner}>
      <LinkInputArea
        urlInput={urlInput}
        setUrlInput={setUrlInput}
      ></LinkInputArea>

      <LinkHistoryList historyList={historyList} />
    </div>
  );
};

export default LinkCleaner;
