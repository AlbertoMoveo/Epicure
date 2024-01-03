import React from 'react';
import styles from './IconSection.module.scss';
import GenericSection from '../GenericSection/GenericSection';

interface IconSectionProps {
  title: string;
  icons: React.ReactNode[];
  iconTitles: string[];
}

const IconSection: React.FC<IconSectionProps> = ({ title, icons, iconTitles }) => {
  return (
    <div className={styles['icon-section']}>
      <GenericSection title={title}>
      <div className={styles['title']}>{title}</div>
        <div className={styles['icon-container']}>
          {icons.map((icon, index) => (
            <div key={index} className={styles['icon-wrapper']}>
              {icon}
              <div className={styles['icon-title']}>{iconTitles[index]}</div>
            </div>
          ))}
        </div>
      </GenericSection>
    </div>
  );
};

export default IconSection;
