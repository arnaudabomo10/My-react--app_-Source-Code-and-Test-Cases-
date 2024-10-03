// src/api.js
import axios from 'axios';

const API_KEY = '8ca6954a7bb6a8aeee6bf16ccbef61d2'; //  clé API
const BASE_URL = 'http://api.aviationstack.com/v1';

export const fetchFlights = async (params) => {
  try {
    const response = await axios.get(`${BASE_URL}/flights`, {
      params: {
        access_key: API_KEY,
        ...params,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching flights:', error);
    throw error;
  }
};
