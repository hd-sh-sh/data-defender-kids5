import { InfoType, Question } from '../types';

export const QUESTIONS: Question[] = [
  {
    text: '내 취미는 독서야.',
    type: InfoType.Safe,
    explanation: '취미는 나를 드러내는 개인적인 정보가 아니에요. 누구에게나 안전하게 말할 수 있어요.',
  },
  {
    text: '나는 OO초등학교 3학년 2반 이민정이야.',
    type: InfoType.Risky,
    explanation: '이름, 학교, 학년, 반 정보가 모두 있어서 나쁜 사람이 나를 쉽게 찾아낼 수 있어요.',
  },
  {
    text: '내가 가장 좋아하는 색깔은 파란색이야.',
    type: InfoType.Safe,
    explanation: '좋아하는 색깔은 나를 특정할 수 있는 정보가 아니에요. 친구들과 자유롭게 이야기해도 괜찮아요.',
  },
  {
    text: '우리 집은 서울시 OO구 OO동 OO아파트 101동 202호야.',
    type: InfoType.Risky,
    explanation: '집 주소는 매우 중요한 개인정보예요. 모르는 사람에게 알려주면 집에 찾아올 수 있어 위험해요.',
  },
  {
    text: '내 꿈은 과학자야.',
    type: InfoType.Safe,
    explanation: '나의 꿈이나 장래희망은 개인을 식별하는 정보가 아니므로 이야기해도 안전해요.',
  },
  {
    text: '내 핸드폰 번호는 010-1234-5678이야.',
    type: InfoType.Risky,
    explanation: '전화번호가 알려지면 모르는 사람이 계속 연락하거나, 나쁜 일에 내 번호를 사용할 수 있어요.',
  },
  {
    text: '내가 좋아하는 동물은 강아지야.',
    type: InfoType.Safe,
    explanation: '좋아하는 동물은 나의 생각이나 기분을 표현하는 것일 뿐, 개인정보가 아니에요.',
  },
  {
    text: '내 생일은 2015년 5월 5일이야.',
    type: InfoType.Risky,
    explanation: '정확한 생년월일은 나이를 포함한 중요한 정보예요. 다른 개인정보와 합쳐지면 더 위험할 수 있어요.',
  },
  {
    text: '공원에서 친구들과 찍은 사진이야.',
    type: InfoType.Safe,
    explanation: '배경에 집이나 학교처럼 나의 위치를 알 수 있는 정보가 없다면 비교적 안전한 사진이에요.',
  },
  {
    text: '우리 집 아파트 입구에서 찍은 내 사진이야.',
    type: InfoType.Risky,
    explanation: '사진 배경에 집, 학교, 자주 가는 장소가 나오면 사는 곳을 다른 사람에게 알려주는 것과 같아요.',
  },
  {
    text: '나는 방과 후에 친구들과 놀아.',
    type: InfoType.Safe,
    explanation: '언제, 어디서, 누구와 노는지 구체적인 정보가 없어서 안전해요.',
  },
  {
    text: '나는 매주 화요일, 목요일 4시에 OO피아노 학원에 가.',
    type: InfoType.Risky,
    explanation: '나의 일정한 계획을 자세하게 알려주면, 나쁜 사람이 그 시간에 나를 기다리는 등 위험한 상황이 생길 수 있어요.',
  },
  {
    text: '우리 가족은 모두 4명이야.',
    type: InfoType.Safe,
    explanation: '가족이 몇 명인지는 개인을 식별하는 정보가 아니에요. 하지만 가족의 이름이나 나이를 말하는 것은 위험해요.',
  },
  {
    text: '우리 아빠 이름은 김철수이고, 직업은 의사야.',
    type: InfoType.Risky,
    explanation: '가족의 이름, 직업 등 자세한 정보는 우리 가족 전체의 개인정보예요. 함부로 알려주면 안 돼요.',
  },
  {
    // FIX: Using double quotes for the string to correctly handle the nested single quotes.
    text: "내 게임 닉네임은 '씩씩한 토끼'야.",
    type: InfoType.Safe,
    explanation: '나의 실제 이름, 나이, 사는 곳을 알 수 없는 별명(닉네임)은 온라인에서 안전하게 사용할 수 있어요.',
  },
  {
    text: '내 게임 아이디 비밀번호는 `minjung1234`야.',
    type: InfoType.Risky,
    explanation: '비밀번호는 나만 알고 있어야 하는 가장 중요한 정보예요. 친구에게도 절대 알려주면 안 돼요!',
  },
];
