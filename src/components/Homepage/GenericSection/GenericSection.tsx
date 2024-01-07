import React, { ReactNode } from 'react';
import styles from './GenericSection.module.scss';
import LayoutContainer from '../../LayoutContainer/LayoutContainer';

interface GenericSectionProps {
  title: string;
  backgroundColor?: string;
  yPadding?: number;
  children: ReactNode;
}

const GenericSection: React.FC<GenericSectionProps> = ({ title, backgroundColor, yPadding, children }) => {
  return (
    <div className={styles['generic-section-wrapper']} style={{ backgroundColor, padding: `${yPadding}px` }}>
      <LayoutContainer>
        <div className={styles['title']}>{title}</div>
        <div className={styles['generic-section']}>
          <div className={styles['content']}>{children}</div>
        </div>
      </LayoutContainer>
    </div>
  );
};

export default GenericSection;
