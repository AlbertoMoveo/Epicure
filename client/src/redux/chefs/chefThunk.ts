import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchChefData = createAsyncThunk('chef/fetchChefData', async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/v1/chefs/');
      return response.data;
    } catch (error) {
      throw error;
    }
  });