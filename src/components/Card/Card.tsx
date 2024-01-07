import React, { ReactNode } from 'react';
import styles from './Card.module.scss';

interface CardProps {
  children: ReactNode;
  title: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ children, title, imageUrl }) => {
  return (
    <div className={styles['card']}>
      <img src={imageUrl} alt={title} className={styles['card-image']} />
      <h2 className={styles['card-title']}>{title}</h2>
      {children}
    </div>
  );
};

export default Card;
