import React from 'react';
import styles from './ChefOfTheWeek.module.scss';
import GenericSection from '../GenericSection/GenericSection';
import CardSection from '../../CardSection/CardSection';
import Card from '../../Card/Card';

import chefOfTheWeekImage from '../../../assets/png/ChefWeek.png';
import onzaImg from '../../../assets/png/Onza.png';
import kitchenImg from '../../../assets/png/Kitchen-Market.png';
import mashyaImg from '../../../assets/png/Mashya.png';

const chefOfTheWeekRestaurants = [
  { id: "0", title: "Onza", imageUrl: onzaImg, description: "" },
  { id: "1", title: "Kitchen Market", imageUrl: kitchenImg, description: "" },
  { id: "2", title: "Mashya", imageUrl: mashyaImg, description: "" },
];

function ChefOfTheWeek() {
  return (
    <GenericSection title="Chef of the Week:">
      <div className={styles['chef-of-the-week-container']}>
        <div className={styles['chef-of-the-week-content']}>
          <div className={styles['chef-of-the-week-image']}>
            <img src={chefOfTheWeekImage} alt="Chef of the Week" />
            <div className={styles['chef-name-overlay']}>
              <p>Yossi Shitrit</p>
            </div>
          </div>
          <p className={styles['chef-of-the-week-description']}>
            Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades,
            including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav Udim.
            Shitrit's creativity and culinary acumen born of long experience are expressed in every detail of each and every dish.
          </p>
        </div>
      </div>
      <h3 className={styles['card-section-title']}>Yossi’s Restaurants</h3>
      <div className={styles['card-section']}>
        <CardSection
          cards={chefOfTheWeekRestaurants.map((restaurant) => (
            <Card key={restaurant.id} title={restaurant.title} imageUrl={restaurant.imageUrl} minHeight={150}>
              <p>{restaurant.description}</p>
            </Card>
          ))}
        />
      </div>
    </GenericSection>
  );
}

export default ChefOfTheWeek;
