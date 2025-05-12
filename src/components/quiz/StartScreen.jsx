import React, { useState } from 'react';
import { Container, Button, Card, Form, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useQuizContext } from '../../hooks/useQuizContext';

function StartScreen() {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState('');
  const { resetQuiz, setStartTime } = useQuizContext();

  const handleStartQuiz = () => {
    resetQuiz();
    setStartTime(Date.now());
    navigate(`/quiz?level=${selectedLevel}`);
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-start min-vh-100"
    >
      <Row className="w-100">
        <Col className="mx-auto">
          <Card className="text-center bg-transparent shadow-sm border-0">
            <Card.Body>
              <Card.Title className="fs-1 my-3">
                Geography Science Quiz.
              </Card.Title>
              <Card.Text className="my-3">Are you ready ?</Card.Text>
              <Form.Group controlId="formBasicSelect" className="my-3">
                <Form.Select
                  className="mb-5"
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                >
                  <option value="" disabled>
                    --Choose difficulty--
                  </option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Difficult</option>
                </Form.Select>
              </Form.Group>
              <Button
                variant="primary"
                className="custom-margin-top"
                onClick={handleStartQuiz}
              >
                Start Quiz
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default StartScreen;
