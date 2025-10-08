import React, { FC } from 'react';
import { LinkHistoryItemProps } from '../LinkHistoryItem/LinkHistoryItem';
import LinkHistoryList from '../LinkHistoryList/LinkHistoryList';
import LinkInputArea from '../LinkInputArea/LinkInputArea';
import styles from './LinkCleaner.module.css';

interface LinkCleanerProps {}

const LinkCleaner: FC<LinkCleanerProps> = () => {
  const [urlInput, setUrlInput] = React.useState('');
  const [historyList, setHistoryList] = React.useState(
    [] as LinkHistoryItemProps[]
  );

  const createHistoryItem = (input: string): LinkHistoryItemProps => {
    const indexOfQuestionMark = input.indexOf('?');

    return {
      id: crypto.randomUUID(),
      originalUrl: input,
      cleanUrl:
        indexOfQuestionMark === -1 ? null : input.slice(0, indexOfQuestionMark),
    };
  };

  React.useEffect(() => {
    if (urlInput.length === 0) {
      return;
    }

    const newItem = createHistoryItem(urlInput);

    setHistoryList([newItem, ...historyList]);
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
