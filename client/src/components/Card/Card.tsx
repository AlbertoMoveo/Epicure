import React, { ReactNode, useEffect, useState } from 'react';
import styles from './Card.module.scss';

interface CardProps {
  children: ReactNode;
  title: string;
  imageUrl: string;
  minHeight?: number;
  minWidth?: number;
  imgSize?: number;
}

const Card: React.FC<CardProps> = ({ children, title, imageUrl, minHeight, minWidth, imgSize }) => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const adjustedMinHeight = minHeight && windowWidth < 768 ? minHeight / 1.4 : minHeight;
  const adjustedMinWidth = minWidth && windowWidth < 768 ? minWidth / 1.6 : minWidth;
  const adjustedImgSize = imgSize && windowWidth < 768 ? imgSize : imgSize;

  const cardStyle: React.CSSProperties = {
    ...(adjustedMinHeight && { height: `${adjustedMinHeight}px` }),
    ...(adjustedMinWidth && { width: `${adjustedMinWidth}px` }),
  };

  const imgStyle: React.CSSProperties = {
    ...(adjustedImgSize && windowWidth > 768 && { height: `${adjustedImgSize}px` }),
  };

  return (
    <div className={styles['card']}>
      <img src={imageUrl} alt={title} className={styles['card-image']} style={imgStyle} />
      <div className={styles['card-content']} style={cardStyle}>
        <h2 className={styles['card-title']}>{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default Card;
