import axios from 'axios';
import { API_URL } from '../constants/constant';

const BASE_URL = API_URL;

export const getQuestionsByLevel = async (level) => {
  try {
    const response = await axios.get(`${BASE_URL}/questions?level=${level}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
};
