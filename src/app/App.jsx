import { Routes, Route } from 'react-router-dom';

import StartScreen from '../components/start/StartScreen';
import QuizScreen from '../components/quiz/quizscreen/QuizScreen';
import ResultScreen from '../components/quiz/resultscreen/ResultScreen';
import LevelResultScreen from '../components/quiz/resultscreen/LevelResultScreen';
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
