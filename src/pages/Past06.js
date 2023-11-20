import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Content from '../style/PastContent';
import AnswerButton from '../style/AnswerButton';
import Footer from '../components/Footer';

const Container = styled.div`
  display: flex;
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

const Past06 = () => {
  const questions = [
    {
      id: 1,
      question: '네트워크 장치를 필요로하지 않고 네트워크 토폴로지가 동적으로 변화되는 특징이 있으며 응용 분야로는 긴급 구조, 긴급 회의, 전쟁터에서의 군사 네트워크에 활용되는 네트워크는?',
      answer: '애드 혹 네트워크(Ad-hoc Network)',
    },
    {
      id: 2,
      question: '다음 ①, ②에서 설명하는 개념을 쓰시오.',
      detail: "① 사람의 감정이나 경험을 나타내는 개념 \n② 사용자 인터페이스, ex) CLI, GUI",
      answer: '① UX(User Experience) ② UI(User Interface)',
    },
    {
      id: 3,
      question: '트랜잭션의 특징 중, 원자성(Atomicity)에 대해 약술하시오.',
      answer: '모두 반영되거나 아니면 전혀 반영되지 않아야 한다.',
    },
    {
      id: 4,
      question: ' 다음은 제 (  ) 정규형으로써, 부분 함수적 종속성을 제거하여, 완전 함수적 종속을 만족하는 정규형은?',
      answer: '제 2 정규형',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2021-2-04.png'
    },
    {
      id: 5,
      question: '테이블의 튜플을 수정하고자 한다. 수정하려는 SQL을 작성하기 위해 괄호 안에 알맞는 문장을 작성하시오.',
      detail: "(  ①  ) 테이블명 (  ②  ) 컬럼 = 값 WHERE 점수 >= 90;",
      answer: '① UPDATE ② SET',
    },
    {
      id: 6,
      question: '다음 SQL문에서 JOIN할 경우 괄호 안에 알맞는 문장을 작성하시오.',
      detail: "SELECT 학생정보.학번, 학생정보.이름, 학과정보.학과, 학과정보.지도교수 FROM 학생정보 JOIN 학과정보 (  ①  ) 학생정보.학과=학과정보.(  ②  );",
      answer: '① ON ② 학과',
    },
    {
      id: 7,
      question: '다음은 파이썬 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '26',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2021-2-07.png'
    },
    {
      id: 8,
      question: '미국 국립 표준 기술연구소 (NIST), DES를 대체하며, 128 비트 블록 크기와 128,192,256비트 키 크기의 대칭 키 암호화 방식은?',
      answer: 'AES(Advanced Encryption Standard)',
    },
    {
      id: 9,
      question: '다음은 화이트 박스 테스트 검증 기준에 대한 설명이다. 다음에서 설명하는 알맞은 용어를 보기에서 찾아 쓰시오.',
      detail: "① 최소 한 번은 모든 문장을 수행한다.\n\n" +
              "②결정(Decision) 검증 기준이라고도 하며 조건 별로 True/False일 때 수행한다.\n\n" +
              "③②와 달리 전체 조건식에 상관없이 개별 조건식의 True/False에 대해 수행한다.\n\n" +
              "[보기]\n다중 조건 커버리지, 변형 조건 / 결정 커버리지, 조건 커버리지, 결정 커버리지, 구조 커버리지, 구문 커버리지",
      answer: '① 구문 커버리지 ② 결정 커버리지 ③ 조건 커버리지',
    },
    {
      id: 10,
      question: '다음 [학생] 테이블을 이용해 이름이 이로 시작하는 학생들에 대해 내림차순으로 정렬하려고 한다. 쿼리의 빈칸에 알맞은 키워드를 쓰시오.',
      detail: "SELECT * FROM 학생 WHERE 이름 LIKE (  ①  ) ORDER BY (    ②    ) ;",
      answer: '① \'이%\' ② 이름 DESC',
    },
    {
      id: 11,
      question: '다음 각 번호에 해당하는 응집도를 보기에서 찾아 쓰시오.',
      detail: "① 입출력 간 연관성은 없으나, 순서에 따라 수행할 필요가 있다.\n\n" +
              "② 동일한 입출력을 사용한다.\n\n" +
              "③ 하나의 기능에 모두 기여하고 밀접하게 관련되어 있다.\n\n" +
              "[보기]\n우연적(coincidental), 논리적(logical), 시간적(temporal), 절차적(procedural), 교환적(communication), 순차적(sequential), 기능적(functional)",
      answer: '① 절차적 응집도 ② 교환적 응집도 ③ 기능적 응집도',
    },
    {
      id: 12,
      question: '다음에서 설명하는 패킷 교환 방식을 작성하시오.',
      detail: "① 목적지 호스트와 미리 연결한 후, 통신하는 연결형 교환 방식\n\n" +
              "② 헤더에 붙어서 개별적으로 전달하는 비연결형 교환 방식",
      answer: '① 가상 회선 방식 ② 데이터그램 방식',
    },
    {
      id: 13,
      question: '다음 괄호 안에 들어갈 디자인 패턴명을 쓰시오.',
      detail: "디자인 패턴 중 (  ) 패턴은 반복적으로 사용되는 객체들의 상호작용을 패턴화한 것으로 클래스나 객체들이 상호작용하는 방법이다. 알고리즘 등과 관련된 패턴으로 그 예는 Interpreter, Observer, Command 가 있다.",
      answer: '행위(behavioral)',
    },
    {
      id: 14,
      question: '같은 자원을 액세스하는 다중 트랜잭션 환경에서 DB의 일관성과 무결성을 유지하기 위해 트랜잭션의 순차적 진행을 보장하는 직렬화 기법은 무엇인지 쓰시오.',
      answer: '로킹',
    },
    {
      id: 15,
      question: '럼바우 데이터 모델링에 관한 설명으로써, 각 번호에서 설명하는 모델링 기법을 보기에서 찾아서 작성하시오.',
      detail: "① 입력값이 출력값일 때 - 예) 자료 흐름도(DFD)\n\n" +
              "② 시간에 따라 변하는 것 - 예) 상태 변화도(DFD)\n\n" +
              "③ 구조 - 예) ER다이어그램(ERD) \n\n" +
              "[보기]\nOperation, Sequence, Information, Transaction, Function, I/O, Dynamic, Architecture, Cause-Effect, Constraint, Rebuilding, Duration",
      answer: '① Function Modeling ② Dynamic Modeling ③ Object Modeling',
    },
    {
      id: 16,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '1024',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2021-2-16.png'
    },
    {
      id: 17,
      question: '클래스 내에서 객체 생성 없이 사용할 수 있는 메소드이다. 다음의 출력 결과를 보고 괄호안에 알맞은 답안을 작성하시오.',
      detail: "[출력결과]\npositive",
      answer: 'static',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2021-2-17.png'
    },
    {
      id: 18,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '8',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2021-2-18.png',
    },
    {
      id: 19,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '11',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2021-2-19.png',
    },
    {
      id: 20,
      question: '다음 괄호 안에 들어갈 알맞은 답안을 작성하시오.',
      detail: "테스트 하네스의 도구 구성 요소 중, 상향식 테스트시, 상위 모듈 역할을 대신하는 테스트 드라이버와 하향식 테스트 시, 하위 모듈 역할을 대신하는 테스트 (      ) 이 있다.",
      answer: '스텁',
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
        <h1>2021년 2회</h1>

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

export default Past06;
