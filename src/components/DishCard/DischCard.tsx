import React from 'react';
import Card from '../Card/Card';
import styles from './DishCard.module.scss';

interface DishCardProps {
  title: string;
  description: string;
  imageUrl: string;
  icon: React.ReactNode;
  price: string;
}

const DishCard: React.FC<DishCardProps> = ({ title, description, imageUrl, icon, price }) => {
  return (
    <Card title={title} imageUrl={imageUrl}>
      {/* <div className={styles['dish-icon']}>{icon}</div> */}
      {icon}
      <p className={styles['dish-description']}>{description}</p>
      <p className={styles['dish-price']}>{price}</p>
    </Card>
  );
};

export default DishCard;
