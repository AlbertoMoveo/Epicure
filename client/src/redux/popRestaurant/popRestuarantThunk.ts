import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRestaurantData = createAsyncThunk('restaurant/fetchRestaurantData', async () => {
    try {
      const response = await axios.get('http://ec2-16-171-9-90.eu-north-1.compute.amazonaws.com:3001/api/v1/restaurants/');
      return response.data;
    } catch (error) {
      throw error;
    }
  });

export const fetchRestaurantDataByRating = createAsyncThunk('restaurant/fetchRestaurantDataByRating', async () => {
  try {
    const response = await axios.get('http://ec2-16-171-9-90.eu-north-1.compute.amazonaws.com:3001/api/v1/restaurants/getAllRestaurantsByRating');
    return response.data;
  } catch (error) {
    throw error;
  }
})