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

const Past09 = () => {
  const questions = [
    {
      id: 1,
      question: '다음은 관계 데이터 모델에 대한 설명이다. 괄호 (  ) 안에 공통적으로 들어갈 용어를 쓰시오.',
      detail: "(  )은/는 관계 데이터베이스에 대한 연산을 표현하는 방법으로 비절차적으로 선언하는 언어이며, 수학의 Predicate Calculus에 기반을 두고 있다.\n\n" +
              " Codd 박사에 의하여 제시되었으며, 튜플(  ), 도메인(  )이/가 있다.",
      answer: '관계해석',
    },
    {
      id: 2,
      question: '다음은 블록 암호화 알고리즘에 대한 설명이다. 괄호 (  ) 안에 들어갈 암호화 알고리즘을 쓰시오.',
      detail: "Xuejia Lai와 James Messey가 초기에 제시한 블록 암호화 알고리즘으로 PES, IPES를 거쳐 (  ①  )로 명명되었다. " +
              "(  ①  )은/는 128bit의 키를 사용하여 64bit의 평문을 8라운드에 거쳐 64bit의 암호문을 만든다. \n\n" +
              "(  ②  )은/는 미 국가안보국(NSA)에서 개발한 Clipper 칩에 내장되는 블록 알고리즘으로 소프트웨어로 구현되는 것을 막고자 Fortezza Card에 칩 형태로 구현되었으며 전화기와 같이 음성을 암호화 하는데 주로 사용된다. 64비트의 입출력, 80비트의 키, 총 32라운드를 가진다.",
      answer: '① IDEA ② Skipjack',
    },
    {
      id: 3,
      question: '다음 복수의 행을 출력하는 SQL 문을 사용하여 제품 테이블에서 H라는 제조사의 모든 제품의 단가보다 비싼 단가의 상품명, 단가, 제조사를 출력하는 SQL 구문이다. 빈칸 (  )에 들어갈 내용은?',
      detail: "SELECT 상품명, 단가, 제조사\nFROM 제품\nWHERE 단가 > (  ) (SELECT 단가 FROM 제품 WHERE 제조사='H')",
      answer: 'ALL',
    },
    {
      id: 4,
      question: '다음 TB 테이블에 대하여 다음 SQL을 실행하였을 때 [결과]의 괄호 (  ) 안에 출력되는 값은 무엇인가?',
      answer: '4',
      imageSize: { width: '600px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-2-04.png',
    },
    {
      id: 5,
      question: '괄호 (  ) 안에 공통으로 들어갈 용어를 쓰시오.',
      detail: "여러 공중 인터넷망을 하나의 사설망처럼 사용할 수 있는 기술로 공중망과 사설망의 중간단계이고 방식으로는 SSL 방식과 IPSec 방식이 있다.\n\n" +
              "SSL (   )은/는 4계층에서 소프트웨어적으로 동작하므로 별도의 장치가 필요 없으며 가격이 저렴하다.\n\n" +
              "IPSec (   )은/는 3계층에서 동작하므로 IP 헤더를 조작해야 하므로 별도의 하드웨어 장치가 필요하나 보안성이 뛰어나다.",
      answer: '가상사설망(VPN)',
    },
    {
      id: 6,
      question: '다음 객체지향 설계 원칙 중 다음에서 설명하는 원칙을 보기에서 찾아서 쓰시오.',
      detail: "객체 설계 시 특정 기능에 대한 인터페이스는 그 기능과 상관없는 부분이 변해도 영향을 받지 않아야 한다는 원칙이다.\n\n" +
              "예를들어, 복합기에 대한 객체가 있고 프린터, 복사기, 스캐닝 기능을 사용하는 사용자가 각각 있다고 하면 프린터 기능 인터페이스는 복사기나 스캐닝 기능이 변하여도 프린터 기능을 사용하는 데에는 문제가 없어야 한다.\n\n" + 
              " [보기]\n SRP, OCP, LSP, ISP, DIP",
      answer: 'ISP',
    },
    {
      id: 7,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '-8',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2020-1-14.png',
    },
    {
      id: 8,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '2',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-2-08.png',
    },
    {
      id: 9,
      question: '호스트 주소가 223.13.234.132이고, 서브넷 마스크는 255.255.255.192일 때, (  )안에 들어가는 값을 쓰시오.',
      detail: "이 호스트의 네트워크 주소는 223. 13. 234. (  ①  ) 이다. \n\n" +
              "이 네트워크 주소에서 사용 가능한 호스트 주소의 개수는 네트워크 주소와 브로드캐스트 주소를 뺀 (  ②  )개 이다.",
      answer: '① 128 ② 62',
    },
    {
      id: 10,
      question: '다음은 테스팅에 대한 설명이다. 괄호 (  ) 안에 알맞는 단어를 쓰시오.',
      detail: "(  ①  ) 테스트는 사용자의 환경에서 개발자 없이 수행하는 테스트 방법으로 사용자가 오류정보를 수집하여 개발자에게 보내면 개발자가 취합하여 오류를 수정하는 방식이다.\n\n" +
              "(  ②  ) 테스트는 개발자 환경에서 통제된 상태로 개발자와 함께 수행하는 방법으로 사용자가 프로그램을 수행하는 것을 개발자가 모니터링하여 오류를 수정한다.",
      answer: '① 베타 ② 알파',
    },
    {
      id: 11,
      question: '다음은 테스팅에 대한 설명이다. 맞는 답을 보기에서 골라서 쓰시오.',
      detail: "(  ) 테스트는 소프트웨어의 변경사항이 발생하면 수행하는 테스트로, 주로 유지보수 단계에서 수행한다.\n\n" +
              "소프트웨어 수정 시 다른 오류가 흘러들어오므로 이를 확인하기 위하여 소프트웨어에 변경 사항이 발생할 때 마다 (  ) 테스트를 반복적으로 수행한다.\n\n" +
              "[보기]\nWhite Box, Boundary, Partition, Black Box, Regression, Exhaust, Iterating",
      answer: 'Regression',
    },
    {
      id: 12,
      question: '다음은 라우팅 프로토콜에 대한 설명이다. 빈칸에 들어갈 말을 보기에서 골라 쓰시오.',
      detail: "라우팅 프로토콜은 범위에 따라 (  ①  ),(  ②  ) 이/가 있다.\n\n" + 
              "라우팅 프로토콜의 범위는 AS에 따라 나뉘는데 AS(자치 시스템)는 하나의 도메인에 속하는 라우터들의 집합을 말한다." +
              "하나의 자치 시스템에 속한다는 것은 하나의 도메인에 속한다는 것과 같은 의미이다.\n\n" +
              "(  ①  ) 은/는 동일한 AS 내의 라우팅 프로토콜이며, 대표적으로 RIP와 (  ③  ) 이/가 있다.\n\n" +
              "(  ③  ) 은/는 항상 상태를 주고받는 RIP와 다르게 변화가 있을 때만 상태를 주고받는 Linked State의 프로토콜이며 자치 시스템을 지역으로 나누어 라우팅을 효과적으로 관리할 수 있다.\n\n" +
              "(  ②  ) 은/는 서로 다른 AS 간 라우팅 프로토콜이며, 대표적으로 (  ④  ) 이/가 있으며 초기에 라우터들이 연결될 때 전체 라우팅 테이블을 교환하고, 그 이후에는 변화된 정보만을 교환하는 방식이다.\n\n" +
              "[보기]\n EGP, IGRP, BGP, IGP, OSPF, BCP",
      answer: '① IGP ② EPG ③ OSPF ④ BGP',
    },
    {
      id: 13,
      question: '다음 [EMPLOYEE] 테이블에서 πTTL(EMPLOYEE) 연산을 수행해 나타나는 결과를 채워 넣으시오.',
      answer: '\n ① TTL\n ② 부장\n ③ 대리\n ④ 과장\n ⑤ 차장',
      imageSize: { width: '600px', height: '300px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-2-13.png',
    },
    {
      id: 14,
      question: '다음은 파이썬 소스 코드이다. 출력 결과를 쓰시오.',
      detail: "a = \"REMEMBER NOVEMBER\"\nb = a[:3] + a[12:16];\nc = \"R AND %s\" % \"STR\";\nprint(b+c);",
      answer: 'REMEMBER AND STR',
    },
    {
      id: 15,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '10',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-2-15.png',
    },
    {
      id: 16,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '22',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-2-16.png',
    },
    {
      id: 17,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '61',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-2-17.png',
    },
    {
      id: 18,
      question: '다음 설명 중 괄호 (  ) 안에 들어갈 단어를 보기에서 찾아 쓰시오.',
      answer: '① ㉣Full   ② ㉥Partial   ③ ㉢Transitive',
      imageSize: { width: '600px', height: '300px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-2-18.png',
    },
    {
      id: 19,
      question: '다음 설명에 대한 알맞는 답을 보기에서 고르시오.',
      detail: "(  ①  ) 은/는 인터넷에서 요청과 응답에 의해 처리하는 프로토콜로 GET, POST, PUT 등의 방식을 사용한다.\n\n" +
              "(  ②  ) 은/는 문장이나 단어 등이 링크를 통해 서로 연결된 네트워크처럼 구성된 문서로 이미지 등을 누르면 다른 사이트로 옮겨갈 수 있도록 하이퍼링크(hyperlink)가 걸려 있다.\n\n" + 
              "(  ③  ) 은/는 운영체제에 상관없이 브라우저에서 실행ㄷ되는 웹 문서를 표현하는 표준화된 마크업 언어로 웹 콘텐츠의 의미와 구조를 정의할때 사용한다.\n\n" + 
              "[보기]\nICMP, HTTP, Hypertext, XML, HTML",
      answer: '① HTTP ② Hypertext ③ HTML',
    },
    {
      id: 20,
      question: '다음 프로세스 구조에서 모듈 F의 Fan-In과 Fan-Out을 구하시오.',
      detail: "① Fan-In : \n② Fan-Out : ",
      answer: '① 3 ② 2',
      imageSize: { width: '300px', height: '300px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-2-20.png',
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
        <h1>2022년 2회</h1>

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

export default Past09;
