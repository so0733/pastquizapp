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

const Past11 = () => {
  const questions = [
    {
      id: 1,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '\n 10\n 11\n 10\n 20',
      imageSize: { width: '350px', height: '300px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-1-01.png',
    },
    {
      id: 2,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '\n Art\n A\n A\n Art\n Art',
      imageSize: { width: '350px', height: '300px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-1-02.png',
    },
    {
      id: 3,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: 'qwe',
      imageSize: { width: '350px', height: '300px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-1-03.png',
    },
    {
      id: 4,
      question: '다음 중 빈칸에 공통으로 들어갈 용어르 쓰시오.',
      detail: "(  ) 은/는 웹에서 Javascript, XML을 이용하여 비동기식으로 웹페이지의 일부 콘텐츠만 리로드(Reload) 해오는 방식이다.\n\n" +
              "(  ) 은/는 하이퍼텍스트 표기 언어(HTML)만으로는 어려운 다양한 작업을 웹페이지에서 구현해서 이용자가 웹페이지와 자유롭게 상호 작용할 수있도록 구현 하는 기법이다.\n\n" +
              "Google Maps와 Google (  )에서 이러한 방식을 사용한다.",
      answer: 'AJAX',
    },
    {
      id: 5,
      question: '패킷 교환 방식에서 패킷이 전송되기 전에 송/수신 스테이션 간의 논리적인 통신 경로를 미리 설정하는 방식은 (  ①  ) 방식이며, 연결 경로를 확립하지 않고 각각의 패킷을 순서에 무관하게 독립적으로 전송하는 방식은 (  ②  ) 방식이다. 빈칸에 들어갈 알맞은 용어를 쓰시오.',
      answer: '① 가상회선 ② 데이터그램',
    },
    {
      id: 6,
      question: 'VPN(Virtual Private Network)에서 사용되는 프로토콜 중 하나로, L2F(Layer 2 Forwarding Protocol)와 PPTP(Point-to-Point Tunneling Protocol)의 기능을 결합하여 인터넷상에서 두 지점 간에 가상의 터널을 만들어 통신을 안전하게 전송하는 기술은 무엇인가?',
      answer: 'L2TP',
    },
    {
      id: 7,
      question: '포트번호 22번을 사용하고 인증, 암호화, 압축, 무결성을 제공하며, Telnet보다 강력한 보안을 제공하는 원격접속 프로토콜은 무엇인가?',
      answer: 'SSH',
    },
    {
      id: 8,
      question: '괄호에 들어갈 용어를 보기에서 찾아 기호로 쓰시오.',
      detail: "(  ①  ) 은/는 인터넷 또는 네트워크를 통해 컴퓨터에서 컴퓨터로 스스로 전파되는 악성 프로그램이다. 윈도우의 취약점 또는 응용 프로그램의 취약점을 이용하거나 이메일 또는 공유 폴더를 통해 전파되며, 최근에는 공유 프로그램(P2P)을 이용하여 전파되기도 한다. 가장 큰 특징은 자신을 복제하여 네트워크 연결을 통해서 다른 컴퓨터로 스스로 전파되고 확산된다는 것이다.\n\n" +
              "(  ②  ) 은/는 악성 루틴이 숨어 있는 프로그램으로 겉보기에는 정상적인 프로그램으로 보이지만 실행하면 악성코드를 실행하는 프로그램이다. 자기 복제를 하지 않으며 다른 파일을 감염시키거나 변경시키지 않지만, 해당 프로그램이 포함된 프로그램이 실행되는 순간, 시스템은 공격자에게 시스템을 통제할 수 있는 권한을 부여하게 된다.\n\n" +
              "(  ③  ) 은/는 사용자 컴퓨터(네트워크로 공유된 컴퓨터 포함) 내에서 프로그램이나 실행 가능한 부분을 변형해서 감염(infect)시키는 프로그램이다. 그리고 자신 또는 자신의 변형을 복사하는 프로그램으로 가장 큰 특성은 다른 네트워크의 컴퓨터로 스스로 전파되지는 않는다.\n\n" +
              "[보기]\n㉠ 바이러스(Virus) ㉡ 웜(Worm) ㉢ 트로이목마(Trojan Horse)",
      answer: '① ㉡ 웜(Worm) ② ㉢ 트로이목마(Trojan Horse) ③ ㉠ 바이러스(Virus)',
    },
    {
      id: 9,
      question: '다음은 이진수를 십진수로 변환하는 C언어 코드이다. ⓐ, ⓑ에 적합한 코드를 작성하시오.',
      answer: 'ⓐ % ⓑ 10',
      imageSize: { width: '350px', height: '300px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-1-09.png',
    },
    {
      id: 10,
      question: 'IP의 동작 과정에서의 전송 오류가 발생하는 경우에 오류 정보를 전송하는 목적으로 사용 하는 프로토콜로, Ping-of-Death에서도 사용하는 프로토콜은 무엇인가?',
      answer: 'ICMP',
    },
    {
      id: 11,
      question: '디자인 패턴 중 객체의 대리자를 이용하여 원래 객체의 작업을 대신 처리하는 패턴을 [보기]에서 찾아 쓰시오.',
      detail: "[보기]\n\n생성 패턴\nBuilder, Prototype, Singleton, Abstract Factory\n\n" +
              "구조 패턴\nBridge, Decorator, Facade, Flyweight, Proxy, Composite, Adapter\n\n" +
              "행위 패턴\nObserver, Mediator, Visitor, Strategy",
      answer: 'Proxy',
    },
    {
      id: 12,
      question: '다음은 데이터베이스에 관련된 내용이다. 각 괄호에 들어갈 답을 [보기]에서 골라 쓰시오.',
      detail: "(  ①  ) 은/는 테이블 내의 행을 의미하며, 레코드(Record)라고도 한다. 어떤 요소의 집합, 혹은 테이블에서의 행을 가리키지만 일반적인 집합과는 달리 중복이 허용될 수 있다.\n\n" +
              "(  ②  ) 은/는 릴레이션에 실제로 저장된 데이터의 집합을 의미한다. 그리고 릴레이션 또는 릴레이션 외연(Relation Extension)라고도 한다.\n\n" +
              "(  ③  ) 은/는 특정 데이터 집합의 유니크(Unique)한 값의 개수를 의미한다.\n\n" +
              "[보기]\n튜플(Tuple), 릴레이션 스키마(Relation Schema), 릴레이션 인스턴스(Relation Instance), 카디널리티(Cardinality), 디그리(Degree), 애트리뷰트(Attribute)",
      answer: '① 튜플(Tuple) ② 릴레이션 인스턴스(Relation Instance) ③ 카디널리티(Cardinality)',
    },
    {
      id: 13,
      question: '[학생] 테이블에서 학생 이름이 \'민수\'인 튜플을 삭제하는 쿼리를 작성하시오.',
      answer: 'DELETE FROM 학생 WHERE 이름 = \'민수\';',
      imageSize: { width: '450px', height: '150px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-1-13.png',
    },
    {
      id: 14,
      question: '다음 중, 괄호 ( ) 안에 들어갈 알맞는 답을 작성하시오.(단, 변수명으로 쓰시오.)',
      answer: '① idx2 ② nx',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-1-14.png',
    },
    {
      id: 15,
      question: '다음은 파이썬 소스 코드이다. 출력 결과를 쓰시오.',
      detail: "a = {'한국', '중국', '일본'}\na.add('베트남')\na.add('중국')\na.remove('일본')\na.update({'홍콩', '한국', '태국'})\nprint(a)",
      answer: '{\'한국\', \'중국\', \'베트남\', \'홍콩\', \'태국\'}',
    },
    {
      id: 16,
      question: '다음 중 [결과] 테이블에서 과목별로 그룹을 묶었을 때 과목 평균이 90 이상인 과목, 최소 점수, 최대점수를 조회하는 쿼리를 작성하시오.',
      answer: '\nSELECT 과목이름, MIN(점수) AS 최소점수, MAX(점수) AS 최대점수 FROM 성적\nGROUP BY 과목이름 HAVING AVG(점수) >= 90;',
      imageSize: { width: '600px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-1-16.png',
    },
    {
      id: 17,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: 'Vehicle name:Spark',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2020-3-16.png',
    },
    {
      id: 18,
      question: '다음은 스키마와 관련된 내용이다. 각 괄호 안에 알맞은 답을 [보기]에서 찾아 작성하시오.',
      detail: "(  ①  ) 스키마는 사용자나 개발자의 관점에서 필요로 하는 데이터베이스의 논리적 구조이고, 사용자 뷰를 나타내며, 서브 스키마로 불린다.\n\n" +
              "(  ②  ) 스키마는 데이터베이스의 전체적인 논리적 구조이다. 그리고 전체적인 뷰를 나타내고, 개체 간의 관계, 제약조건, 접근 권한, 무결성, 보안에 대해 정의한다.\n\n" +
              "(  ③  ) 스키마는 물리적 저장 장치의 관점에서 보는 데이터베이스 구조이고, 실제로 데이터베이스에 저장될 레코드의 형식을 정의한다. 그리고 데이터 항목의 표현 방법, 내부레코드의 물리적 순서 등을 표현한다.\n\n" +
              "[보기]\n 외부, 개념, 내부",
      answer: '① 외부 ② 개념 ③ 내부',
    },
    {
      id: 19,
      question: '다음 아래의 제어 흐름 그래프가 분기 커버리지를 만족하기 위한 테스팅 순서를 쓰시오.',
      answer: '1234561, 124567  or 1234567, 124561',
      imageSize: { width: '600px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-1-19.png',
    },
    {
      id: 20,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '500',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-1-20.png',
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
        <h1>2023년 1회</h1>

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

export default Past11;
