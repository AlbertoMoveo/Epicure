import { createSlice } from '@reduxjs/toolkit';
import { fetchChefData } from './chefThunk';
import { IChef } from '../../Interfaces/Interfaces';

interface  chefSliceState { 
  currentIndex: number
  currentChef: IChef | null,
  currentChefData: IChef[]
  status: string
  error: null,
}

const initialState:chefSliceState = {
  currentIndex: 0,
  currentChef: null,
  currentChefData: [],
  status: 'idle',
  error: null,
};

const chefSlice = createSlice({
  name: 'chef',
  initialState,
  reducers: {
    swapDishData: (state) => {
      const nextIndex = (state.currentIndex + 1) % (state.currentChefData.length || 1);
      state.currentIndex = nextIndex;
      state.currentChef = state.currentChefData[nextIndex];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChefData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchChefData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentChefData = action.payload;
        state.currentChef = action.payload[state.currentIndex];
      })
      .addCase(fetchChefData.rejected, (state, action) => {
        state.status = 'failed';
      });
  },
});

export const { swapDishData } = chefSlice.actions;
export { fetchChefData }; 
export default chefSlice.reducer;
