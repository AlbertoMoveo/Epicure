import React from 'react';
import styles from './Hero.module.scss';
import searchIcon from '../../../../assets/svg/search-icon.svg';

const Hero: React.FC = () => {
  return (
    <div className={styles['hero-section']}>
      <div className={styles['small-hero']}>
        <div className={styles['title']}>
          Epicure works with the top chef restaurants in Tel Aviv
        </div>
        <div className={styles['search-bar']}>
          <img src={searchIcon} alt="Search Icon" className={styles['search-icon']} />
          Search for restaurant, cuisine, chef
        </div>
      </div>
    </div>
  );
};

export default Hero;
