import React from 'react';
import Card from '../Card/Card';
import styles from './RestaurantCard.module.scss';

interface RestaurantCardProps {
  title: string;
  chef: string;
  ratingUrl: string;
  imageUrl: string;
  minHeight?: number;
  minWidth?: number;
  imgSize?: number;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ title, chef, ratingUrl, imageUrl, minHeight, minWidth, imgSize }) => {
  return (
    <Card title={title} imageUrl={imageUrl} minHeight={minHeight} minWidth={minWidth} imgSize={imgSize}>
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
