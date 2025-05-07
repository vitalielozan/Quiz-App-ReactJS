import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import StartScreen from '../components/start/StartScreen';
import QuizScreen from '../components/quiz/quizscreen/QuizScreen';
import ResultScreen from '../components/quiz/resultscreen/ResultScreen';
import LevelResultScreen from '../components/quiz/resultscreen/LevelResultScreen';
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
