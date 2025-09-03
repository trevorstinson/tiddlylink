import React, { FC } from 'react';
import TextInput from '../TextInput/TextInput';
import styles from './LinkCleaner.module.css';

interface LinkCleanerProps {}

const LinkCleaner: FC<LinkCleanerProps> = () => {
  const [urlInput, setUrlInput] = React.useState('');
  const [urlOutput, setUrlOutput] = React.useState('');

  return (
    <div className={styles.LinkCleaner}>
      <TextInput
        id="url-input"
        label="Original Link"
        value={urlInput}
        setValue={setUrlInput}
      />
      <TextInput
        id="url-output"
        label="Cleaned Link"
        value={urlOutput}
        setValue={setUrlOutput}
      />
    </div>
  );
};

export default LinkCleaner;
