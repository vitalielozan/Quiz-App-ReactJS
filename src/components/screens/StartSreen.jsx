import React from 'react';
import { useState } from 'react';
import { Container, Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function StartScreen() {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleStartQuiz = () => {
    navigate('/quiz', { state: { level: selectedLevel } });
  };

  return (
    <Container fluid>
      <Card
        style={{ width: '28rem' }}
        className="text-center bg-transparent mx-auto mt-5"
      >
        <Card.Body>
          <Card.Title className="fs-1 my-3">Geography Science Quiz</Card.Title>
          <Card.Text className="my-3">Are you ready ?</Card.Text>
          <Form.Group controlId="formBasicSelect" className="my-3">
            <Form.Select
              className="mb-5"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Difficult</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" className="mt-5" onClick={handleStartQuiz}>
            Start Quiz
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default StartScreen;
