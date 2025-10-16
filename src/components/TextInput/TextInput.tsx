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
    <>
      <label htmlFor={inputId} className={styles.label}>
        {label}:
      </label>
      <input
        className={styles.input}
        ref={inputRef}
        id={inputId}
        placeholder={placeholder}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </>
  );
};

export default TextInput;
