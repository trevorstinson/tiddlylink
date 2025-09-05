import React, { FC } from 'react';
import LinkInputArea from '../LinkInputArea/LinkInputArea';
import LinkOutputArea from '../LinkOutputArea/LinkOutputArea';
import styles from './LinkCleaner.module.css';

interface LinkCleanerProps {}

const LinkCleaner: FC<LinkCleanerProps> = () => {
  const [urlInput, setUrlInput] = React.useState('');
  const [urlOutput, setUrlOutput] = React.useState('');

  React.useEffect(() => {
    const dirty = urlInput;
    const indexOfQuestionMark = dirty.indexOf('?');

    if (indexOfQuestionMark === -1) {
      setUrlOutput(dirty);
    } else {
      const cleaned = dirty.slice(0, indexOfQuestionMark);
      setUrlOutput(cleaned);
    }
  }, [urlInput]);

  return (
    <div className={styles.LinkCleaner}>
      <LinkInputArea
        urlInput={urlInput}
        setUrlInput={setUrlInput}
      ></LinkInputArea>

      <LinkOutputArea
        urlOutput={urlOutput}
        setUrlOutput={setUrlOutput}
      ></LinkOutputArea>
    </div>
  );
};

export default LinkCleaner;
