import { useState } from 'react';
import { QuizContext } from './context';

function QuizProvider({ children }) {
  const [scores, setScores] = useState({ easy: 0, medium: 0, difficult: 0 });
  const [times, setTimes] = useState({ easy: 0, medium: 0, difficult: 0 });
  const [startTime, setStartTime] = useState(null);

  const resetQuiz = () => {
    setScores({ easy: 0, medium: 0, difficult: 0 });
    setTimes({ easy: 0, medium: 0, difficult: 0 });
    setStartTime(null);
  };

  const updateScore = (level, score) => {
    setScores((prev) => ({ ...prev, [level]: score }));
  };

  const updateTime = (level, time) => {
    setTimes((prev) => ({ ...prev, [level]: time }));
  };

  return (
    <QuizContext.Provider
      value={{
        scores,
        times,
        startTime,
        setStartTime,
        resetQuiz,
        updateScore,
        updateTime,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export default QuizProvider;
