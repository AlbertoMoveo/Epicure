import React, { useEffect } from 'react';
import styles from './ChefOfTheWeek.module.scss';
import GenericSection from '../GenericSection/GenericSection';
import CardSection from '../../CardSection/CardSection';
import Card from '../../Card/Card';

import { IChef, IRestaurant } from '../../../Interfaces/Interfaces';
import { useDispatch, useSelector } from 'react-redux';
import { fetchChefData } from '../../../redux/chefs/chefThunk';
import { fetchRestaurantData } from '../../../redux/popRestaurant/popRestuarantThunk';
import { AppDispatch, RootState } from '../../../redux/store';

function ChefOfTheWeek() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([
        dispatch(fetchChefData()),
        dispatch(fetchRestaurantData())
      ]);
    };
  
    fetchData();
  }, [dispatch]);

  const chefOfTheWeek: IChef = useSelector((state: RootState) => state.chef.currentChefData[2] as IChef);
  const restaurants: IRestaurant[] = useSelector((state: RootState) => state.restaurant.currentRestaurantData as IRestaurant[]);

  const chefName: string = chefOfTheWeek?.name;
  const chefOfTheWeekRestaurants: IRestaurant[] = restaurants.filter((restaurant) => restaurant.chefName === chefName);

  return (
    <GenericSection title="Chef of the Week:">
      <div className={styles['chef-of-the-week-container']}>
        <div className={styles['chef-of-the-week-content']}>
          <div className={styles['chef-of-the-week-image']}>
          <img src={chefOfTheWeek? chefOfTheWeek.image : ''} alt={"Chef of the Week"} className={styles['chef-of-the-week-image']} />
            <div className={styles['chef-name-overlay']}>
              <p>{chefOfTheWeek ? chefOfTheWeek.name : 'Chef Name'}</p>
            </div>
          </div>
          <p className={styles['chef-of-the-week-description']}>
            {chefOfTheWeek ? chefOfTheWeek.description : 'Chef description'}
          </p>
        </div>
      </div>
             <h3 className={styles['card-section-title']}>{chefName}’s Restaurants</h3>
       <div className={styles['card-section']}>
         <CardSection
          cards={chefOfTheWeekRestaurants.map((restaurant) => (
            <Card key={restaurant.id} title={restaurant.name} imageUrl={restaurant.image} minHeight={150}>
              <p>{''}</p>
            </Card>
          ))}
        />
      </div>
    </GenericSection>
  );
}

export default ChefOfTheWeek;

