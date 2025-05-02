import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import StartScreen from './screens/StartSreen';
import QuizScreen from './screens/QuizScreen';
import ResultScreen from './screens/ResultScreen';
import LevelResultScreen from './screens/LevelResultScreen';
import ErrorPage from './ErrorPage';

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
