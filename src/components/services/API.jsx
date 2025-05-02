import axios from 'axios';

const API_URL = 'http://localhost:3001/questions';

function fetchQuestions() {
  try {
    const response = axios.get(`${API_URL}/difficulty`);
    if (response.status !== 200) {
      throw new Error('Failed to fetch questions');
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
}

export default fetchQuestions;
