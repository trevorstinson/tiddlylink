import { Dispatch, FC, SetStateAction } from 'react';
import TextInput from '../TextInput/TextInput';
import styles from './LinkInputArea.module.css';

interface LinkInputAreaProps {
  urlInput: string;
  setUrlInput: Dispatch<SetStateAction<string>>;
}

const LinkInputArea: FC<LinkInputAreaProps> = ({ urlInput, setUrlInput }) => (
  <div className={styles.LinkInputArea}>
    <TextInput
      label="Your Link"
      placeholder="https://example.com/stuff/"
      value={urlInput}
      setValue={setUrlInput}
    />
  </div>
);

export default LinkInputArea;
