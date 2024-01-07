import React from 'react';
import styles from './Header.module.scss';

import homeLogo from '../../assets/svg/Header/HomeLogo.svg';
import searchLogo from '../../assets/svg/Header/SearchLogo.svg';
import profileLogo from '../../assets/svg/Header/ProfileLogo.svg';
import cartLogo from '../../assets/svg/Header/CartLogo.svg';
import hamburgerLogo from '../../assets/svg/Header/Hamburger-Logo.svg';

import LayoutContainer from '../LayoutContainer/LayoutContainer';

function Header() {
  return (
    <LayoutContainer>
      <div className={styles.header}>
        <div className={styles['hamburger-logo-container']}>
          <img src={hamburgerLogo} alt='Hamburger Menu'></img>
        </div>
        <div className={styles['home-logo-container']}>
          <div
            className={`${styles.logo} ${styles['img-logo']}`}
          >
            <img src={homeLogo} alt="Home Logo" />
          </div>
          <div
            className={`${styles['home-title']} ${styles['clickable']}`}
          >
            EPICURE
          </div>
          <div
            className={`${styles['subtitle']}`}
          >
            Restaurants
          </div>
          <div
            className={`${styles['subtitle']}`}
          >
            Chefs
          </div>
        </div>
        <div className={styles['logo-container']}>
          <div
            className={`${styles.logo} ${styles['img-logo']}`}
          >
            <img src={searchLogo} alt="Search Logo" />
          </div>
          <div
            className={`${styles.logo} ${styles['img-logo']}`}
          >
            <img src={profileLogo} alt="Profile Logo" />
          </div>
          <div
            className={`${styles.logo} ${styles['img-logo']}`}
          >
            <img src={cartLogo} alt="Cart Logo" />
          </div>
        </div>
      </div>
    </LayoutContainer>
  );
}

export default Header;
