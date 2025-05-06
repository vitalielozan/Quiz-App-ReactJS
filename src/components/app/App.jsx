import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import StartScreen from '../quiz/start/StartScreen';
import QuizScreen from '../quiz/quizscreen/QuizScreen';
import ResultScreen from '../quiz/resultscreen/ResultScreen';
import LevelResultScreen from '../quiz/resultscreen/LevelResultScreen';
import ErrorPage from '../pages/ErrorPage';

function App() {
  return (
    <Container className="mt-4">
      <Routes>
        <Route path="/" element={<StartScreen />} />
        <Route path="/quiz" element={<QuizScreen />} />
        <Route path="/level-result" element={<LevelResultScreen />} />
        <Route path="/final-result" element={<ResultScreen />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Container>
  );
}

export default App;
