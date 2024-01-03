import React from 'react';
import Card from '../Card/Card';
import styles from './RestaurantCard.module.scss';

interface RestaurantCardProps {
  title: string;
  chef: string;
  ratingUrl: string;
  imageUrl: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ title, chef, ratingUrl, imageUrl }) => {
  return (
    <Card title={title} imageUrl={imageUrl}>
      <p className={styles['restaurant-chef']}>{chef}</p>
      <img src={ratingUrl} alt={`Rating for ${title}`} />
    </Card>
  );
};

export default RestaurantCard;
