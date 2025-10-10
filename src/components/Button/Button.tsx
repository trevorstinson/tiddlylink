import { FC, MouseEventHandler } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  handleClick: MouseEventHandler;
  title: string;
}

const Button: FC<ButtonProps> = ({ children, handleClick, title }) => (
  <button
    className={styles.Button}
    onClick={handleClick}
    title={title}
    aria-label={title}
  >
    {children}
  </button>
);

export default Button;
