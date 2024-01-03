import React from 'react';
import styles from './Homepage.module.scss';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import DishCard from '../DishCard/DischCard';
import PopularSection from './PopularSection/PopularSection';
import Hero from './Hero/Hero';
import IconSection from './IconSection/IconSection';
import ChefOfTheWeek from './ChefOfTheWeek/ChefOfTheWeek';

import claroImg from '../../assets/png/card-img/claro.png';
import luminaImg from '../../assets/png/card-img/Lumina.png';
import tigerImg from '../../assets/png/card-img/tiger-lily.png';

import threeRateImg from '../../assets/png/card-img/threeRate.png';
import fourRateImg from '../../assets/png/card-img/fourRate.png';

import garbanzoImg from '../../assets/png/card-img/Garbanzo-frito.png';
import padKiImg from '../../assets/png/card-img/Pad-Ki-Mao.png';
import smokedImg from '../../assets/png/card-img/Smoked-Pizza.png';

import veganIcon from '../../assets/svg/Vegan.svg';
import vegetarianIcon from '../../assets/svg/Vegetarian.svg';
import spicyIcon from '../../assets/svg/Spicy.svg';

function Homepage() {
  return (
    <>
      <Hero />
      <PopularSection
        title="popular restaurant in epicure:"
        cards={[
          <RestaurantCard key="1" title="Claro" chef="Ran Shmueli" ratingUrl={fourRateImg} imageUrl={claroImg} />,
          <RestaurantCard key="2" title="Lumina" chef="Meir Adoni" ratingUrl={threeRateImg} imageUrl={luminaImg} />,
          <RestaurantCard key="3" title="Tiger Lily" chef="Yanir Green" ratingUrl={fourRateImg} imageUrl={tigerImg} />,
        ]}
      />
      <PopularSection
        title="SIGNATURE DISH OF:"
        cards={[
          <DishCard key="1" title="Pad Ki Mao" description="Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut" imageUrl={padKiImg} icon={<img src={veganIcon} alt="Vegan Icon" />} price="₪88" />,
          <DishCard key="2" title="Garbanzo Frito" description="Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa" imageUrl={garbanzoImg} icon={<img src={vegetarianIcon} alt="Vegetarian Icon" />} price="₪98" />,
          <DishCard key="3" title="Smoked Pizza" description="Basil dough, cashew 'butter', demi-glace, bison & radish" imageUrl={smokedImg} icon={<img src={spicyIcon} alt="Spicy Icon" />} price="₪65" />,
        ]}
      />
      <IconSection
        title="THE MEANING OF OUR ICONS:"
        icons={[<img src={veganIcon} alt="Vegan Icon" />, <img src={vegetarianIcon} alt="Vegetarian Icon" />, <img src={spicyIcon} alt="Spicy Icon" />]}
        iconTitles={['Vegan', 'Vegetarian', 'Spicy']}
      />
      <ChefOfTheWeek />
    </>
  );
}

export default Homepage;