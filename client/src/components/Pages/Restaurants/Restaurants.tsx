import React, { useEffect } from 'react';
import RestaurantCard from '../../RestaurantCard/RestaurantCard';
import styles from './Restaurants.module.scss';

import oneRateImg from '../../../assets/png/oneRate.png';
import twoRateImg from '../../../assets/png/twoRate.png';
import threeRateImg from '../../../assets/png/threeRate.png';
import fourRateImg from '../../../assets/png/fourRate.png';
import fiveRateImg from '../../../assets/png/fiveRate.png';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../redux/store';
import { fetchRestaurantDataByRating } from '../../../redux/popRestaurant/popRestuarantThunk';
import GenericSection from '../Homepage/GenericSection/GenericSection';

const Restaurants = () => {
  const dispatch = useDispatch<AppDispatch>();
  const allRes = useSelector((state: RootState) => state.restaurant.currentRestaurantData);

  useEffect(() => {
    dispatch(fetchRestaurantDataByRating());
  }, [dispatch]);

  const ratingUrls: Record<number, string> = {
    1: oneRateImg,
    2: twoRateImg,
    3: threeRateImg,
    4: fourRateImg,
    5: fiveRateImg,
  };
  const getRatingUrl = (rating: number) => ratingUrls[rating] || '';

  return (
    <div className={styles['main']}>
    <GenericSection title='Restaurants'>
    <div className={styles['card-section']}>
      {allRes.map((res) => (
        <div className={styles['card']} key={res.id}>
          <RestaurantCard
            title={res.name}
            chef={res.chefName}
            ratingUrl={getRatingUrl(res.rating)}
            imageUrl={res.image}
            minHeight={200}
          />
        </div>
      ))}
    </div>
    </GenericSection>
    </div>
  );
};

export default Restaurants;
