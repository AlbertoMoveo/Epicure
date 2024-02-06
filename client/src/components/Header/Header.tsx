import React, { useState } from 'react';
import styles from './Header.module.scss';

import homeLogo from '../../assets/svg/Header/HomeLogo.svg';
import searchLogo from '../../assets/svg/Header/SearchLogo.svg';
import profileLogo from '../../assets/svg/Header/ProfileLogo.svg';
import cartLogo from '../../assets/svg/Header/CartLogo.svg';
import hamburgerLogo from '../../assets/svg/Header/Hamburger-Logo.svg';

import LayoutContainer from '../LayoutContainer/LayoutContainer';
import { Link } from 'react-router-dom';

function Header() {
  const [activeLink, setActiveLink] = useState('');

  return (
    <div className={styles['header-wrapper']}>
      <LayoutContainer>
        <div className={styles.header}>
          <div className={styles['hamburger-logo-container']}>
            <img src={hamburgerLogo} alt='Hamburger Menu'></img>
          </div>
          <div className={styles['home-logo-container']}>
            <div className={`${styles.logo} ${styles['img-logo']}`}>
              <img src={homeLogo} alt="Home Logo" />
            </div>
            <Link
              to={'/'}
              className={`${styles['home-title']} ${styles['clickable']} ${activeLink === 'home' && styles.active}`}
              onClick={() => setActiveLink('home')}
            >
              EPICURE
            </Link>
            <Link
              to={'/restaurants'}
              className={`${styles['subtitle']} ${activeLink === 'restaurants' && styles.active}`}
              onClick={() => setActiveLink('restaurants')}
            >
              Restaurants
            </Link>
            <Link
              to={'/chefs'}
              className={`${styles['subtitle']} ${activeLink === 'chefs' && styles.active}`}
              onClick={() => setActiveLink('chefs')}
            >
              Chefs
            </Link>
          </div>
          <div className={styles['logo-container']}>
            <div className={`${styles.logo} ${styles['img-logo']}`}>
              <img src={searchLogo} alt="Search Logo" />
            </div>
            <div className={`${styles.logo} ${styles['img-logo']}`}>
              <img src={profileLogo} alt="Profile Logo" />
            </div>
            <div className={`${styles.logo} ${styles['img-logo']}`}>
              <img src={cartLogo} alt="Cart Logo" />
            </div>
          </div>
        </div>
      </LayoutContainer>
    </div>
  );
}

export default Header;
