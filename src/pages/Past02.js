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

const Past02 = () => {
  const questions = [
    {
      id: 1,
      question: '정보시스템 운영 중 서버가 다운되거나 자연재해나 시스템 장애 등의 이유로 고객에게 서비스가 불가능한 경우가 종종 발생한다. 이와 같은 상황에서 비상사태 또는 업무중단 시정부터 업무가 복구되어 다시 정상 가동될 때까지의 시간을 의미하는 용어가 무엇인지 쓰시오. (한글 또는 영문 약어 또는 full-name으로 작성)',
      answer: '재해 복구 시간 또는 RTO 또는 Recovery Time Objective',
    },
    {
      id: 2,
      question: '다음은 파이썬 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '{\'중국\', \'한국\', \'베트남\', \'홍콩\', \'태국\'}',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2020-2-02.png',
    },
    {
      id: 3,
      question: '브라우저가 가지고 있는 XMLHttpRequest 객체를 이용해서 전체 페이지를 새로 고치지않고도 페이지의 일부분만을 위한 데이터를 로드하는 기법이며, 하이퍼텍스트 표기 언어(HTML) 만으로 어려운 다양한 작업을 웹 페이지에서 구현해 이용자가 웹 페이지와 자유롭게 상호 작용할 수 있도록 하는 기술명을 쓰시오. (영문 full name, 약어, 한글로 작성)',
      answer: '비동기 통신기법 또는 AJAX 또는 Asynchronous JavaScript and XML',
    },
    {
      id: 4,
      question: '절차보다는 사람이 중심이 되어 변화에 유연하고 신속하게 적응하면서 효율적으로 시스템을 개발할 수 있는 신속 적응적 경량 개발방법론. 개발 기간을 짧고 신속하게 가져가는 특징이 있으며 워터폴에 대비되는 방법론으로 최근 회사에서 각광받는 방법론은무엇인가?',
      answer: '애자일(방법론) 또는 에자일 또는 Agile',
    },
    {
      id: 5,
      question: '다음은 자바 소스 코드이다. 빈 칸 (  )에 알맞은 답을 쓰시오.',
      answer: 'new',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2020-2-05.png',
    },
    {
      id: 6,
      question: '아래 조건에 만족하는 SQL문을 작성하시오.',
      answer: 'SELECT 학번, 이름 FROM 학생 WHERE 학년 IN (3,4);',
      imageSize: { width: '500px', height: '350px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2020-2-06.png',
    },
    {
      id: 7,
      question: 'SQL 구문 중 데이터 제어어(TCL)에는 COMMIT, CHECKPOINT, ROLLBACK 등이 있다. 이 중, ROLLBACK에 대해 서술하시오.',
      answer: '트랜잭션 실패 시 작업을 취소하고 트랜잭션 실행 이전으로 되돌리는 명령어',
    },
    {
      id: 8,
      question: '무결성과 인증을 보장하는 인증헤더(AH)와 기밀성을 보장하는 암호화(ESP)를 이용한 프로토콜로 망 계층(Network Layer)인 인터넷 프로토콜(IP)에서 보안성을 제공해 주는 표준화된 기술에 대해서 작성하시오.',
      answer: 'IPSec',
    },
    {
      id: 9,
      question: '애플리케이션을 실행하지 않고, 소스 코드에 대한 코딩 표준, 코딩 스타일, 코드 복잡도 및 남은 결함을 발견하기 위해 사용하는 도구는 무엇인지 작성하시오.',
      answer: '정적 분석 도구',
    },
    {
      id: 10,
      question: '다음 보기가 설명하는 패턴을 작성하시오. (영문 full-name으로 작성하시오.)',
      detail: "한 객체의 상태가 바뀌면 그 객체에 의존하는 다른 객체들한테 연락이 가고 자동으로 내용이 갱신되는 방법으로 일대다 의존성을 가지는 디자인 패턴과 서로 상호작용을 하는 객체 사이에서는 가능하면 느슨하게 결합하는 디자인을 사용해야 한다.",
      answer: 'Observer(Pattern)',
    },
    {
      id: 11,
      question: 'Linux 운영체제 위에서 구동하며 휴대폰 전화를 비롯한 휴대용 장치를 위한 운영체제와 미들웨어, 사용자 인터페이스 그리고 표준 응용 프로그램(웹 브라우저, 이메일 클라이언트. 단문 메시지 서비스(SMS), MMS 등을 포함하고 있는 소프트웨어 스택이자 리눅스 모바일 운영체제이다. 개발자들이 자바와 코틀린 언어로 응용 프로그램을 작성할 수 있게 하였으며, 컴파일된 바이트코드를 구동할 수 있는 런타임 라이브러리를 제공하는 운영체제는 무엇인지 작성하시오.',
      answer: '안드로이드(Android)',
    },
    {
      id: 12,
      question: 'STUDENT 테이블의 NAME 속성에 IDX_NAME 이름으로 인덱스 생성하는 SQL 문을 작성하시오.',
      answer: 'CREATE INDEX IDX_NAME ON STUDENT (NAME);',
    },
    {
      id: 13,
      question: '다음 설명 중 빈칸에 들어갈 알맞은 용어를 작성하시오.',
      detail: "HTTP, HTTPS, SMTP를 통해서 XML 기반의 데이터를 주고받는 프로토콜로 웹 서비스 방식에서 HTTP 기반의 (  )을/를 사용하여 송수신한다. (  ) 대신 레스트 풀(RESTful) 프로토콜로 대체할 수 있다.",
      answer: 'SOAP(Simple Object Access Protocol)',
    },
    {
      id: 14,
      question: 'SQL Injection이 무엇인지 서술하시오.',
      answer: '응용프로그램의 보안 취약점을 이용해서 악의적인 SQL 구문을 삽입, 실행시켜서 데이터베이스(DB)의 접근을 통해 정보를 탈취하거나 조작 등의 행위를 하는 공격기법',
    },
    {
      id: 15,
      question: 'UI 설계 원칙에서 정확하고 완벽하게 사용자의 목표가 달성될 수 있도록 제작할 수 있어야 한다. 다음 빈 칸 (  )에 들어갈 특징은 무엇인가?',
      answer: '유효성',
      imageSize: { width: '450px', height: '150px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2020-2-15.png',
    },
    {
      id: 16,
      question: '사용자에게 읽기/쓰기/실행 권한을 부여하고 그룹에게는 읽기/실행을 부여하고 그이외에는 실행 권한을 a.txt에 부여하는 명령어를 한 줄로 작성하시오.(8진법을 사용하시오)',
      answer: 'chmod 751 a.txt',
    },
    {
      id: 17,
      question: '전 세계 오픈된 정보를 하나로 묶는 방식으로 link data와 open data의 합성어가 무엇인지 작성하시오.',
      answer: 'Linked Open Data',
    },
    {
      id: 18,
      question: '보기에 주어진 데이터베이스 설계 순서를 알맞게 나열하시오.',
      answer: '개념적 설계, 논리적 설계, 물리적 설계',
      imageSize: { width: '450px', height: '150px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2020-2-18.png',
    },
    {
      id: 19,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: 'a=10',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2020-2-19.png',
    },
    {
      id: 20,
      question: '소프트웨어 개발 과정에서 변경 사항을 관리하는 기법은 (  )기법이라고 하며 (  )기법을 활용한 도구로는 CVS, SVN, Git 등이 있다. 빈칸에 알맞은 용어를 작성하시오.',
      answer: '형상 관리',
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
        <h1>2020년 2회</h1>

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

export default Past02;
