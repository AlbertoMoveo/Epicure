import React, { ReactNode } from 'react';
import styles from './Card.module.scss';

interface CardProps {
  children: ReactNode;
  title: string;
  imageUrl: string;
  minHeight?: number;
}

const Card: React.FC<CardProps> = ({ children, title, imageUrl, minHeight }) => {
  const cardStyle = minHeight ? { height: `${minHeight}px`} : {};

  return (
    <div className={styles['card']}>
      <img src={imageUrl} alt={title} className={styles['card-image']} />
      <div className={styles['card-content']} style={cardStyle}>
        <h2 className={styles['card-title']}>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Card;
