import React, { Dispatch, FC, RefObject, SetStateAction } from 'react';
import styles from './TextInput.module.css';

interface TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  inputRef?: RefObject<HTMLInputElement | null>;
}

const TextInput: FC<TextInputProps> = ({
  label,
  placeholder,
  value,
  setValue,
  inputRef,
}) => {
  const id = React.useId();
  const wrapperId = `${id}-input-wrapper`;
  const inputId = `${id}-input`;

  return (
    <div id={wrapperId} className={styles.TextInput}>
      <label htmlFor={inputId}>{label}:</label>
      <input
        ref={inputRef}
        id={inputId}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
};

export default TextInput;
