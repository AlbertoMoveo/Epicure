import React, { ReactNode } from 'react';
import styles from './GenericSection.module.scss';
import LayoutContainer from '../../LayoutContainer/LayoutContainer';

interface GenericSectionProps {
  title?: string;
  backgroundColor?: string;
  marginBottom?: number;
  marginTop?: number;
  children: ReactNode;
}

const GenericSection: React.FC<GenericSectionProps> = ({ title, backgroundColor, marginBottom, marginTop, children }) => {
  return (
    <div className={styles['generic-section-wrapper']} style={{ backgroundColor, marginBottom: `${marginBottom}px`, marginTop: `${marginTop}px` }}>
      <LayoutContainer>
      {title && <div className={styles['title']}>{title}</div>}
        <div className={styles['generic-section']}>
          <div className={styles['content']}>{children}</div>
        </div>
      </LayoutContainer>
    </div>
  );
};

export default GenericSection;
