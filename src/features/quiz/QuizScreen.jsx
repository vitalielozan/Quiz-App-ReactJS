import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { getQuestionsByLevel } from './API';
import { useQuiz } from './useQuiz';
import { Container, Card, Button, Spinner } from 'react-bootstrap';
import DigitalClock from './DigitalClock';

function QuizScreen() {
  const location = useLocation();
  const navigate = useNavigate();
  const { updateScore, updateTime } = useQuiz();

  const level = location.state?.level || 'easy';
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [startLevelTime, setStartLevelTime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await getQuestionsByLevel(level);
      setQuestions(data);
      setStartLevelTime(Date.now());
      setLoading(false);
    };
    fetchQuestions();
  }, [level]);

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

      updateScore(level, correctCount);
      updateTime(level, timeSent);
      navigate('/level-result', { state: { level } });
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
      <Container className="text-center mt-5">
        <Spinner animation="border" />
        <p>Questions loading....</p>
      </Container>
    );
  }

  const currentQuestion = questions[currentIndex];

  return (
    <>
      <Container className="mt-5">
        <Card className="mx-auto p-4" style={{ maxWidth: '600px' }}>
          <Card.Title className="fs-3 mb-4">
            {currentQuestion.question}
          </Card.Title>
          {currentQuestion.answers.map((ans, idx) => (
            <Button
              key={idx}
              variant={getButtonVariant(ans.text)}
              className="d-block w-100 my-2"
              onClick={() => handleAnswer(ans.text)}
            >
              {ans.text}
            </Button>
          ))}

          {selectedAnswer && (
            <div className="mt-3">
              {selectedAnswer === correctAnswer ? (
                <div>
                  <p className="text-success fw-bold">✔ Correct!</p>
                  <p>{currentQuestion.explanation}</p>
                </div>
              ) : (
                <p className="text-danger fw-bold">
                  ✘ Wrong! correct answer was: <strong>{correctAnswer}</strong>
                </p>
              )}
              <Button className="mt-3" onClick={handleNext}>
                {currentIndex < questions.length - 1
                  ? 'Next questions'
                  : 'See result'}
              </Button>
            </div>
          )}

          <p className="text-muted mt-3">
            Questions {currentIndex + 1} from {questions.length}
          </p>
        </Card>
      </Container>
      <DigitalClock />
    </>
  );
}

export default QuizScreen;
