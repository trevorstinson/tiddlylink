import React, { Dispatch, FC, SetStateAction } from 'react';
import TextInput from '../TextInput/TextInput';

interface LinkInputAreaProps {
  urlInput: string;
  setUrlInput: Dispatch<SetStateAction<string>>;
}

const LinkInputArea: FC<LinkInputAreaProps> = ({ urlInput, setUrlInput }) => {
  const inputRef = React.createRef<HTMLInputElement>();

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <TextInput
      inputRef={inputRef}
      label="Your Link"
      placeholder="https://example.com/stuff/"
      value={urlInput}
      setValue={setUrlInput}
    />
  );
};

export default LinkInputArea;
