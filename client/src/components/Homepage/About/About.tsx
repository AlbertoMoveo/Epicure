import React from 'react';
import styles from './About.module.scss';
import GenericSection from '../GenericSection/GenericSection';

import aboutImg from '../../../assets/svg/about-logo.svg';
import googleIcon from '../../../assets/svg/Google-icon.svg';
import appleIcon from '../../../assets/svg/Apple-icon.svg';

const About = () => {
  return (
    <GenericSection backgroundColor={'#fafafa'}>
      <div className={styles['title-desktop']}>About Us:</div>
      <div className={styles['about-container']}>
        <div className={styles['about-container-description']}>
          <div className={styles['description-container']}>
          <div className={styles['title-mobile']}>About Us:</div>
            <p className={styles['description']}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros, eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales porta. Vivamus elit urna, dignissim a vestibulum.
              </p>
              <br />
            <p className={styles['description']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros.
            </p>
          </div>
          <div className={styles['icons']}>
            <div className={styles['icon']}>
              <img src={googleIcon} alt="Google Icon" />
              <p>Get it on Google Play</p>
            </div>
            <div className={styles['icon']}>
              <img src={appleIcon} alt="Apple Icon" />
              <p>Download on the App Store</p>
            </div>
          </div>
        </div>
        <div className={styles['about-container-img']}>
      <img src={aboutImg} alt="About Us" className={styles['image']} />
        </div>
      </div>
    </GenericSection>
  );
};

export default About;
