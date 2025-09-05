import React, { FC } from 'react';
import LinkInputArea from '../LinkInputArea/LinkInputArea';
import TextInput from '../TextInput/TextInput';
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

      <TextInput
        label="Cleaned Link"
        value={urlOutput}
        setValue={setUrlOutput}
      />
    </div>
  );
};

export default LinkCleaner;
