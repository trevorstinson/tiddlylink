import React, { Dispatch, FC, SetStateAction } from 'react';
import styles from './TextInput.module.css';

interface TextInputProps {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const TextInput: FC<TextInputProps> = ({ label, value, setValue }) => {
  const id = React.useId();
  const wrapperId = `${id}-input-wrapper`;
  const inputId = `${id}-input`;

  return (
    <div id={wrapperId} className={styles.TextInput}>
      <label htmlFor={inputId}>{label}:</label>
      <input
        id={inputId}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
};

export default TextInput;
