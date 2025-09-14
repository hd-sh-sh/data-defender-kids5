
import React, { useState, useEffect } from 'react';
import { Question, InfoType, AnswerResult } from '../types';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';
import { ShieldExclamationIcon } from './icons/ShieldExclamationIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { XCircleIcon } from './icons/XCircleIcon';

interface GameScreenProps {
  question: Question;
  onAnswer: (answer: InfoType) => void;
  onNext: () => void;
  questionNumber: number;
  totalQuestions: number;
  lastAnswerResult?: AnswerResult;
}

const GameScreen: React.FC<GameScreenProps> = ({
  question,
  onAnswer,
  onNext,
  questionNumber,
  totalQuestions,
  lastAnswerResult,
}) => {
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    setAnswered(false);
  }, [question]);

  const handleAnswerClick = (answer: InfoType) => {
    if (!answered) {
      onAnswer(answer);
      setAnswered(true);
    }
  };

  const isCorrect = lastAnswerResult?.isCorrect;
  const correctAnswer = question.type;
  
  const getFeedbackBgColor = () => {
    if (!answered) return 'bg-gray-100';
    return isCorrect ? 'bg-green-100' : 'bg-red-100';
  };
  
  const getFeedbackBorderColor = () => {
    if (!answered) return 'border-gray-200';
    return isCorrect ? 'border-green-400' : 'border-red-400';
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
      <div className="mb-6">
        <p className="text-right text-gray-500 font-bold text-lg">
          {questionNumber} / {totalQuestions}
        </p>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-blue-500 h-4 rounded-full transition-all duration-500"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-sky-100 border-2 border-sky-300 border-dashed rounded-xl p-8 mb-6 min-h-[120px] flex items-center justify-center">
        <p className="text-center text-2xl md:text-3xl font-bold text-gray-800">
          "{question.text}"
        </p>
      </div>

      {!answered && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => handleAnswerClick(InfoType.Safe)}
            className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-4 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <ShieldCheckIcon className="w-8 h-8"/>
            <span>안전한 정보</span>
          </button>
          <button
            onClick={() => handleAnswerClick(InfoType.Risky)}
            className="flex items-center justify-center gap-3 bg-red-500 hover:bg-red-600 text-white font-bold text-xl py-4 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            <ShieldExclamationIcon className="w-8 h-8"/>
            <span>위험한 정보</span>
          </button>
        </div>
      )}

      {answered && lastAnswerResult && (
        <div className="animate-fade-in">
          <div className={`p-6 rounded-lg border-4 ${getFeedbackBorderColor()} ${getFeedbackBgColor()}`}>
            <div className="flex items-center gap-3 mb-3">
              {isCorrect ? (
                <CheckCircleIcon className="w-10 h-10 text-green-600"/>
              ) : (
                <XCircleIcon className="w-10 h-10 text-red-600"/>
              )}
              <h2 className={`text-3xl font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
                {isCorrect ? '맞았어요!' : '아쉬워요!'}
              </h2>
            </div>
            <p className="text-lg font-semibold text-gray-800 mb-2">
              정답은 '{correctAnswer === InfoType.Safe ? '안전한 정보' : '위험한 정보'}'예요.
            </p>
            <p className="text-gray-700">{question.explanation}</p>
          </div>
          <button
            onClick={onNext}
            className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold text-xl py-4 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            {questionNumber === totalQuestions ? '결과 보기' : '다음 문제'}
          </button>
        </div>
      )}
    </div>
  );
};

export default GameScreen;
