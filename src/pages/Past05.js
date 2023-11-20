import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Content from '../style/PastContent';
import Footer from '../components/Footer';

const Container = styled.div`
  display: flex;
`;

const AnswerButton = styled.button`
  padding: 8px 16px;
  margin-right: 10px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const QuestionNumber = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const QuestionText = styled.div`
  width: 500px;
  font-size: 18px;
  font-weight: bold;
  margin: 5px;
  text-align: justify;
`;

const DetailQueestionText = styled.div`
  width: 400px;
  font-size: 16px;
  margin: 20px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  white-space: pre-wrap;
  text-align: justify;
`;

const AnswerInput = styled.textarea`
  width: 400px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const NotifyContainer = styled.div`
  display: inline-flex;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
`;

const CongratsMessage = styled.p`
  background: linear-gradient(to top, #4481eb 0%, #04befe 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;  
  font-size: 20px;
  font-weight: bold;
`;

const AnswerContainer = styled.div`
  margin-top: 10px;
  font-size: 22px;
  white-space: pre-wrap;
  font-weight: bold;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CorrectToggleButton = styled.button`
  padding: 8px 16px;
  background-color: ${(props) => (props.isCorrect ? 'green' : '#F31559')};
  color: white;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 15px;

  &:hover {
    background-color: ${(props) => (props.isCorrect ? '#28a745' : '#0056b3')};
  }
`;

const AnswerText = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  background-color: #D3D3D3;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid #D3D3D3;
`;

const CorrectAnswerMessage = styled.div`
  color: green;
`;

const IncorrectAnswerMessage = styled.div`
  color: red;
`;

