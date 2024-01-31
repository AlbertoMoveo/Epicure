import React, { useEffect } from 'react';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import DishCard from '../DishCard/DischCard';
import PopularSection from './PopularSection/PopularSection';
import Hero from './Hero/Hero';
import IconSection from './IconSection/IconSection';
import ChefOfTheWeek from './ChefOfTheWeek/ChefOfTheWeek';
import About from './About/About';

import threeRateImg from '../../assets/png/threeRate.png';
import fourRateImg from '../../assets/png/fourRate.png';
import veganIcon from '../../assets/svg/Vegan.svg';
import vegetarianIcon from '../../assets/svg/Vegetarian.svg';
import spicyIcon from '../../assets/svg/Spicy.svg';

import { useDispatch, useSelector } from 'react-redux';
import { fetchDishData } from '../../redux/popDish/popDishThunk';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchRestaurantData } from '../../redux/popRestaurant/popRestuarantThunk';
import { IRestaurant, IDish } from '../../Interfaces/Interfaces';


const Homepage = () => {

  const dispatch = useDispatch<AppDispatch>();

  const popDish = useSelector((state:RootState) => state.dish.currentDishData as IDish[]);
  const popRes = useSelector((state:RootState) => state.restaurant.currentRestaurantData as IRestaurant[]);

  useEffect(()=>{
    dispatch(fetchDishData());
    dispatch(fetchRestaurantData());
  },[dispatch])


  return (
    <>
      <Hero />
      <PopularSection
        title="popular restaurant in epicure:"
        cards={popRes.map(res => (
          <RestaurantCard
            key={res.id}
            title={res.name}
            chef={res.chefName}
            ratingUrl={res.rating === 3 ? threeRateImg : fourRateImg}
            imageUrl={res.image}
            minHeight={200}
          />
        ))}
        showMoreButton={true}
        moreButtonTitle="All Restaurants"
        marginTop={40}
      />
      <PopularSection
        title="SIGNATURE DISH OF:"
        cards={popDish.map(dish => (
          <DishCard
            key={dish.id}
            title={dish.name}
            description={dish.description}
            imageUrl={dish.image}
            icon={dish.tags[0] === 'Spicy' ? <img src={spicyIcon} alt="Spicy Icon" /> : <img src={veganIcon} alt="Vegan Icon" />}
            price={dish.price}
            minHeight={355}
          />
        ))}
      />
      <IconSection
        title="THE MEANING OF OUR ICONS:"
        icons={[<img src={spicyIcon} alt="Spicy Icon" />,
        <img src={vegetarianIcon} alt="Vegetarian Icon" />,
        <img src={veganIcon} alt="Vegan Icon" />]}
        iconTitles={['Spicy', 'Vegetarian', 'Vegan']}
      />
      <ChefOfTheWeek />
      <About />
    </>
  );
}

export default Homepage;
