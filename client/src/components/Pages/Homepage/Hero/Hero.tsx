import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchData } from '../../../../redux/search/searchThunk';
import styles from './Hero.module.scss';
import searchIcon from '../../../../assets/svg/search-icon.svg';
import { AppDispatch, RootState } from '../../../../redux/store';
import { ISearchResults } from '../../../../Interfaces/Interfaces';

const Hero: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const searchResults = useSelector((state: RootState) => state.search.searchResults as ISearchResults);

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    setIsSearchFocused(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim() !== '') {
      dispatch(fetchSearchData(searchQuery));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
    console.log('Search results:', searchResults);
  }, [searchResults]);

  return (
    <div className={styles['hero-section']}>
      <div className={styles['small-hero']}>
        <div className={styles['title']}>
          Epicure works with the top chef restaurants in Tel Aviv
        </div>
        <div className={styles['search-bar']}>
          <img src={searchIcon} alt="Search Icon" className={styles['search-icon']} />
          <input
            type="text"
            placeholder={isSearchFocused ? '' : 'Search for restaurant, cuisine, chef'}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
            value={searchQuery}
            onChange={handleInputChange}
            onKeyUp={handleKeyPress}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
