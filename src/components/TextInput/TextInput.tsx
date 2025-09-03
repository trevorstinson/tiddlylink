import { Dispatch, FC, SetStateAction } from 'react';
import styles from './TextInput.module.css';

interface TextInputProps {
  id: string;
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const TextInput: FC<TextInputProps> = ({ id, label, value, setValue }) => {
  const fieldId = `${label.toLocaleLowerCase()}-field`;

  return (
    <div id={id} className={styles.TextInput}>
      <label htmlFor={fieldId}>{label}:</label>
      <input
        id={fieldId}
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
        }}
      />
    </div>
  );
};

export default TextInput;
