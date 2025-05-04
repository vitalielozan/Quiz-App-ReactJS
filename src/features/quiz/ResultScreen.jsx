import { useQuiz } from './useQuiz';
import { useNavigate } from 'react-router';
import { Container, Card, ListGroup, Button } from 'react-bootstrap';

function ResultScreen() {
  const navigate = useNavigate();
  const { scores, times } = useQuiz();
  const levels = ['easy', 'medium', 'difficult'];

  const totalCorrect = scores.easy + scores.medium + scores.difficult;
  const totalWrong = 30 - totalCorrect;
  const totalScore = Math.round((totalCorrect / 30) * 100);

  const totalTime = times.easy + times.medium + times.difficult;
  const timeInSeconds = Math.floor(totalTime / 1000);

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <Container fluid>
      <Card style={{ width: '28rem' }} className="bg-transparent mx-auto mt-5">
        <Card.Header className="fs-2 fw-medium text-center">
          🎉 Congratulations! You've finished the quiz!
        </Card.Header>
        <ListGroup variant="flush" className="fs-5">
          <ListGroup.Item className="bg-transparent ">
            ✅ Correct Answers:{totalCorrect}
          </ListGroup.Item>
          <ListGroup.Item className="bg-transparent ">
            ❌ Wrong Answers:{totalWrong}
          </ListGroup.Item>
          <ListGroup.Item className="bg-transparent ">
            🧠 Total Score: {totalScore}%
          </ListGroup.Item>
          <ListGroup.Item className="bg-transparent ">
            ⏱️ Total Time Taken:{timeInSeconds} sec
          </ListGroup.Item>
        </ListGroup>

        <Card.Body>
          <Card.Title className="text-center mt-3">📌 Level Result:</Card.Title>
          <ListGroup variant="flush" className="fs-6">
            {levels.map((level) => {
              const correct = scores[level];
              const wrong = 10 - correct;
              const time = Math.floor(times[level] / 1000);
              return (
                <ListGroup.Item key={level} className="bg-light">
                  <strong>{level.toUpperCase()}:</strong> {correct} correct,{' '}
                  {wrong} wrong, {time} sec
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </Card.Body>

        <div className="d-flex justify-content-around pb-3 mt-3">
          <Button variant="primary" onClick={handleRestart}>
            🔁 Restart Quiz
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default ResultScreen;
