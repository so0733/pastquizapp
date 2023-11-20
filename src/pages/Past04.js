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

const Past04 = () => {
  const questions = [
    {
        id: 1,
        question: '현재 IPv4의 확장형으로 IPv4가 가지고 있는 주소 고갈, 보안성, 이동성 지원 등의 문제점을 해결하기 위해서 개발된 128비트 주소체계를 갖는 차세대 인터넷 프로토콜은 무엇인가?',
        answer: 'IPv6',
    },
    {
        id: 2,
        question: ' 목적에 따른 디자인 패턴의 유형에는 생성, 구조, (  ) 이/가 있다. 괄호 (  ) 안에 알맞는 유형을 쓰시오.',
        answer: '행위',
    },
    {
        id: 3,
        question: '다음은 어떤 UML 다이어그램에 관한 예시이다. 어떤 종류의 다이어그램인가?',
        answer: '패키지 다이어그램',
        imageSize: { width: '450px', height: '200px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-4-03.png',
    },
    {
        id: 4,
        question: '데이터베이스의 회복(Recovery) 기법 중 Rollback 시 Redo, Undo가 모두 실행되는 트랜잭션 처리법으로 트랜잭션 수행 중 갱신 결과를 바로 DB에 반영하는 기법은 무엇인가?',
        answer: '즉각 갱신 회복 기법',
    },
    {
        id: 5,
        question: '다음은 n이 10일 때, 10을 2진수로 변환하는 자바 소스 코드이다. ①,②에 알맞는 값을 적으시오.',
        detail: "[출력결과] 00001010",
        answer: '\n ① :  n > 0 or n >=1 or i < 8 or i <= 7\n ② :  n%2 or n&1',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-4-05.png',
    },
    {
        id: 6,
        question: ' 다음은 자바 소스 코드이다. 출력 결과를 보고, ①,②에 알맞는 값을 적으시오.',
        detail: "[출력결과]\n 1 4 7 10 13 \n 2 5 8 11 14 \n 3 6 9 12 15 ",
        answer: '① 3 ② 5',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-4-05.png',
    },
    {
        id: 7,
        question: ' 해킹 공격의 종류 중 하나인 스니핑(Sniffing)에 대하여 설명하시오.',
        answer: '암호화되지 않은 패킷들을 수집하여 순서대로 재조합 후 ID, PW와 같은 중요한 정보를 유출하기 위한 수동적인 형태의 공격',
    },
    {
        id: 8,
        question: 'IP 패킷에서 외부의 공인 IP주소와 포트 주소에 해당하는 내부 IP주소를 재기록하여 라우터를 통해 네트워크 트래픽을 주고받는 기술은 무엇인가?',
        answer: 'NAT(Network Address Transformation)',
    },
    {
        id: 9,
        question: '다음은 파이썬 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '\n [1,2,3]\n 7\n 123\n 45\n 6789',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-4-09.png',
    },
    {
        id: 10,
        question: '분산 컴퓨팅 기술 기반의 데이터 위변조 방지 기술로 P2P방식을 기반으로 하여 소규모 데이터들이 연결되어 형성된 \'블록\'이라는 분산 데이터 저장 환경에 관리 대상 데이터를 저장함으로써 누구도 임의로 수정할 수 없고 누구나 변경의 결과를 열람할 수 있게끔 만드는 기술은 무엇인가?',
        answer: '블록체인',
    },
    {
        id: 11,
        question: '오픈 소스 기반으로 한 분산 컴퓨팅 플랫폼으로, 일반 PC급 컴퓨터들로 가상화된 대형 스토리지를 형성하고 그 안에 보관된 거대한 데이터 세트를 병렬로 처리할 수 있도록 개발된 자바 소프트웨어 프레임워크로 구글, 야후 등에 적용한 기술은 무엇인가?',
        answer: '하둡',
    },
    {
        id: 12,
        question: '이상 현상의 종류 3가지를 쓰시오',
        answer: '삽입 이상, 삭제 이상, 갱신 이상',
    },
    {
        id: 13,
        question: '다음은 프로세스 상태 전이도이다. ①,②,③에 알맞은 상태를 쓰시오.',
        answer: '① 준비 ② 실행 ③ 대기',
        imageSize: { width: '450px', height: '200px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-4-13.png',
    },
    {
        id: 14,
        question: '테스트 오라클 중 특정한 몇 개의 입력값에 대해서만 기대하는 결과를 제공해주는 오라클은 무엇인가?',
        answer: '샘플링 오라클',
    },
    {
        id: 15,
        question: '점수에 따른 성적 부여가 잘 되었는지 테스트하고자 한다. 아래에 알맞는 테스트 기법은 무엇인가?',
        detail: '[테스트 값]\n -10점 / 30점 / 65점 / 75점 / 85점 / 95점 / 110점',
        answer: '동등분할 테스트',
        imageSize: { width: '350px', height: '200px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-4-15.png',
    },
    {
        id: 16,
        question: '다음 조건을 만족하면서 학과별로 튜플 수가 얼마인지 구하는 SQL문을 작성하시오.',
        detail: '- 대소문자를 구분하지 않는다.\n- WHERE 구문을 사용하지 않는다.\n- GROUP BY를 사용한다.\n- 세미콜론(;)은 생략 가능하다.\n- 별칭(AS)을 사용해야 한다.\n- 집계 함수를 사용해야 한다.',
        answer: 'SELECT 학과, COUNT(학과) AS 학과별튜플수 FROM 학생 GROUP BY 학과;',
        imageSize: { width: '500px', height: '350px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-4-16.png',
    },
    {
        id: 17,
        question: '데니스 리치와 켄톰슨 등이 함께 벨 연구소를 통해 만든 운영체제이며, 90% 이상 C언어로 구현되어 있고, 시스템 프로그램이 모듈화되어 있어서 다른 하드웨어 기종으로 쉽게 이식 가능하며 계층적 트리 구조를 가짐으로써 통합적인 파일 관리가 용이한 운영체제는 무엇인가?',
        answer: '유닉스',
    },
    {
        id: 18,
        question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '\n KOREA \n EA \n K \n E \n M',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-4-18.png',
    },
    {
        id: 19,
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '1',
        imageSize: { width: '400px', height: '450px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-4-19.png',
    },
    {
        id: 20,
        question: '정보보안에서 가용성(Availablility) 에 대하여 서술하시오.',
        answer: '권한을 가진 사용자가 애플리케이션이 원하는 서비스를 지속 사용할 수 있도록 보장하는 특성',
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
        <h1>2020년 4회</h1>

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

export default Past04;
