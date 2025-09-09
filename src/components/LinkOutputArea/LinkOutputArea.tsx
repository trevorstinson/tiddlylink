import { Dispatch, FC, SetStateAction } from 'react';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './LinkOutputArea.module.css';

interface LinkOutputAreaProps {
  urlOutput: string;
  setUrlOutput: Dispatch<SetStateAction<string>>;
}

const LinkOutputArea: FC<LinkOutputAreaProps> = ({
  urlOutput,
  setUrlOutput,
}) => {
  const handleCopy = async (): Promise<void> => {
    await window.navigator.clipboard.writeText(urlOutput);
  };

  return (
    <div className={styles.LinkOutputArea}>
      <TextInput
        label="Cleaned Link"
        value={urlOutput}
        setValue={setUrlOutput}
      />
      <Button handleClick={handleCopy}>Copy</Button>
    </div>
  );
};

export default LinkOutputArea;
