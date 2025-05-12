import { Routes, Route } from 'react-router-dom';

import StartScreen from '../components/quiz/StartScreen';
import QuizScreen from '../components/quiz/QuizScreen';
import ResultScreen from '../components/quiz/ResultScreen';
import LevelResultScreen from '../components/quiz/LevelResultScreen';
import ErrorPage from '../pages/ErrorPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/quiz" element={<QuizScreen />} />
        <Route path="/level-result" element={<LevelResultScreen />} />
        <Route path="/final-result" element={<ResultScreen />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
