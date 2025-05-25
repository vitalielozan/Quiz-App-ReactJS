import { useNavigate, useSearchParams } from 'react-router-dom';
import { Container, Card, ListGroup, Button } from 'react-bootstrap';
import { useQuizContext } from '../../hooks/useQuizContext';
import { levels } from '../../constants/constant.js';

import {
  FcEngineering,
  FcOk,
  FcOvertime,
  FcHighPriority,
  FcPositiveDynamic,
  FcNegativeDynamic,
} from 'react-icons/fc';

function LevelResultScreen() {
  const navigate = useNavigate();
  const { scores, times } = useQuizContext();
  const [searchParams] = useSearchParams();
  const levelParam = searchParams.get('level')?.toLowerCase() || levels.easy;
  const score = scores[levelParam];
  const time = times[levelParam];

  const correctAnswer = score;
  const wrongAnswer = 10 - score;
  const timeInSeconds = Math.floor(time / 1000);

  const levelOrder = ['easy', 'medium', 'difficult'];
  const handleNextLevel = () => {
    const currentIndex = levelOrder.indexOf(levelParam);
    const nextLevel = levelOrder[currentIndex + 1];
    if (nextLevel) {
      navigate(`/quiz?level=${nextLevel}`);
    } else {
      navigate('/final-result');
    }
  };

  const handleRestartLevel = () => {
    navigate(`/quiz?level=${levelParam}`);
  };

  const isLastLevel = levelParam === levels.difficult;
  const handleRestart = () => {
    navigate('/');
  };

  return (
    <Container fluid>
      <Card style={{ width: '28rem' }} className='bg-transparent mx-auto mt-5'>
        <Card.Header className='fs-2 fw-medium text-center'>
          <FcEngineering /> Level Result - {levelParam.toUpperCase()}
        </Card.Header>
        <ListGroup variant='flush' className='fs-5'>
          <ListGroup.Item className='bg-transparent '>
            <FcOk /> Correct Answers:{correctAnswer}
          </ListGroup.Item>
          <ListGroup.Item className='bg-transparent '>
            <FcHighPriority /> Wrong Answers:{wrongAnswer}
          </ListGroup.Item>
          <ListGroup.Item className='bg-transparent '>
            {score * 10 > 5 ? <FcPositiveDynamic /> : <FcNegativeDynamic />}{' '}
            Level Score: {score * 10}%
          </ListGroup.Item>
          <ListGroup.Item className='bg-transparent '>
            <FcOvertime /> Time Taken:{timeInSeconds} sec
          </ListGroup.Item>
        </ListGroup>
        <div className='d-flex justify-content-around pb-3 mt-3'>
          <Button variant='primary' onClick={handleNextLevel}>
            {isLastLevel ? 'Final Result' : 'Next Level'}
          </Button>
          <Button variant='primary' onClick={handleRestartLevel}>
            Restart Level
          </Button>
          <Button variant='primary' onClick={handleRestart}>
            Restart Quiz
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default LevelResultScreen;
