
export enum GameState {
  Start,
  Playing,
  End,
}

export enum InfoType {
  Safe = 'safe',
  Risky = 'risky',
}

export interface Question {
  text: string;
  type: InfoType;
  explanation: string;
}

export interface AnswerResult {
  question: string;
  userAnswer: InfoType;
  correctAnswer: InfoType;
  isCorrect: boolean;
}
