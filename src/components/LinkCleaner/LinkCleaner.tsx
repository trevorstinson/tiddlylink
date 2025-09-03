import React, { FC } from 'react';
import TextInput from '../TextInput/TextInput';
import styles from './LinkCleaner.module.css';

interface LinkCleanerProps {}

const LinkCleaner: FC<LinkCleanerProps> = () => {
  const [urlInput, setUrlInput] = React.useState('');

  return (
    <div className={styles.LinkCleaner}>
      <TextInput
        label="Original Link"
        value={urlInput}
        setValue={setUrlInput}
      />
    </div>
  );
};

export default LinkCleaner;
