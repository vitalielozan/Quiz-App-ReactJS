import React, { useContext } from 'react';
import { QuizContext } from './context';

export const useQuiz = () => useContext(QuizContext);
