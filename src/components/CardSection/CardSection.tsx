import React, { ReactNode } from 'react';
import styles from './CardSection.module.scss';
import LayoutContainer from '../LayoutContainer/LayoutContainer';

interface CardSectionProps {
  title: string;
  cards: ReactNode[];
}

const CardSection: React.FC<CardSectionProps> = ({ title, cards }) => {
  return (
    <LayoutContainer>
      <div className={styles['card-section']}>
        <div className={styles['title']}>{title}</div>
        <div className={styles['cards-container']}>
          {cards.map((card, index) => (
            <div key={index} className={styles['card']}>
              {card}
            </div>
          ))}
        </div>
      </div>
    </LayoutContainer>
  );
};

export default CardSection;
