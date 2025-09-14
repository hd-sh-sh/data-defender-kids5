
import React from 'react';
import { ShieldCheckIcon } from './icons/ShieldCheckIcon';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center transform transition-all hover:scale-105 duration-300">
      <ShieldCheckIcon className="w-24 h-24 text-blue-500 mx-auto mb-4" />
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        개인정보 보호 지킴이 게임
      </h1>
      <p className="text-gray-600 text-lg mb-8">
        어떤 정보가 안전하고 어떤 정보가 위험할까요? <br/>
        퀴즈를 풀면서 소중한 내 정보를 지키는 방법을 배워봐요!
      </p>
      <button
        onClick={onStart}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-2xl py-4 px-10 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-200"
      >
        게임 시작!
      </button>
    </div>
  );
};

export default StartScreen;
