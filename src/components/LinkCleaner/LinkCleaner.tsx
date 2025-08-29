import React, { FC } from 'react';
import styles from './LinkCleaner.module.css';

interface LinkCleanerProps {}

const LinkCleaner: FC<LinkCleanerProps> = () => (
  <div className={styles.LinkCleaner}>
    LinkCleaner Component
  </div>
);

export default LinkCleaner;
