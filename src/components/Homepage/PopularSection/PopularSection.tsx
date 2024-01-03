import React from 'react';
import GenericSection from '../GenericSection/GenericSection';
import CardSection from '../../CardSection/CardSection';
import LayoutContainer from '../../LayoutContainer/LayoutContainer';

interface PopularSectionProps {
  title: string;
  cards: React.ReactNode[];
}

const PopularSection: React.FC<PopularSectionProps> = ({ title, cards }) => {
  return (
    <GenericSection title={`Popular ${title}`}>
      <LayoutContainer>
        <CardSection title={title} cards={cards} />
      </LayoutContainer>
    </GenericSection>
  );
};

export default PopularSection;
