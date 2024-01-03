import React, { ReactNode } from 'react';
import styles from './GenericSection.module.scss';
import LayoutContainer from '../../LayoutContainer/LayoutContainer';

interface GenericSectionProps {
  title: string;
  children: ReactNode;
}

const GenericSection: React.FC<GenericSectionProps> = ({ title, children }) => {
  return (
    <LayoutContainer>
      <div className={styles['generic-section']}>
        <div className={styles['content']}>{children}</div>
      </div>
    </LayoutContainer>
  );
};

export default GenericSection;
