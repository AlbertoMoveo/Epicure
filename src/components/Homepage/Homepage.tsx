import React from 'react';
import styles from './Homepage.module.scss';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import DishCard from '../DishCard/DischCard';
import PopularSection from './PopularSection/PopularSection';
import Hero from './Hero/Hero';
import IconSection from './IconSection/IconSection';
import ChefOfTheWeek from './ChefOfTheWeek/ChefOfTheWeek';
import About from './About/About';
import GenericSection from './GenericSection/GenericSection';

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

const popRes = [
  {
    id: "0",
    title: "Claro",
    chef: "Ran Shmueli",
    rating: fourRateImg,
    image: claroImg,
  },
  {
    id: "1",
    title: "Lumina",
    chef: "Meir Adoni",
    rating: threeRateImg,
    image: luminaImg,
  },
  {
    id: "3",
    title: "Tiger Lily",
    chef: "Yanir Green",
    rating: fourRateImg,
    image: tigerImg,
  },
];

const popDish = [
  {
    id: "0",
    title: "Pad Ki Mao",
    description: "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut",
    imageUrl: padKiImg,
    icon: <img src={veganIcon} alt="Vegan Icon" />,
    price: "₪88",
  },
  {
    id: "1",
    title: "Garbanzo Frito",
    description: "Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa",
    imageUrl: garbanzoImg,
    icon: <img src={vegetarianIcon} alt="Vegetarian Icon" />,
    price: "₪98",
  },
  {
    id: "2",
    title: "Smoked Pizza",
    description: "Basil dough, cashew 'butter', demi-glace, bison & radish",
    imageUrl: smokedImg,
    icon: <img src={spicyIcon} alt="Spicy Icon" />,
    price: "₪65",
  },
];

function Homepage() {
  return (
    <>
      <Hero />
      <PopularSection
        title="popular restaurant in epicure:"
        cards={popRes.map(res => (
          <RestaurantCard key={res.id} title={res.title} chef={res.chef} ratingUrl={res.rating} imageUrl={res.image} minHeight={200} />
        ))}
        showMoreButton={true}
        moreButtonTitle="All Restaurants"
      />
      <PopularSection
        title="SIGNATURE DISH OF:"
        cards={popDish.map(dish => (
          <DishCard
            key={dish.id}
            title={dish.title}
            description={dish.description}
            imageUrl={dish.imageUrl}
            icon={dish.icon}
            price={dish.price}
            minHeight={325}
          />
        ))}
      />
      <IconSection
        title="THE MEANING OF OUR ICONS:"
        yPadding={39}
        icons={[<img src={vegetarianIcon} alt="Vegetarian Icon" />, <img src={spicyIcon} alt="Spicy Icon" />, <img src={veganIcon} alt="Vegan Icon" />]}
        iconTitles={['Spicy', 'Vegetarian', 'Vegan']}
      />
      <ChefOfTheWeek />
      <About />
    </>
  );
}

export default Homepage;
