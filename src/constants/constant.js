export const levels = {
  easy: 'easy',
  medium: 'medium',
  difficult: 'difficult',
};
export const totalQuestions = 30;

export const API_URL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:3001'
    : 'https://my-json-server-five.vercel.app/';
