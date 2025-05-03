import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const getQuestionsByLevel = async (level) => {
  try {
    const response = await axios.get(`${BASE_URL}/questions?level=${level}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    return [];
  }
};
