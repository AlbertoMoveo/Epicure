import React, { useEffect } from 'react';
import styles from './Chefs.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import { fetchChefData } from '../../../redux/chefs/chefThunk';
import { AppDispatch, RootState } from '../../../redux/store';
import GenericSection from '../Homepage/GenericSection/GenericSection';

const Chefs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const chefs = useSelector((state: RootState) => state.chef.currentChefData);

  useEffect(() => {
    dispatch(fetchChefData());
  }, [dispatch]);

  return (
    <div className={styles['main']}>
      <GenericSection title="Chefs">
        <div className={styles['chef-section']}>
          {chefs.map((chef) => (
            <div key={chef.id} className={styles['chef-of-the-week-container']}>
              <div className={styles['chef-of-the-week-content']}>
                <div className={styles['chef-of-the-week-image']}>
                  <img src={chef.image} alt={`Chef - ${chef.name}`} className={styles['chef-of-the-week-image']} />
                  <div className={styles['chef-name-overlay']}>
                    <p>{chef.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </GenericSection>
    </div>
  );
};

export default Chefs;