const Past05 = () => {
  const questions = [
    {
      id: 1,
      question: '물리 네트워크(MAC) 주소에 해당하는 IP 주소를 알려주는 프로토콜로 역순 주소 결정 프로토콜을 무엇이라고 하는지 쓰시오.',
      answer: 'RARP(Reverse Address Resolution Protocol)',
    },
    {
      id: 2,
      question: '다음은 DB 설계 절차에 관한 설명이다. 다음 빈칸에 들어갈 알맞은 용어를 쓰시오.',
      detail: "(  ①  ) 은/는 특정 DBMS의 특성 및 성능을 고려하여 데이터베이스 저장 구조로 변환하는 과정으로 결과로 나오는 명세서는 테이블 정의서 등이 있다.\n\n" +
              "(  ②  ) 은/는 현실 세계에 대한 인식을 추상적, 개념적으로 표현하여 개념적 구조를 도출하는 과정으로 주요 산출물에는 E-R 다이어그램이 있다.\n\n" +
              "(  ③  ) 은/는 목표 DBMS에 맞는 스키마 설계, 트랜잭션 인터페이스를 설계하는 정규화 과정을 수행한다.\n\n" + 
              "[보기]\n 구현 / 개념적 설계 / 논리적 설계 / 요구사항 분석 / 물리적 설계",
      answer: '① 물리적 설계 ② 개념적 설계 ③ 논리적 설계',
    },
    {
      id: 3,
      question: '다음은 요구사항의 분류에 대한 설명이다. 괄호 (  ) 안에 들어갈 요구사항의 유형에 대해서 쓰시오.',
      detail: "(  ①  ) 요구사항은 시스템이 제공하는 기능, 서비스에 대한 요구사항이다.\n\n" +
              "(  ②  ) 요구사항은 시스템이 수행하는 기능 이외의 사항, 시스템 구축에 대한 제약사항에 관한 요구사항이다.",
      answer: '① 기능 ② 비기능',
    },
    {
      id: 4,
      question: '웹 서비스명, 제공 위치, 메세지 포맷, 프로토콜 정보 등 웹 서비스에 대한 상세 정보가 기술된 XML 형식으로 구성된 언어를 무엇이라고 하는지 쓰시오.',
      answer: 'WSDL',
    },
    {
      id: 5,
      question: '다음은 파이썬 소스 코드이다. 출력 결과를 쓰시오.',
      answer: 'SKIDDP',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2021-1-05.png',
    },
    {
      id: 6,
      question: '다음 SQL 실행 결과를 숫자만 쓰시오.',
      detail: "SELECT COUNT(*) FROM 급여\nWHERE EMPNO > 100 AND SAL >= 3000 OR EMPNO = 200;",
      answer: '1',
      imageSize: { width: '450px', height: '200px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2021-1-06.png',
    },
    {
      id: 7,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '\n3\n1\n45\n50\n89',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2021-1-07.png',
    },
    {
      id: 8,
      question: '정규화된 엔티티, 속성, 관계에 대해 성능 향상과 개발 운영의 단순화를 위해 중복, 통합, 분리 등을 수행하는 데이터 모델링의 기법을 무엇이라고 하는지 쓰시오.',
      answer: '비정규화 or 반정규화 or 역정규화',
    },
    {
      id: 9,
      question: '다음은 블랙박스 기법에 대한 예제이다. 블랙박스 기법 두 가지를 쓰시오.',
      detail : "① 0 ≤ x ≤ 10이면 -1, 0, 10, 11 검사 \n\n② 입력 데이터의 영역을 유사한 도메인별로 유효값과 무효값을 그룹핑하여 나누어서 검사",
      answer: '① 경곗값 분석 ② 동등분할 테스트',
    },
    {
      id: 10,
      question: '다음은 테스트 종류에 대한 설명이다. 빈칸에 들어갈 알맞은 용어를 보기에서 찾아 기호로 쓰시오.',
      detail : "(  ①  ) 은/는 개별 모듈, 서브루틴이 정상적으로 실행되는지 확인 \n\n(  ②  ) 은/는 인터페이스 간 시스템이 정상적으로 실행되는지 확인 \n\n[보기]\n시스템 테스트 / 인수 테스트 / 알파 테스트 / 단위 테스트 / 통합 테스트 / 회귀 테스트",
      answer: '① 단위 테스트 ② 통합 테스트',
    },
    {
      id: 11,
      question: '다음은 빈칸에 들어갈 알맞은 용어를 쓰시오.',
      detail : "• IPv6 는 (  ①  )  비트 길이를 가진다. \n• IPv4는 길이 32bit이며, (  ②  ) 비트씩 네 부분으로 나눈다.",
      answer: '① 128 ② 8',
    },
    {
      id: 12,
      question: '공유메모리, 소켓, 세마포어, 메세지 큐 등 프로세스 간 통신하는 기술을 무엇이라고 하는지 쓰시오.',
      answer: 'IPC(Inter Process Communication)',
    },
    {
      id: 13,
      question: '시스템 통합에 사용되는 솔루션으로 구축 유형에는 Point to Point, Hub & Spoke, Message Bus가 있다. 기업에서 운영되는 서로 다른 플랫폼 및 애플리케이션 간의 정보를 전달, 연계, 통합이 가능하도록 해주는 솔루션을 무엇이라고 하는지 쓰시오.',
      answer: 'EAI(Enterprise Application integration)',
    },
    {
      id: 14,
      question: '주어진 테이블의 Cardinality와 Degree를 구하시오.',
      detail : "• Cardinality : ①\n• Degree : ②",
      answer: '① 5 ② 4',
      imageSize: { width: '450px', height: '200px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2021-1-14.png',
    },
    {
      id: 15,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '\n Lee\n 38',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2021-1-15.png',
    },
    {
      id: 16,
      question: '데이터 모델 구성요소 3가지를 쓰시오.',
      detail : "• 데이터베이스에 저장된 실제 데이터를 처리하는 작업에 대한 명세로서 데이터베이스를 조작하는 기본 도구이다.\n\n" +
               "• 개체 데이터 모델에서는 (  ①  ) 을/를 이용하여 실제 데이터를 처리하는 작업에 대한 명세를 나타내는데 논리 데이터 모델에서는 (  ②  ) 을/를 어떻게 나타낼 것인지 표현한다.\n\n" +
               "• (  ③  ) 은/는 데이터 무결성 유지를 위한 DB의 보편적 방법으로 릴레이션의 특정 칼럼에 설정하는 제약을 의미하며, 개체무결성과 참조 무결성 등이 있다.",
      answer: '① 연산 ② 구조 ③ 제약조건',
    },
    {
      id: 17,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '0+1+2+3+4+5=15',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2021-1-17.png',
    },
    {
      id: 18,
      question: '시스템 객체의 접근을 개인 또는 그룹의 식별자에 기반을 둔 방법, 어떤 종류의 접근 권한을 가진 사용자가 다른 사용자에 자신의 판단에 따라 권한을 허용하는 접근제어 방식을 쓰시오.',
      answer: '임의적 접근 통제 or DAC(Discretionary Access Control)',
    },
    {
      id: 19,
      question: '다음은 결합도에 대한 설명이다. 빈칸에 들어갈 알맞은 용어를 보기에서 찾아 기호로 쓰시오.',
      detail : "• (  ①  ) 은/는 다른 모듈 내부에 있는 변수나 기능을 다른 모듈에서 사용하는 경우의 결합도\n\n" +
               "• (  ②  ) 은/는 모듈 간의 인터페이스로 배열이나 객체, 구조 등이 전달되는 경우의 결합도\n\n" +
               "• (  ③  ) 은/는 파라미터가 아닌 모듈 밖에 선언된 전역 변수를 참조하고 전역 변수를 갱신하는 식으로 상호작용하는 경우의 결합도\n\n" +
               "[보기]\n자료 결합도, 스탬프 결합도, 제어 결합도, 공통 결합도, 내용 결합도, 외부 결합도",
      answer: '① 내용 결합도 ② 스탬프 결합도 ③ 공통 결합도',
    },
    {
      id: 20,
      question: '괄호 안에 공통으로 들어갈 공격 기법을 적으시오.',
      detail: "• (   ) 은/는 '세션을 가로채다' 라는 의미로 정상적 연결을 RST 패킷을 통해 종료시킨 후 재연결 시 희생자가 아닌 공격자에게 연결한다.\n\n" +
              "• (   ) 은/는 세션 관리 취약점을 이용한 공격 기법이다.",
      answer: '세션 하이재킹',
    },
  ];
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);              // 현재 보고 있는 문제 인덱스
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill('')); // 사용자의 입력한 답을 모아둔 배열
  const [userAnswer, setUserAnswer] = useState('');                                 // 사용자가 입력한 답
  const [revealedAnswers, setRevealedAnswers] = useState(Array(questions.length).fill(false)); // 정답을 보여줬는지 여부
  const [answered, setAnswered] = useState(false);                                             // 답변을 했는지 여부
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);                // 맞은 정답의 개수
  const [questionsAnswered, setQuestionsAnswered] = useState(0);                    // 푼 문제의 개수
  const [score, setScore] = useState(0);                                            // 총 점수
  const [showAnswer, setShowAnswer] = useState(false);                              // 정답을 보여줄지 여부
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);                    // 현재 답변이 정답인지 여부

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setShowAnswer(false);
      setUserAnswer('');
      setIsAnswerCorrect(false);
      setAnswered(false);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setShowAnswer(false);
      setUserAnswer('');
      setIsAnswerCorrect(false);
      setAnswered(false);
    }
  };

  const handleShowAnswer = () => {
    if (!revealedAnswers[currentQuestionIndex]) {
      setShowAnswer(true);
      const isCorrect =
        userAnswer.trim().toLowerCase() ===
        questions[currentQuestionIndex].answer.trim().toLowerCase();
      setIsAnswerCorrect(isCorrect);
  
      if (isCorrect) {
        setScore((prevScore) => prevScore + 5);
        setCorrectAnswersCount((prevCount) => prevCount + 1);
      }
      setQuestionsAnswered((prevCount) => prevCount + 1);
      setRevealedAnswers((prevRevealed) => {
        const newRevealed = [...prevRevealed];
        newRevealed[currentQuestionIndex] = true;
        return newRevealed;
      });
    }
  };  

  const handleToggleCorrectAnswer = () => {
    setIsAnswerCorrect((prevIsCorrect) => !prevIsCorrect);
    setScore((prevScore) => (isAnswerCorrect ? prevScore - 5 : prevScore + 5));
    setCorrectAnswersCount((prevCount) =>
      isAnswerCorrect ? prevCount - 1 : prevCount + 1
    );
  
    if (!isAnswerCorrect) {
      const newUserAnswers = [...userAnswers];
      newUserAnswers[currentQuestionIndex] = currentQuestion.answer;
      setUserAnswers(newUserAnswers);
    }
  };

  const handleUserAnswerChange = (event) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = event.target.value;
    setUserAnswers(newUserAnswers);
  
    setUserAnswer(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  };
  
  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <Container>
      <Sidebar />

      <Content>
        <h1>2021년 1회</h1>

        <AnswerButton onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
          이전
        </AnswerButton>
        <AnswerButton onClick={handleNextQuestion} disabled={isLastQuestion}>
          {isLastQuestion ? '마지막 문제입니다.' : '다음'}
        </AnswerButton><br /><br />
        
        <QuestionNumber>Q.{currentQuestion.id}</QuestionNumber>
        <QuestionText>{currentQuestion.question}</QuestionText>
        {currentQuestion.detail && (
          <DetailQueestionText>{currentQuestion.detail}</DetailQueestionText>
        )}

        {currentQuestion.imagePath && (
            <img
            src={currentQuestion.imagePath}
            alt={`Question ${currentQuestion.id}`}
            style={currentQuestion.imageSize ? currentQuestion.imageSize : {}}
            />
        )}<br />

        <AnswerInput
          value={userAnswers[currentQuestionIndex]}
          onChange={handleUserAnswerChange}
          placeholder="Your answer..."
          rows={4}
        /><br />

        {!revealedAnswers[currentQuestionIndex] && (
          <AnswerButton onClick={handleShowAnswer} disabled={answered}>
            정답 보기
          </AnswerButton>
        )}<br />

        <NotifyContainer>
          정답 개수: {correctAnswersCount} / {questionsAnswered} <br />
          점수 : {score}점
        </NotifyContainer>

        {score >= 60 && (
            <CongratsMessage>
                합격을 축하합니다!
            </CongratsMessage>
        )}
        
        {(showAnswer || revealedAnswers[currentQuestionIndex]) && (
          <AnswerContainer>
            {isAnswerCorrect ? (
              <CorrectAnswerMessage>정답! (+5점)</CorrectAnswerMessage>
            ) : (
              <TextContainer>
                <IncorrectAnswerMessage>오답!</IncorrectAnswerMessage>
                <CorrectToggleButton onClick={handleToggleCorrectAnswer}>채점 수정</CorrectToggleButton>
              </TextContainer>
            )}
            {!isAnswerCorrect && (
              <AnswerText>
                정답: {currentQuestion.answer}
              </AnswerText>
            )}
          </AnswerContainer>
        )}
        
      </Content>
      <Footer />
    </Container>
  );
};

export default Past05;
