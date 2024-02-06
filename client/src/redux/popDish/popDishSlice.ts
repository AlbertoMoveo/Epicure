import { createSlice } from '@reduxjs/toolkit';
import { fetchDishData } from './popDishThunk';
import { IDish } from '../../Interfaces/Interfaces';

interface initialStateStatus {
  currentIndex: number;
  currentDish: IDish | null;
  currentDishData: IDish[];
  status: string;
  error: null,
}

const initialState: initialStateStatus = {
  currentIndex: 0,
  currentDish: null,
  currentDishData: [],
  status: 'idle',
  error: null,
};

const dishSlice = createSlice({
  name: 'dish',
  initialState,
  reducers: {
    swapDishData: (state) => {
      const nextIndex = (state.currentIndex + 1) % (state.currentDishData.length || 1);
      state.currentIndex = nextIndex;
      state.currentDish = state.currentDishData[nextIndex];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDishData.fulfilled, (state, action) => {        
        state.status = 'succeeded';
        state.currentDishData = action.payload;
        state.currentDish = action.payload[state.currentIndex];
      })
      .addCase(fetchDishData.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const { swapDishData } = dishSlice.actions;
export { fetchDishData }; 
export default dishSlice.reducer;
