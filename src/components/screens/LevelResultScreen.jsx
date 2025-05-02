import React from 'react';
import { Container, Card, ListGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';

function LevelResultScreen() {
  const navigate = useNavigate();

  const handleNextLevel = () => {
    navigate('/quiz', { state: { level: 'next' } });
  };

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <Container fluid>
      <Card style={{ width: '28rem' }} className="bg-transparent mx-auto mt-5">
        <Card.Header className="fs-2 fw-medium text-center">
          Level Result
        </Card.Header>
        <ListGroup variant="flush" className="fs-5">
          <ListGroup.Item className="bg-transparent ">
            Correct Answers:{' '}
          </ListGroup.Item>
          <ListGroup.Item className="bg-transparent ">
            Wrong Answers:{' '}
          </ListGroup.Item>
          <ListGroup.Item className="bg-transparent ">Score: </ListGroup.Item>
          <ListGroup.Item className="bg-transparent ">
            Time Taken:{' '}
          </ListGroup.Item>
        </ListGroup>
        <div className="d-flex justify-content-around pb-3 mt-3">
          <Button variant="primary" onClick={handleNextLevel}>
            Next Level
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
