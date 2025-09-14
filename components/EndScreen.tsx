
import React from 'react';
import { AnswerResult } from '../types';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { XCircleIcon } from './icons/XCircleIcon';

interface EndScreenProps {
  score: number;
  totalQuestions: number;
  onPlayAgain: () => void;
  results: AnswerResult[];
}

const EndScreen: React.FC<EndScreenProps> = ({ score, totalQuestions, onPlayAgain, results }) => {
  const scorePercentage = (score / totalQuestions) * 100;
  let scoreMessage = '';
  if (scorePercentage === 100) {
    scoreMessage = '정말 대단해요! 완벽한 개인정보 지킴이군요!';
  } else if (scorePercentage >= 70) {
    scoreMessage = '훌륭해요! 조금만 더 신경 쓰면 완벽하겠어요!';
  } else if (scorePercentage >= 50) {
    scoreMessage = '잘했어요! 아래 수칙을 다시 한번 읽어볼까요?';
  } else {
    scoreMessage = '아쉬워요. 하지만 괜찮아요! 이제부터 배우면 돼요!';
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">게임 종료!</h1>
      <p className="text-xl text-gray-600 mb-4">{scoreMessage}</p>
      
      <div className="bg-blue-100 rounded-xl p-6 my-6">
        <p className="text-2xl font-bold text-blue-800">나의 점수</p>
        <p className="text-6xl font-bold text-blue-600 my-2">
          {score} <span className="text-3xl text-blue-500">/ {totalQuestions}</span>
        </p>
      </div>

      <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-6 text-left my-8">
        <h2 className="text-2xl font-bold text-yellow-800 mb-4 text-center">🔒 개인정보를 보호하기 위한 5가지 약속!</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-yellow-600 font-bold mr-2">1.</span>
            <span><strong>함부로 알려주지 않기:</strong> 이름, 나이, 집 주소, 학교, 전화번호 등은 믿을 수 있는 어른에게만 알려줘요.</span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-600 font-bold mr-2">2.</span>
            <span><strong>사진은 조심해서 올리기:</strong> 내 얼굴, 집, 학교가 나오는 사진은 함부로 인터넷에 올리지 않아요.</span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-600 font-bold mr-2">3.</span>
            <span><strong>비밀번호는 나만 알기:</strong> 비밀번호는 나만 아는 암호예요. 부모님 외에는 아무에게도 알려주지 않아요.</span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-600 font-bold mr-2">4.</span>
            <span><strong>낯선 사람은 의심하기:</strong> 인터넷에서 만난 사람이 개인정보를 물어보면 절대 대답하지 않고 부모님께 바로 알려요.</span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-600 font-bold mr-2">5.</span>
            <span><strong>도움이 필요하면 어른에게:</strong> 이상한 메시지를 받거나 어려운 일이 생기면 꼭 부모님이나 선생님께 이야기해요.</span>
          </li>
        </ul>
      </div>

      <button
        onClick={onPlayAgain}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-xl py-4 px-10 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-200"
      >
        다시하기
      </button>
    </div>
  );
};

export default EndScreen;
