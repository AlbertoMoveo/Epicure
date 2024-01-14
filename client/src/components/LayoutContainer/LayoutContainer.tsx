import React from 'react';
import styles from './LayoutContainer.module.scss';

function LayoutContainer(props: {
  children: any,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {props.children}
      </div>
    </div>
  );
}

export default LayoutContainer;