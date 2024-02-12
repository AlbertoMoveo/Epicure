import React from 'react';
import Card from '../Card/Card';
import styles from './DishCard.module.scss';

interface DishCardProps {
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
  price: string;
  minHeight?: number;
  minWidth?: number;
}

const DishCard: React.FC<DishCardProps> = ({ title, description, imageUrl, icon, price, minHeight, minWidth }) => {
  return (
    <Card title={title} imageUrl={imageUrl} minHeight={minHeight} minWidth={minWidth}>
      {icon}
        <p className={styles['dish-description']}>{description}</p>
        <div className={styles['dish-price-container']}>
          <div className={styles['dish-divider']}></div>
          <p className={styles['dish-price']}>₪ {price}</p>
          <div className={styles['dish-divider']}></div>
        </div>
    </Card>
  );
};

export default DishCard;
