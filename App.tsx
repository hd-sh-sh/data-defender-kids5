import React, { useState, useCallback } from 'react';
import { GameState, Question, AnswerResult } from './types';
import { QUESTIONS } from './constants/gameData';
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Start);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerResult[]>([]);

  const shuffleQuestions = useCallback(() => {
    // Fisher-Yates shuffle algorithm for better randomization
    const shuffled = [...QUESTIONS];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }, []);

  const startGame = useCallback(() => {
    setQuestions(shuffleQuestions());
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setGameState(GameState.Playing);
  }, [shuffleQuestions]);

  const handleAnswer = (userAnswer: AnswerResult['userAnswer']) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = userAnswer === currentQuestion.type;
    setAnswers(prev => [
      ...prev,
      {
        question: currentQuestion.text,
        userAnswer,
        correctAnswer: currentQuestion.type,
        isCorrect,
      },
    ]);
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setGameState(GameState.End);
    }
  };

  const score = answers.filter(a => a.isCorrect).length;

  return (
    <div className="bg-sky-50 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        {gameState === GameState.Start && <StartScreen onStart={startGame} />}
        {gameState === GameState.Playing && questions.length > 0 && (
          <GameScreen
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            onNext={handleNextQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            lastAnswerResult={answers[answers.length - 1]}
          />
        )}
        {gameState === GameState.End && (
          <EndScreen
            score={score}
            totalQuestions={questions.length}
            onPlayAgain={startGame}
            results={answers}
          />
        )}
      </div>
    </div>
  );
};

export default App;