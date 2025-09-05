import { FC } from 'react';
import styles from './Button.module.css';

interface ButtonProps {}

const Button: FC<ButtonProps> = () => (
  <div className={styles.Button}>Button Component</div>
);

export default Button;
