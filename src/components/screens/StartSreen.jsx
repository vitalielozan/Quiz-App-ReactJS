import React from 'react';
import { useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function StartScreen() {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleStartQuiz = () => {
    navigate('/quiz', { state: { level: selectedLevel } });
  };

  return (
    <>
      <Card
        style={{ width: '28rem' }}
        className="d-flex flex-column justify-content-between text-center bg-transparent mx-auto mt-5"
      >
        <Card.Body>
          <Card.Title className="fs-1">Geography Science Quiz</Card.Title>
          <Card.Text>Are you ready ?</Card.Text>
          <Form.Group controlId="formBasicSelect" className="mb-3">
            <Form.Select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="">-- Select difficulty --</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Difficult</option>
            </Form.Select>
          </Form.Group>
          <Button
            variant="primary"
            onClick={handleStartQuiz}
            className={selectedLevel ? 'mt-5' : 'mt-2'}
          >
            Start Quiz
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default StartScreen;
