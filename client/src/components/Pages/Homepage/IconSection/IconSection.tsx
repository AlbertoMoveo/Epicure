import React from 'react';
import styles from './IconSection.module.scss';
import GenericSection from '../GenericSection/GenericSection';

interface IconSectionProps {
  title: string;
  icons: React.ReactNode[];
  iconTitles: string[];
  backgroundColor?: string;
  yPadding?: number;
}

const IconSection: React.FC<IconSectionProps> = ({ title, icons, iconTitles, backgroundColor, yPadding }) => {
  return (
    <GenericSection title={title} backgroundColor={'#fafafa'}>
      <div className={styles['icon-section']}>
        {icons.map((icon, index) => (
          <div key={index} className={styles['icon']}>
            
            {icon}
            
            <div className={styles['icon-title']}>{iconTitles[index]}</div>
          </div>
        ))}
      </div>
    </GenericSection>
  );
};

export default IconSection;
