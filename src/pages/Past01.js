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

const Past01 = () => {
  const questions = [
    {
      id: 1,
      question: '살충제 패러독스의 개념에 관해서 서술하시오.',
      answer: '동일한 테스트 케이스에 의한 반복적 테스트는 새로운 버그를 찾지 못한다',
    },
    {
      id: 2,
      question: '데이터 마이닝의 개념에 관해서 서술하시오.',
      answer: '대규모로 저장된 데이터 안에서 체계적이고 자동적으로 통계적 규칙이나 패턴을 찾아내는 기술',
    },
    {
      id: 3,
      question: '프로토콜의 기본요소 3가지를 쓰시오.',
      answer: '구문, 의미, 타이밍',
    },
    {
      id: 4,
      question: '다음 설명하는 용어는 무엇인지 쓰시오.',
      detail: 'W3C(World wide Web Consortium)에서 개발되었고, 웹 브라우저 간 호환이 되지 않는 문제와 SGML(Standard Generalized Markup Language)의 복잡함을 해결하기 위해 개발된 다목적 마크업 언어이다.',
      answer: 'XML',
    },
    {
      id: 5,
      question: '속성-값(Attribute-Value Pair)으로 이루어진 데이터 오브젝트를 전달하기 위해 사용하는 개방형 표준 포맷 이다. Ajax(Asynchronous JavaScript and XML)에서 많이 사용되고 XML(eXtensible Markup Language) 을 대체하는 주요 데이터 포맷이다. 언어 독립형 데이 터 포맷으로 다양한 데이터 프로그래밍 언어에서 사용 하고 있는 기술은 무엇인가?',
      answer: 'JSON',
    },
    {
      id: 6,
      question: 'STUDENT 테이블에 컴퓨터과 학생 50명, 인터넷과 학생 100명, 사무자동화과 학생 50명의 정보가 저장되어 있을 때, 다음 SQL 문의 실행 결과에 따른 튜플의 수 는? (단, DEPT 칼럼은 학과명이다.)',
      detail: "① SELECT DERP FROM STUDENT;\n② SELECT DISTINCT DEPT FROM STUDENT;\n③ SELECT COUNT(DISTINCT DEPT) FROM STUDENT \n     WHERE DEPT = '컴퓨터과';",
      answer: '\n ① : 200\n ② : 3\n ③ : 1',
    },
    {
      id: 7,
      question: '스케줄링 방식에서 HRN(Highest Response ratio Next) 우선순위 계산식을 쓰시오.',
      answer: '(대기 + 서비스 시간) ÷ 서비스 시간',
    },
    {
      id: 8,
      question: '트랜잭션의 특성 중 일관성, 지속성 외 2개의 특성을 쓰시오.',
      answer: '원자성, 격리성',
    },
    {
      id: 9,
      question: '공격자가 패킷의 출발지 주소나 포트를 임의로 변경해 출발지와 목적지 주소를 동일하게 함으로써 공격 대상 컴퓨터의 실행속도를 느리게 하거나 동작을 마비시켜 서 비스 거부 상태에 빠지도록 하는 공격 방법은 무엇인가?',
      answer: '랜드 어택',
    },
    {
      id: 10,
      question: 'RFC 1321로 지정되어 있으며, 주로 프로그램이나 파일이 원본 그대로인지를 확인하는 무결성 검사 등에 사용된다. 1991년 로널드 라이베스트(Ronald Rivest) 가 예전에 쓰이던 MD4를 대체하기 위해 고안된 128비 트 암호화 해시 함수는 무엇인가?',
      answer: 'MD5',
    },
    {
      id: 11,
      question: '다음은 공통 모듈 구현의 개념에 대한 설명이다. 괄호 (  ) 안에 알맞은 용어를 쓰시오.',
      detail:
        " 소프트웨어 개발에 있어 기능을 분할하고 추상화하여 성능을 향상시키고 유지보수를 효과적으로 하기 위한 공통 컴포넌트 구현 기법이다.\n\n" +
        " 인터페이스 모듈, 데이터베이스 접근 모듈 등 필요한 공통 모듈을 구현한다.\n\n" +
        " 모듈 간의 (  ①  ) 은/는 줄이고, (  ②  ) 은/는 높은 공통 모듈 구현을 권한하고 있다.",
      answer: '① 결합도 ② 응집도',
    },
    {
      id: 12,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '50, 75, 85, 95, 100',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2020-1-12.png',
    },
    {
      id: 13,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '0 1 2 3',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2020-1-13.png',
    },
    {
      id: 14,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '-8',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2020-1-14.png',
    },
    {
      id: 15,
      question: '다음 설명하는 제품 패키지 릴리즈 노트의 작성 항목은 무엇인가?',
      detail: "문서 이름(릴리즈 노트 이름), 제품 이름, 버전 번호, 릴리즈 날짜, 참고 날짜, 노트 버전 등의 정보",
      answer: '헤더',
    },
    {
      id: 16,
      question: 'LoC(Line of Code)가 30,000라인이고, 개발자가 5명 이며, 개발자가 월평균 300라인을 개발한다. 이때 프로젝트 개발 기간과 계산식을 쓰시오.',
      answer: '\n   개발 기간 : 20개월\n   계산식 : (30000÷300)÷5=20개월',
    },
    {
      id: 17,
      question: 'OSI 계층 중 비트를 전송하는 계층은 무엇인가?',
      answer: '물리 계층',
    },
    {
      id: 18,
      question: '애플리케이션의 성능을 측정하기 위한 지표는 무엇인가?',
      answer: '\n ① 처리량 \n ② 응답시간 \n ③ 경과시간',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2020-1-18.png',
    },
    {
      id: 19,
      question: '비 정규화(De-Normalization)의 개념을 쓰시오.',
      answer: '정규화된 엔터티, 속성, 관계에 대해 성능 향상과 개발 운영의 단순화를 위해 중복, 통합, 분리 등을 수행하는 데이터 모델링 기법',
    },
    {
      id: 20,
      question: '다음은 모듈의 관계를 나타낸 다이어그램이다. fan-in 개수가 2 이상인 모듈 명칭을 쓰시오.',
      answer: 'F, H',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2020-1-20.png',
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
        <h1>2020년 1회</h1>

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

export default Past01;
