import { FC, MouseEventHandler } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: string;
  handleClick: MouseEventHandler;
}

const Button: FC<ButtonProps> = ({ children, handleClick }) => (
  <button className={styles.Button} onClick={handleClick}>
    {children}
  </button>
);

export default Button;
