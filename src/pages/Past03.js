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

const Past03 = () => {
  const questions = [
    {
      id: 1,
      question: '리팩토링의 목적에 대한 설명을 작성하시오.',
      answer: '소프트웨어를 이해하기 쉽고 수정하기 쉽도록 만드는 것으로 유지보수성 향상, 유연한 시스템, 생산성 향상, 품질 향상을 목적으로 한다.',
    },
    {
      id: 2,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '0(숫자 0)',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2020-3-02.png',
    },
    {
      id: 3,
      question: '대표적인 내부 라우팅 프로토콜로 다익스트라 알고리즘을 이용한 대규모 네트워크에 적합한 링크 상태 라우팅 프로토콜로 불리는 라우팅 프로토콜은 무엇인가?',
      answer: 'OSPF',
    },
    {
      id: 4,
      question: '심리학자 톰 마릴은 컴퓨터가 메세지를 전달하고, 메세지가 제대로 도착했는지 확인하며, 도착하지 않았을 경우 메세지를 재전송하는 일련의 방법을 \'기술적 은어\'를 뜻하는 (      )이라는 용어로 정의했다. 괄호 (    ) 안에 들어갈 용어를 쓰시오.',
      answer: '프로토콜',
    },
    {
      id: 5,
      question: '형상 통제를 설명하시오.',
      answer: '형상 항목의 버전 관리를 위해서 변경 여부와 변경 활동을 통제하는 활동',
    },
    {
      id: 6,
      question: 'TCP/IP에서 오류가 발생하면 (  ) 메세지를 보내서 오류가 발생했음을 알린다. 괄호 (  ) 안에 들어갈 용어를 쓰시오.',
      answer: 'ICMP(Internet Control Message Protocol)',
    },
    {
      id: 7,
      question: '다음 아래 제어 흐름 그래프가 분기 커버리지를 만족하기 위한 테스팅 순서를 쓰시오.',
      answer: '1234561, 124567 또는 1234567, 124561',
      imageSize: { width: '500px', height: '350px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2020-3-07.png',
    },
    {
      id: 8,
      question: '다음 조건을 만족하면서, 과목별 점수의 평균이 90 이상인 과목이름, 최소점수, 최대점수를 구하는 SQL문을 작성하시오.',
      answer: '\n SELECT 과목이름, MIN(점수) AS 최소점수, MAX(점수) AS 최대점수 FROM 성적\n GROUP BY 과목이름 HAVING AVG(점수) >= 90;',
      imageSize: { width: '400px', height: '450px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2020-3-08.png',
    },
    {
      id: 9,
      question: '학생 테이블에서 이름이 민수인 튜플을 삭제하는 SQL문을 작성하시오.',
      answer: 'DELETE FROM 학생 WHERE 이름 = \'민수\';',
      imageSize: { width: '400px', height: '150px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2020-3-09.png',
    },
    {
      id: 10,
      question: '릴레이션 A, B가 있을 때 릴레이션 B 조건에 맞는 것들만 릴레이션 A에서 튜플을 꺼내 프로젝션하는 관계 대수의 기호는 무엇인가?',
      answer: '÷',
    },
    {
      id: 11,
      question: '헝가리안 표기법(Hungarian Case)에 대해서 서술하시오.',
      answer: '식별자 표기 시 접두어에 자료형을 붙이는 표기법',
    },
    {
      id: 12,
      question: '테스트의 종류 중, 둥치분할 테스트, 경계값 분석 테스트 등의 종류가 있는 테스트 기법을 쓰시오.',
      answer: '블랙박스 테스트 (=명세 기반 테스트)',
    },
    {
      id: 13,
      question: 'DB스키마에 대해서 서술하시오.',
      answer: '데이터베이스의 구조, 제약조건 등의 정보를 담고 있는 기본적인 구조',
    },
    {
      id: 14,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '234',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2020-3-14.png',
    },
    {
      id: 15,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '30',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2020-3-15.png',
    },
    {
      id: 16,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: 'Vehicle name:Spark',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2020-3-16.png',
    },
    {
      id: 17,
      question: 'EAI 유형에는 메세지 버스(Message bus) 유형, 하이브리드(Hybrid) 유형, (  ⓐ  ) 유형, (  ⓑ  ) 유형이 있다. 괄호 안에 들어갈 말을 적으시오.',
      answer: 'ⓐ 포인트 투 포인트(Point-to-point) ⓑ 허브 앤 스포크(Hub & Spoke)',
    },
    {
      id: 18,
      question: 'UI 설계 원칙 중 직관성에 대해서 쓰시오.',
      answer: '누구나 쉽게 이해하고, 쉽게 사용할 수 있어야 하고,쉬운 검색, 쉬운 사용성, 일관성이 부특성을 가지고 있는 UI설계 원칙',
    },
    {
      id: 19,
      question: ' C++에서 생성자란 무엇인지 쓰시오.',
      answer: '해당 클래스의 객체가 생성될 때 자동으로 호출되는 특수한 종류의 메서드',
    },
    {
      id: 20,
      question: '학생 테이블에 주소 속성을 추가하는 SQL문을 작성하시오.',
      detail: "(  ⓐ  ) TABLE 학생 (  ⓑ  ) 주소 VARCHAR(20);",
      answer: 'ⓐ ALTER ⓑ ADD',
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
        <h1>2020년 3회</h1>

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

export default Past03;
