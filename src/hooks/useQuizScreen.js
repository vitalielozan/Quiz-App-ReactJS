import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getQuestionsByLevel } from '../utils/axiosAPI.js';
import { levels } from '../constants/constant.js';

export const useQuizScreen = () => {
  const [searchParams] = useSearchParams();
  const levelParam = searchParams.get('level')?.toLowerCase() || levels.easy;

  const [questions, setQuestions] = useState([]);
  const [startLevelTime, setStartLevelTime] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await getQuestionsByLevel(levelParam);
      setTimeout(() => {
        setQuestions(data);
        setLoading(false);
        setStartLevelTime(Date.now());
      }, 1000);
    };
    fetchQuestions();
  }, [levelParam]);

  return {
    questions,
    startLevelTime,
    loading,
    levelParam,
  };
};
