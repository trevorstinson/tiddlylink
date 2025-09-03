import { Dispatch, FC, SetStateAction } from 'react';
import styles from './TextInput.module.css';

interface TextInputProps {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const TextInput: FC<TextInputProps> = ({
  label = 'Input',
  value,
  setValue,
}) => {
  const fieldId = `${label.toLocaleLowerCase()}-field`;

  return (
    <div className={styles.TextInput}>
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
