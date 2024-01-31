import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDishData = createAsyncThunk('dish/fetchDishData', async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/v1/dishes/');
      return response.data;
    } catch (error) {
      throw error;
    }
  });