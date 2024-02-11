import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDishData = createAsyncThunk('dish/fetchDishData', async () => {
    try {
      const response = await axios.get('http://ec2-16-171-9-90.eu-north-1.compute.amazonaws.com:3001/api/v1/dishes/');
      return response.data;
    } catch (error) {
      throw error;
    }
  });