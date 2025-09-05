import { Dispatch, FC, SetStateAction } from 'react';
import TextInput from '../TextInput/TextInput';
import styles from './LinkOutputArea.module.css';

interface LinkOutputAreaProps {
  urlOutput: string;
  setUrlOutput: Dispatch<SetStateAction<string>>;
}

const LinkOutputArea: FC<LinkOutputAreaProps> = ({
  urlOutput,
  setUrlOutput,
}) => (
  <div className={styles.LinkOutputArea}>
    <TextInput label="Cleaned Link" value={urlOutput} setValue={setUrlOutput} />
  </div>
);

export default LinkOutputArea;
