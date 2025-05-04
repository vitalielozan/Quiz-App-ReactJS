import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Card, ListGroup, Button } from 'react-bootstrap';
import { useQuiz } from './useQuiz';

function LevelResultScreen() {
  const navigate = useNavigate();
  const location = useLocation();
  const { scores, times } = useQuiz();

  const level = location.state?.level || 'easy';
  const score = scores[level];
  const time = times[level];

  const correctAnswer = score;
  const wrongAnswer = 10 - score;
  const timeInSeconds = Math.floor(time / 1000);

  const handleNextLevel = () => {
    const nextLevel =
      level === 'easy' ? 'medium' : level === 'medium' ? 'difficult' : null;
    if (nextLevel) {
      navigate('/quiz', { state: { level: nextLevel } });
    } else {
      navigate('/final-result');
    }
  };

  const isLastLevel = level === 'difficult';

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <Container fluid>
      <Card style={{ width: '28rem' }} className="bg-transparent mx-auto mt-5">
        <Card.Header className="fs-2 fw-medium text-center">
          Level Result - {level.toUpperCase()}
        </Card.Header>
        <ListGroup variant="flush" className="fs-5">
          <ListGroup.Item className="bg-transparent ">
            ✅ Correct Answers:{correctAnswer}
          </ListGroup.Item>
          <ListGroup.Item className="bg-transparent ">
            ❌ Wrong Answers:{wrongAnswer}
          </ListGroup.Item>
          <ListGroup.Item className="bg-transparent ">
            🧠 Level Score: {score * 10}%
          </ListGroup.Item>
          <ListGroup.Item className="bg-transparent ">
            ⏱️ Time Taken:{timeInSeconds} sec
          </ListGroup.Item>
        </ListGroup>
        <div className="d-flex justify-content-around pb-3 mt-3">
          <Button variant="primary" onClick={handleNextLevel}>
            {isLastLevel ? 'Final Result' : 'Next Level'}
          </Button>
          <Button variant="primary" onClick={handleRestart}>
            Restart Quiz
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default LevelResultScreen;
