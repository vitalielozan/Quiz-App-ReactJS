import { useQuizContext } from '../../hooks/useQuizContext';
import { useNavigate } from 'react-router';
import { Container, Card, ListGroup, Button } from 'react-bootstrap';
import { totalQuestions } from '../../constants/constant.js';
import { GiLaurelsTrophy } from 'react-icons/gi';
import { FaCheckCircle, FaTimesCircle, FaClock, FaMedal } from 'react-icons/fa';

function ResultScreen() {
  const navigate = useNavigate();
  const { scores, times } = useQuizContext();

  const totalCorrect = scores.easy + scores.medium + scores.difficult;
  const totalWrong = totalQuestions - totalCorrect;
  const totalScore = Math.round((totalCorrect / totalQuestions) * 100);

  const totalTime = times.easy + times.medium + times.difficult;
  const timeInSeconds = Math.floor(totalTime / 1000);

  const handleRestart = () => {
    navigate('/');
  };

  return (
    <Container fluid>
      <Card style={{ width: '28rem' }} className='bg-transparent mx-auto mt-5'>
        <Card.Header className='fs-2 fw-medium text-center'>
          <GiLaurelsTrophy /> Congratulations! You've finished the quiz!
        </Card.Header>
        <ListGroup variant='flush' className='fs-5'>
          <ListGroup.Item className='bg-transparent '>
            <FaCheckCircle /> Correct Answers:{totalCorrect}
          </ListGroup.Item>
          <ListGroup.Item className='bg-transparent '>
            <FaTimesCircle /> Wrong Answers:{totalWrong}
          </ListGroup.Item>
          <ListGroup.Item className='bg-transparent '>
            <FaMedal /> Total Score: {totalScore}%
          </ListGroup.Item>
          <ListGroup.Item className='bg-transparent '>
            <FaClock /> Total Time Taken:{timeInSeconds} sec
          </ListGroup.Item>
        </ListGroup>
        <div className='d-flex justify-content-around pb-3 mt-3'>
          <Button variant='primary' onClick={handleRestart}>
            Restart Quiz
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default ResultScreen;
