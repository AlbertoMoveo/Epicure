import React, { ReactNode } from 'react';
import styles from './CardSection.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

import moreButton from '../../assets/svg/More-button.svg';

interface CardSectionProps {
  cards: ReactNode[];
  backgroundColor?: string;
  yPadding?: number;
  showMoreButton?: boolean;
  moreButtonTitle?: string;
}

const CardSection: React.FC<CardSectionProps> = ({ cards, backgroundColor, yPadding, showMoreButton, moreButtonTitle }) => {
  return (
    <div className={styles['card-section']}>
      <Swiper
        effect="coverflow"
        centeredSlides={true}
        slidesPerView={3}
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
            autoHeight: false,
            allowSlidePrev: false,
            allowSlideNext: false,
          },
          // Mobile
          0: {
            width: 870,
            height: 900,
            initialSlide: 1,
            slidesPerView: 2,
            allowSlidePrev: true,
            allowSlideNext: true,
          },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className={styles['swiper-slide']}>
            <div className="card h-100">{card}</div>
          </SwiperSlide>
        ))}
      </Swiper>
      {showMoreButton && (
        <div className={styles['more-button']}>
          {moreButtonTitle}
          <img src={moreButton} alt="More Restaurants" />
        </div>
      )}
    </div>
  );
};

export default CardSection;
