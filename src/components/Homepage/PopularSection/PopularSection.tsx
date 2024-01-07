import React from 'react';
import GenericSection from '../GenericSection/GenericSection';
import CardSection from '../../CardSection/CardSection';

interface PopularSectionProps {
  title: string;
  cards: React.ReactNode[];
  showMoreButton?: boolean;
  moreButtonTitle?: string;
}

const PopularSection: React.FC<PopularSectionProps> = ({ title, cards, showMoreButton, moreButtonTitle }) => {
  return (
    <GenericSection title={`${title}`}>
        <CardSection cards={cards} showMoreButton={showMoreButton} moreButtonTitle={moreButtonTitle}/>
    </GenericSection>
  );
};

export default PopularSection;
