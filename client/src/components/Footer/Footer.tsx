import React from 'react';
import styles from './Footer.module.scss';

import LayoutContainer from '../LayoutContainer/LayoutContainer';

function Footer() {
  return (
    <LayoutContainer>
      <div className={styles.footer}>
        <div className={styles['footer-subtitle']}>Contact Us</div>
        <div className={styles['footer-subtitle']}>Terms of Use</div>
        <div className={styles['footer-subtitle']}>Privacy Policy</div>
      </div>
    </LayoutContainer>
  );
}

export default Footer;
