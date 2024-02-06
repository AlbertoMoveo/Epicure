import React, { ReactNode } from 'react';
import styles from './CardSection.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

import moreButton from '../../assets/svg/More-button.svg';


interface CardSectionProps {
  cards: ReactNode[];
  backgroundColor?: string;
  yPadding?: number;
  moreButtonTitle?: string;
}

const CardSection: React.FC<CardSectionProps> = ({ cards, backgroundColor, yPadding, moreButtonTitle }) => {
  return (
    <div className={styles['card-section']}>
      <Swiper
        effect="coverflow"
        slidesPerView={3}
        autoplay={true}
        initialSlide={1}
        spaceBetween={24}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        breakpoints={{
          // Desktop
          768: {
            slidesPerView: 3,
            initialSlide: 0,
            autoHeight: true,
            allowSlidePrev: true,
            allowSlideNext: true,
          },
          // Mobile
          0: {
            autoHeight: true,
            initialSlide: 0,
            slidesPerView: 4/3,
            allowSlidePrev: true,
            allowSlideNext: true,
          },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className={styles['swiper-slide']} >
            {card}
          </SwiperSlide>
        ))}
      </Swiper>
      {moreButtonTitle && (
        <div className={styles['more-button']}>
          {moreButtonTitle}
          <img src={moreButton} alt="More Restaurants" />
        </div>
      )}
    </div>
  );
};

export default CardSection;
