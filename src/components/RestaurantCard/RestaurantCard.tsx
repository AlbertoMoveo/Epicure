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
      <div className={styles['restaurant-chef']}>
        <p>{chef}</p>
      </div>
      <div className={styles['rating-img']}>
        <img src={ratingUrl} alt={`Rating for ${title}`} />
      </div>
    </Card>
  );
};

export default RestaurantCard;
