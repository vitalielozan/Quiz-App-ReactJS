import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Button, Spinner, Row, Col } from 'react-bootstrap';
import { useQuizScreen } from '../../hooks/useQuizScreen.js';
import { useQuizContext } from '../../hooks/useQuizContext.js';
import DigitalClock from './DigitalClock.jsx';

function QuizScreen() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const { updateScore, updateTime } = useQuizContext();
  const { questions, loading, startLevelTime, levelParam } = useQuizScreen();

  const handleAnswer = (selected) => {
    if (selectedAnswer) return;
    const currentQ = questions[currentIndex];
    const correct = currentQ.answers.find((ans) => ans.correct)?.text;

    setSelectedAnswer(selected);
    setCorrectAnswer(correct);

    if (selected === correct) {
      setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setCorrectAnswer(null);
    } else {
      const endTime = Date.now();
      const timeSent = endTime - startLevelTime;

      updateScore(levelParam, correctCount);
      updateTime(levelParam, timeSent);
      navigate(`/level-result?level=${levelParam}`);
    }
  };

  const getButtonVariant = (answerText) => {
    if (!selectedAnswer) return 'outline-primary';
    if (answerText === correctAnswer) return 'succes';
    if (answerText === selectedAnswer) return 'danger';
    return 'outline-secondary';
  };

  if (loading) {
    return (
      <Container className='text-center mt-5'>
        <Spinner animation='border' />
        <p>Questions loading....</p>
      </Container>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <>
      <Container
        fluid
        className='d-flex justify-content-center align-items-start min-vh-100 mt-5'
      >
        <Row className='justify-content-center'>
          <Col className='mx-auto'>
            <Card className='mx-auto p-4 shadow-sm border-0'>
              <Card.Title className='fs-3 mb-4'>
                {currentQuestion.question}
              </Card.Title>
              {currentQuestion.answers.map((ans, idx) => (
                <Button
                  key={idx}
                  variant={getButtonVariant(ans.text)}
                  className='d-block w-100 my-2'
                  onClick={() => handleAnswer(ans.text)}
                >
                  {ans.text}
                </Button>
              ))}

              {selectedAnswer && (
                <div className='mt-3'>
                  {selectedAnswer === correctAnswer ? (
                    <div>
                      <p className='text-success fw-bold'>✔ Correct!</p>
                      <p className='text-center'>
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  ) : (
                    <p className='text-danger fw-bold'>
                      ✘ Wrong! correct answer was:{' '}
                      <strong>{correctAnswer}</strong>
                    </p>
                  )}
                  <Button className='mt-3' onClick={handleNext}>
                    {currentIndex < questions.length - 1
                      ? 'Next questions'
                      : 'See result'}
                  </Button>
                </div>
              )}

              <p className='text-muted mt-3'>
                Questions {currentIndex + 1} from {questions.length}
              </p>
            </Card>
            <DigitalClock />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default QuizScreen;
