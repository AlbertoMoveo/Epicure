import { configureStore } from '@reduxjs/toolkit';
import dishReducer from './popDish/popDishSlice';
import restaurantReducer from './popRestaurant/popRestaurantSlice';
import chefReducer from './chefs/chefSlice';
import searchReducer from './search/searchSlice';

const store = configureStore({
  reducer: {
    dish: dishReducer,
    restaurant: restaurantReducer,
    chef: chefReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
