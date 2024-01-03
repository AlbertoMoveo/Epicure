import React from 'react';
import styles from './Header.module.scss';

import LayoutContainer from '../LayoutContainer/LayoutContainer';

function Header() {
  return (
    <LayoutContainer>
      <div className={styles.header}>
        HEADER
      </div>
    </LayoutContainer>
  );
}

export default Header;
