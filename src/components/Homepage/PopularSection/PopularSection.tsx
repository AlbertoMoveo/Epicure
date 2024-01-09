import React from 'react';
import GenericSection from '../GenericSection/GenericSection';
import CardSection from '../../CardSection/CardSection';

interface PopularSectionProps {
  title: string;
  cards: React.ReactNode[];
  showMoreButton?: boolean;
  moreButtonTitle?: string;
  marginTop?: number;
}

const PopularSection: React.FC<PopularSectionProps> = ({ title, cards, showMoreButton, moreButtonTitle, marginTop }) => {
  return (
    <GenericSection title={`${title}`} marginTop={marginTop}>
        <CardSection cards={cards}  moreButtonTitle={moreButtonTitle}/>
    </GenericSection>
  );
};

export default PopularSection;
