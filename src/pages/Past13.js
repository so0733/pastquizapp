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

const Past13 = () => {
  const questions = [
    {
      id: 1,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: 'BDCDD',
      imageSize: { width: '350px', height: '350px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-3-01.png',
    },
    {
      id: 2,
      question: '다음에서 설명하는 용어를 쓰시오.',
      detail: "- 사용자가 비밀번호를 제공하지 않고 다른 웹사이트나 애플리케이션의 접근 권한을 부여할 수 있게 하는 개방형 표준기술이다.\n\n- 구글, 페이스북 등의 외부 계정을 기반으로 토큰을 이용하여 간편하게 회원가입 및 로그인할 수 있는 기술이다.",
      answer: 'OAuth',
    },
    {
      id: 3,
      question: '리눅스(Linux)에서 사용자에게 읽기/쓰기/실행 권한을 부여하고, 그룹에게는 읽기/실행을 부여하고, 그 이외에는 실행 권한을 Test.txt 파일에 부여하는 위한 명령어는 다음과 같다. 빈칸에 들어갈 답을 작성하시오. (8진법을 사용)',
      detail:"(  ①  ) (  ②  ) Test.txt",
      answer: '① chmod ② 751',
    },
    {
      id: 4,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '34',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-3-04.png',
    },
    {
      id: 5,
      question: 'C언어에서 구조체의 멤버에 접근하기 위한 기호를 쓰시오.',
      answer: '->',
    },
    {
      id: 6,
      question: '다음 빈칸에 들어갈 UNION 연산에 대한 결괏값을 작성하시오.',
      detail:"[쿼리]\nSELECT A FROM t1\nUNION\nSELECT A FROM t2\nORDER BY A DESC;\n\n[t1 테이블]\nA\n3\n1\n4\n\n[t2 테이블]\nA\n2\n4\n3",
      answer: '\nA\n4\n3\n2\n1',
    },
    {
      id: 7,
      question: '다음은 서버 접근통제의 유형이다. 괄호( ) 안에 들어갈 용어를 쓰시오. (단, 영어 약어로 작성하시오.)',
      detail: "- (   ①   )은/는 규칙 기반(Rule-Based) 접근통제 정책으로, 객체에 포함된 정보의 허용 등급과 접근 정보에 대하여 주체가 갖는 접근 허가 권한에 근거하여 객체에 대한 접근을 제한하는 방법이다.\n\n " +
              "- (   ②   )은/는 중앙 관리자가 사용자와 시스템의 상호관계를 통제하며 조직 내 맡은 역할(Role)에 기초하여 자원에 대한 접근을 제한하는 방법이다.\n\n " +
              "- (   ③   )은/는 신분 기반(Identity-Based) 접근통제 정책으로, 주체나 그룹의 신분에 근거하여 객체에 대한 접근을 제한하는 방법이다.",
      answer: '① MAC ② RBAC ③ DAC',    
    },
    {
      id: 8,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '5040',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-3-08.png',
    },
    {
      id: 9,
      question: '프로그래밍에서 사용되는 특정한 데이터 구조의 Cell 크기가 53 바이트이며, 이 데이터 구조를 이용한 연산이 비동기적으로 수행된다. 이 데이터 구조는 주로 어떤 용도로 사용되며, 그에 따른 약어는?',
      answer: 'ATM',
    },
    {
      id: 10,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '\nKOREA\nOREA\nK\nE\nO',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-3-10.png',
    },
    {
      id: 11,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '2',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-3-11.png',
    },
    {
      id: 12,
      question: '사설 네트워크에 속한 IP를 공인 IP 주소로 바꿔 주는 네트워크 주소 변환 기술은 무엇인지 쓰시오.',
      answer: 'NAT',
    },
    {
      id: 13,
      question: '다음은 자바 소스 코드이다. 오류가 발생하는 코드 라인 번호를 쓰시오.',
      answer: '7',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-3-13.png',
    },
    {
      id: 14,
      question: '다음은 파이썬 소스 코드이다. 빈칸에 들어갈 함수를 쓰시오.',
      detail: "num1, num2 = input().(_______)",
      answer: 'split',
    },
    {
      id: 15,
      question: '다음은 어떤 UML 다이어그램에 관한 예시이다. 어떤 종류의 다이어그램인가?',
      answer: '패키지',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2020-4-03.png',
    },
    {
      id: 16,
      question: '입력 데이터의 영역을 유사한 도메인별로 유효값/무효값을 그룹핑하여 대푯값 테스트 케이스를 도출하여 테스트하는 기법은 무엇인지 영어로 쓰시오.',
      answer: 'Equivalence Partitioning',
    },
    {
      id: 17,
      question: '클라우드 유형을 다음 그림과 같이 나누었을 때 각각 알맞은 것을 보기에서 고르시오.',
      detail: "[보기] IaaS, PaaS, SaaS",
      answer: '① IaaS ② PaaS ③ SaaS',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-3-17.png',
    },
    {
      id: 18,
      question: 'IGP 중 거리벡터 알고리즘, 라우팅 프로토콜에 해당하는 프로토콜을 쓰시오.',
      answer: 'RIP',
    },
    {
      id: 19,
      question: '다음 보기에서 각각 알맞은 기호를 찾아 쓰시오.',
      detail: "① 조인(join) \n② 프로젝트(project) \n③ 시그마(select) \n④ 나누기(division)",
      answer: '\n① ⋈\n② π \n③ σ \n④ ÷',
    },
    {
      id: 20,
      question: '다음 릴레이션에 생기는 문제를 방지하기 위해서는 (       )무결성 제약 조건을 준수해야 한다. 괄호 (   ) 안에 들어갈 용어를 쓰시오.',
      detail: "- 릴레이션 위, 아래 하나씩 있는데 밑에 릴레이션에서 A라는 고객이 위에 릴레이션에 없음",
      answer: '참조',
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
        <h1>2023년 3회</h1>

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

export default Past13;
