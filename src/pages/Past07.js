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

const Past07 = () => {
  const questions = [
    {
      id: 1,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '3',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2021-3-01.png',
    },
    {
      id: 2,
      question: '다음은 정보 보호 기술인 AAA에 대한 설명이다. 각 설명에 맞는 용어를 적으시오.',
      detail: "① 시스템을 접근하기 전에 접근 시도하는 사용자의 신원을 검증\n\n" +
              "② 검증된 사용자에게 어떤 수준의 권한과 서비스를 허용\n\n" +
              "③ 사용자의 자원(시간,정보,위치 등)에 대한 사용 정보를 수집",
      answer: '① Authentication ② Authorization ③ Accounting',
    },
    {
      id: 3,
      question: '데이터 제어어(DCL) 중 GRANT 에 대하여 설명하시오.',
      answer: '데이터베이스 관리자가 데이터베이스 사용자에게 사용 권한을 부여하는데 사용하는 명령어',
    },
    {
      id: 4,
      question: '다음은 스푸핑 공격에 대한 설명이다. 괄호 안에 들어갈 알맞은 답안을 작성하시오.',
      detail: "(  ) 스푸핑은 근거리 통신망 하에서 (  ) 메시지를 이용하여 상대방의 데이터 패킷을 중간에서 가로채는 중간자 공격 기법이다." +
              " 이 공격은 데이터 링크 상의 프로토콜인 (  )를 이용하기 때문에 근거리상의 통신에서만 사용할 수 있는 공격이다.",
      answer: 'ARP',
    },
    {
      id: 5,
      question: '다음은 Coupling에 대한 설명이다. 설명에 대한 Coupling 종류를 영문으로 작성하시오.',
      detail: "어떤 모듈이 다른 모듈의 내부 논리 조직을 제어하기 위한 목적으로 제어 신호를 이용하여 통신하는 경우의 결합도이다, 하위 모듈에서 상위 모듈로 제어 신호가 이동하여 상위 모듈에게 처리 명령을 부여하는 권리 전도 현상이 발생",
      answer: 'control',
    },
    {
      id: 6,
      question: 'OSI 7 Layer에 대한 설명이다. 다음 각 설명에 해당되는 계층을 적으시오.',
      detail: "① 물리계층을 통해 송수신되는 정보의 오류와 흐름을 관리하여 안전한 정보의 전달을 수행할 수 있도록 도와주는 역할\n\n" +
              "② 데이터를 목적지까지 가장 안전하고 빠르게 전달하는 기능\n\n" +
              "③ 수신자에서 데이터의 압축을 풀수 있는 방식으로 된 데이터 압축",
      answer: '① 데이터링크 ② 네트워크 ③ 표현',
    },
    {
      id: 7,
      question: '다음 객체지향 추상화에 대한 설명 중 괄호 안에 들어갈 알맞은 용어를 적으시오.',
      detail: "(  ①  )은/는 클래스들 사이의 전체 또는 부분 같은 관계를 나타내는 것이고, (  ②  )은/는 한 클래스가 다른 클래스를 포함하는 상위 개념일 때 IS-A관계라하며, 일반화 관계로 모델링한다.",
      answer: '① Aggregation ② Generalization',
    },
    {
      id: 8,
      question: '다음은 테스트케이스의 구성요소에 대한 설명이다. 괄호 (  ) 안에 들어갈 알맞는 보기를 고르시오.',
      detail: "왼쪽 빈칸부터 ①, ②, ③ 순서대로",
      answer: '① 테스트 조건 ② 테스트 데이터 ③ 예상 결과',
      imageSize: { width: '450px', height: '150px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2021-3-08.png',
    },
    {
      id: 9,
      question: '아래에서 설명하는 테스트 기법은 무엇인가?',
      detail: "(  ) 통해 요구사항 명세를 입력 조건과 출력 조건 간의 논리적 관계로 표현하고, 이를 기반으로 테스트케이스를 도출한다. 입력 자료 간의 관계와 출력에 영향을 미치는 상황을 체계적으로 분석 후 효용성이 높은 테스트 케이스를 선정해서 테스트하는 기법이다.",
      answer: 'Cause Effect Graph(원인 결과 그래프)',
    },
    {
      id: 10,
      question: '다음에서 설명하는 블록 암호 알고리즘을 적으시오.',
      detail: "이것은 미국 NBS(National Bureau of Standards, 현재 NIST)에서 국가 표준으로 정한 암호 알고리즘으로, 64비트 평문을 64비트 암호문으로 암화하는 대칭키 암호 알고리즘이다. 키는 7비트마다 오류검출을 위한 정보가 1비트씩 들어가기 때문에 실질적으로는 56비트이다. 현재는 취약하여 사용되지 않는다.",
      answer: 'DES',
    },
    {
      id: 11,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '7',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2021-3-11.png',
    },
    {
      id: 12,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '37',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2021-3-12.png',
    },
    {
      id: 13,
      question: ' 다음은, 테이블에서 조건값을 실행한 화면이다. 이에 대한 알맞는 결과값을 작성하시오.',
      answer: '4',
      imageSize: { width: '450px', height: '200px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2021-3-13.png',
    },
    {
      id: 14,
      question: '다음은 파이썬 소스 코드이다. 출력 결과를 쓰시오.',
      detail: "a, b = 100, 200 \nprint (a==b)",
      answer: 'False',
    },
    {
      id: 15,
      question: '다음은 UML의 다이어그램에 대한 설명이다. 어떤 다이어그램에 대한 설명인가?',
      detail: "이 다이어그램은 문제 해결을 위한 도메인 구조를 나타내어 보이지 않는 도메인 안의 개념과 같은 추상적인 개념을 기술하기 위해 나타낸 것이다. 또한 소프트웨어의 설계 혹은 완성된 소프트웨어의 구현 설명을 목적으로 사용할 수 있다. 이 다이어그램은 속성(attribute)과 메서드(method)를 포함한다.",
      answer: '클래스 다이어그램',
    },
    {
      id: 16,
      question: '다음 보기에서 설명하는 객체지향 디자인 패턴은 무엇인가?',
      detail: "부모(상위) 클래스에 알려지지 않은 구체 클래스를 생성하는 패턴이며, 자식(하위) 클래스가 어떤 객체를 생성할지를 결정하도록 하는 패턴이기도 하다.  부모(상위) 클래스 코드에 구체 클래스 이름을 감추기 위한 방법으로도 사용한다.",
      answer: 'Factory method',
    },
    {
      id: 17,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '501',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2021-3-17.png',
    },
    {
      id: 18,
      question: '다음은 파일 구조(File Structures)에 대한 설명이다. 괄호 (  ) 안에 들어갈 알맞는 답을 작성하시오.',
      detail: "파일구조는 파일을 구성하는 레코드들이 보조기억장치에 편성되는 방식으로 접근 방식에 따라 방식이 달라진다." +
              " 접근 방법 중, 레코드들을 키-값 순으로 정렬하여 기록하고, 레코드의 키 항목만을 모은 (  )을 구성하여 편성하는 방식이 있으며," +
              " 레코드를 참조할 때는 (  ) 이 가르키는 주소를 사용하여 직접 참조할 수 있다. 파일 구조에는 순차 접근, (  ) 접근, 해싱 접근이 있다.",
      answer: '인덱스(또는 색인)',
    },
    {
      id: 19,
      question: '다음 설명에 대한 알맞는 답을 영문약어로 작성하시오.',
      detail: "(  ) 은/는 사용자가 그래픽을 통해 컴퓨터와 정보를 교환하는 환경을 말한다. 이전까지 사용자 인터페이스는 키보드를 통해 명령어로 작업을 수행시켰지만" +
              " (  ) 에서는 키보드 뿐만 아니라 마우스 등을 이용하여 화면의 메뉴 중 하나를 선택하여 작업을 수행한다." +
              " 화면에 아이콘을 띄어 마우스를 이용하여 화면에 있는 아이콘을 클릭하여 작업을 수행하는 방식이다. 대표적으로는 마이크로소프트의 Windows, 애플의 Mac 운영체제 등이 있다.",
      answer: 'GUI',
    },
    {
      id: 20,
      question: '다음은 소프트웨어 통합 테스트에 대한 설명이다. 괄호 (  ) 안에 들어갈 알맞는 답을 작성하시오.',
      detail: "(  ①  ) 방식은 이름에서도 알 수 있듯이, 하위 모듈부터 시작하여 상위 모듈로 테스트를 진행하는 방식이며," + 
              " 이 방식을 사용하기 위해서는 (  ②  )가 필요하다. (  ②  )는 이미 존재하는 하위 모듈과 존재하지 않은 상위 모듈에 대한 인터페이스 역할을 한다.",
      answer: '① 상향식 ② (테스트) 드라이버',
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
        <h1>2021년 3회</h1>

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

export default Past07;
