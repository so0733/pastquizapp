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

const Past08 = () => {
  const questions = [
    {
      id: 1,
      question: '다음 설명에 맞는 RAID 단계를 숫자로 쓰시오.',
      detail: "패리티(오류 검출 기능)가 없는 중복 없는 스트라이핑 된 세트로 구성되어 있다. \n\n" + 
              "개선된 성능에 추가적인 기억 장치를 제공하는 장점이 있지만, 장애 시 데이터의 안전을 보장할 수 없다.",
      answer: '0',
    },
    {
      id: 2,
      question: '다음에 해당하는 DB 트랜잭션 연산을 [보기]에서 찾아 적으시오.',
      detail: "① 장애 발생 전 DB로 복구하는 기법으로 디스크에 저장된 로그를 분석하여 트랜잭션의 시작(Start)과 완료(Commit)에 대한 기록이 있는 트랜잭션들의 작업을 재실행 하는 기법\n\n" +
              "② 장애 시 디스크에 저장된 로그를 분석하여 트랜잭션의 시작(Start)은 있지만, 완료(Commit) 기록이 없는 트랜잭션들이 작업한 변경 내용을 모두 취소하는 기법\n\n" +
              "[보기]\nRollback, Redo, Undo, Checkpoint, Recovery",
      answer: '① Redo ② Undo',
    },
    {
      id: 3,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '2000',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-1-03.png',
    },
    {
      id: 4,
      question: '다음은 점수에 대해 내림차순 하는 SQL이다. 괄호 (  ) 안에 들어갈 SQL 구문을 쓰시오.',
      detail: "SELECT name, score FROM 성적 (  ①  ) BY (  ②  ) (  ③  )",
      answer: '① ORDER ② score ③ DESC',
    },
    {
      id: 5,
      question: '데이터베이스의 이상현상 중, 삭제 이상에 대해 간략히 설명하시오.',
      answer: '데이터를 삭제할 경우 원하지 않는 다른 데이터도 삭제되어버리는 이상',
    },
    {
      id: 6,
      question: '다음은 파이썬 소스 코드이다. 출력 결과를 쓰시오.',
      detail: "def soojebi(num1, num2=2): \n   print('a=', num1, 'b=', num2) \n\nsoojebi(20)",
      answer: 'a= 20 b= 2',
    },
    {
      id: 7,
      question: '다음은 리스트와 관련된 파이썬 함수이다. 각 항목에 해당하는 함수를 보기에서 골라서 쓰시오.',
      detail: "① 리스트 확장, 여러 값을 한 번에 추가할 수 있음\n\n" +
              "② 마지막 또는 지정 요소를 삭제하고 그 값을 반환함\n\n" +
              "③ 역순으로 뒤집음\n\n" +
              "[보기]\n remove(), reverse(), sort(), index(), insert(), select(), pop(), extend()",
      answer: '① extend() ② pop() ③ reverse()',
    },
    {
      id: 8,
      question: '임시 키 무결성 프로토콜의 약자를 쓰시오.',
      answer: 'TKIP',
    },
    {
      id: 9,
      question: '신체를 활용한 사용자 인터페이스(UI)를 무엇이라고 하는가?',
      answer: 'NUI',
    },
    {
      id: 10,
      question: '다음은 분석 도구에 대한 설명이다. 각 항목에 해당하는 도구를 쓰시오.',
      detail: "① 실행하지 않고 원시 코드 분석\n\n" +
              "② 프로그램 동작이나 반응을 추적하고 보고함. 프로그램 모니터, 스냅샷 생성",
      answer: '① 정적 분석 도구(Static Analysis) ② 동적 분석 도구(Dynamic Analysis)',
    },
    {
      id: 11,
      question: '다음 스레드에 관한 코드이다. 다음 빈칸에 알맞는 코드를 작성하시오.',
      answer: 'Car',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-1-11.png',
    },
    {
      id: 12,
      question: '다음에서 설명하는 인터페이스 도구를 쓰시오.',
      detail: "자바를 이용한 xUnit 테스트 도구이다.\n\n" +
              "Erich Gamma와 Kent Beck 등이 작성한 오픈소스로 JAVA 단위 테스트 프레임워크이다.",
      answer: 'JUnit',
    },
    {
      id: 13,
      question: '다음 보기 중에서 블랙박스 테스트 기법을 3가지 골라 작성하시오.',
      detail: "[보기]\nㄱ. Cause-Decision Graph\nㄴ. Decision Coverage\nㄷ. Boundary Value Analysis\nㄹ. Equivalence Partitioning\nㅁ. Statement Coverage\nㅂ. Cause-Effect Graph\nㅅ. Base Path Testing\nㅇ. Base Path Coverage\nㅈ. Boundary Divison Analysis",
      answer: 'ㄷ, ㄹ, ㅂ',
    },
    {
      id: 14,
      question: '다음 소스코드에서 입력값이 5가 들어왔을때 출력되는 값을 작성하시오.',
      answer: '120',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-1-14.png',
    },
    {
      id: 15,
      question: '빈칸에 연산자를 써서 정수를 역순으로 출력하는 프로그램을 완성하시오. 예를 들어 1234의 역순은 4321이다. 단, 1230처럼 0으로 끝나는 정수는 고려하지 않는다.',
      detail: "[결과] 4321",
      answer: '① > ② % ③ /',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-1-15.png',
    },
    {
      id: 16,
      question: '정보보호 관리체계의 영문 약자는 무엇인가?',
      answer: 'ISMS',
    },
    {
      id: 17,
      question: '다음은 키에 대한 설명이다. 괄호 (  ) 안에 들어갈 용어를 쓰시오.',
      detail: "슈퍼키는 (  ①  ) 의 속성을 갖는다.\n후보키는 (  ①  ) 와/과 (  ②  ) 의 속성을 갖는다.",
      answer: '① 유일성 ② 최소성',
    },
    {
      id: 18,
      question: '공격 대상이 방문할 가능성이 있는 합법적 웹사이트를 미리 감염시켜 놓고, 피해자가 방문했을 때 피해자의 컴퓨터에 악성 프로그램을 배포하는 공격기법을 쓰시오.',
      answer: '워터링 홀(watering hole)',
    },
    {
      id: 19,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '29',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-1-19.png',
    },
    {
      id: 20,
      question: '다음은 소프트웨어 개발 프로세스 중  V 모델에 대한 그림이다. ①~④까지 들어갈 테스트를 쓰시오.',
      answer: '① 단위 테스트 ② 통합 테스트 ③ 시스템 테스트 ④ 인수 테스트',
      imageSize: { width: '450px', height: '300px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-1-20.png',
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
        <h1>2022년 1회</h1>

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

export default Past08;
