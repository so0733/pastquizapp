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

const Past10 = () => {
  const questions = [
    {
      id: 1,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '\n1,1,3,2\n3,4,5,3\n3,5,6,4\n3,5,5,3',
      imageSize: { width: '400px', height: '500px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-3-01.png',
    },
    {
      id: 2,
      question: '다음 빈칸에 알맞은 관계대수의 기호를 쓰시오.',
      answer: '\n① ∪\n② ―\n③ X\n④ π\n⑤ ⋈',
      imageSize: { width: '300px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-3-02.png',
    },
    {
      id: 3,
      question: '다음은 디자인 패턴에 대한 설명이다. 괄호 (  ) 안에 알맞는 답을 작성하시오.',
      detail: "(  ①  ) 패턴은 기능의 클래스 계층과 구현의 클래스 계층을 연결하고, 구현부에서 추상 계층을 분리하여 추상화된 부분과 실제 구현 부분을 독립적으로 확장할 수 있는 디자인 패턴이다.\n\n" +
              "(  ②  ) 패턴은 한 객체의 상태가 바뀌면 그 객체에 의존하는 다른 객체들에게 연락이 가고 자동으로 내용이 갱신되는 방법으로 일대 다의 의존성을 가지며 상호 작용하는 객체 사이에서는 가능하면 느슨하게 결합하는 디자인 패턴이다.",
      answer: '① 브릿지 (Bridge) ② 옵저버 (Observer)',
    },
    {
      id: 4,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '24513',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-3-04.png',
    },
    {
      id: 5,
      question: '192.168.1.0/24인 IP 주소를 FLSM 3개의 subnet으로 분할할 때 두 번째 서브넷의 브로드캐스드 IP 주소(10진수)를 쓰시오.',
      answer: '192.168.1.127',
    },
    {
      id: 6,
      question: '다음의 테스트 기법은 무엇인지 [보기]에서 고르시오.',
      detail: "등가 분할 후 경곗값 부분에서 오류 발생 확률이 높기 때문에 경곗값을 포함하여 테스트 케이스를 설계하여 테스트하는 기법이다.\n\n" +
              "예를 들어 0, 60, 80, 100으로 등가 분할 후 테스트 데이터는 -1, 0, 59, 60, 61, 79, 80, 81, 99, 100이다.\n\n" +
              "[보기]\n㉠ Equivalence Partitionting ㉡ Decision Table ㉢ State Transition ㉣ Use Case ㉤ Classification Tree Method ㉥ Cause-Effect Graph ㉦ Boundary Value Analysis",
      answer: '㉦ Boundary Value Analysis',
    },
    {
      id: 7,
      question: '직원 테이블과 부서 테이블이 다음과 같을 때 쿼리를 수행한 결과를 쓰시오.',
      answer: '① 3 ② 4',
      imageSize: { width: '600px', height: '300px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-3-07.png',
    },
    {
      id: 8,
      question: '괄호 (  ) 안에 들어갈 용어를 쓰시오.',
      detail: "(  ①  ) 은/는 사람들의 심리와 행동 양식을 교묘하게 이용해서 원하는 정보를 얻는 공격기법이다.\n\n" +
              "(  ②  ) 은/는 정보를 수집한 후, 저장만 하고 분석에 활용하고 있지 않은 다량의 데이터이다.",
      answer: '① 사회 공학 ② 다크 데이터',
    },
    {
      id: 9,
      question: '다음은 파이썬 소스 코드이다. 출력 결과를 쓰시오.',
      detail: "I = [1,2,3,4,5]\nI = list(map(lambda num : num + 100, I)))\nprint(I)",
      answer: '[101,102,103,104,105]',
    },
    {
      id: 10,
      question: '다음은 테스팅에 대한 설명이다. 괄호 (  ) 안에 들어갈 올바른 답을 한 단어로 쓰시오.',
      detail: "다양한 보안 장비와 서버, 네트워크 장비 등으로부터 보안 로그와 이벤트 정보를 수집한 후 정보 간의 연관성을 분석하여 위협 상황을 인지하고, 침해사고에 신속하게 대응하는 보안 관제 솔루션이다. 특히, 기업에서 생성되는 테라바이트급의 정형, 비정형 데이터와 방화벽, 안티바이러스 시스템, 서버, 네트워크 장비 등으로부터 수집한 다양한 데이터 등을 빅데이터 기반의 로그 분석을 통해 보안의 위협 징후를 빠르게 판단, 대응할 수 있도록 해준다.",
      answer: 'SIEM',
    },
    {
      id: 11,
      question: '다음 보기 중 형상 관리 도구에 해당하는 것을 모두 고르시오.',
      detail: "ATM, CVS, OLAP, DDOS, SVN, OLTP, Spring, Git, Maven, Jenkins",
      answer: 'CVS, SVN, Git',
    },
    {
      id: 12,
      question: 'STUDENT 테이블에서 컴퓨터과 학생 50명, 전기과 학생 100명, 인터넷과 학생 50명의 정보가 저장되어 있을 때, 다음 SQL문의 실행 결과에 따른 튜플의 수는? (단, DEPT 칼럼은 학과명이다.)',
      detail: "① SELECT DERP FROM STUDENT;\n② SELECT DISTINCT DEPT FROM STUDENT;\n③SELECT COUNT(DISTINCT DEPT) FROM STUDENT WHERE DEPT = '인터넷과';",
      answer: '\n ① 200\n ② 3\n ③ 1',
    },
    {
      id: 13,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '2',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-3-13.png',
    },
    {
      id: 14,
      question: '다음 주요 IT 기술에 대한 용어 설명이다. 괄호 (  ) 안에 들어갈 용어를 쓰시오.',
      detail: "(  ①  )은/는 프로세서(processor) 안에 독립적인 보안 구역을 따로 두어 중요한 정보를 보호하는 ARM사에서 개발한 하드웨어 기반의 보안 기술로 프로세서(processor) 안에 독립적인 보안 구역을 별도로 하여, 중요한 정보를 보호하는 하드웨어 기반의 보안 기술이다.\n\n" +
              "(  ②  )은/는  사용자들이 사이트에 접속할 때 주소를 잘못 입력하거나 철자를 빠뜨리는 실수를 이용하기 위해 유사한 유명 도메인을 미리 등록하는 일로 URL 하이재킹(hijacking)이라고도 한다.",
      answer: '① 트러스트존(Trustzone) ② 타이포스쿼팅(typosquatting)',
    },
    {
      id: 15,
      question: '다음에서 설명하는 용어를 쓰시오.',
      detail: "여러 개의 사이트에서 한번의 로그인으로 여러가지 다른 사이트들을 자동적으로 접속하여 이용하는 방법을 말한다. 일반적으로 서로 다른 시스템 및 사이트에서 각각의 사용자 정보를 관리하게 되는데 이때 하나의 사용자 정보를 기반으로 여러 시스템을 하나의 통합 인증을 사용하게 하는 것을 말한다. 즉 하나의 시스템에서 인증을 할 경우 타 시스템에서는 인증 정보가 있는지 확인하고 있으면 로그인 처리를 하도록 하고, 없는 경우 다시 통합 인증을 할 수 있도록 만드는 것을 의미한다.",
      answer: 'SSO',
    },
    {
      id: 16,
      question: '다음은 프로세스 스케줄링에 대한 설명이다. 괄호 (  ) 안에 들어갈 스케줄링 기법을 쓰시오.',
      detail: "(  ①  ) 은/는 프로세스가 도착하는 시점에 따라 그 당시 가장 작은 서비스 시간을 갖는 프로세스가 종료 시 까지 자원을 점유하는 스케줄링 기법\n\n" +
              "(  ②  ) 은/는 프로세스는 같은 크기의 CPU 시간을 할당(시간 할당량), 프로세스가 할당된 시간 내에 처리 완료를 못하면 준비 큐 리스트의 맨 뒤로 보내지고 CPU는 대기 중인 다음 프로세스로 넘어가는 스케줄링 기법\n\n" +
              "(  ③  ) 은/는 가장 짧은 시간이 소요되는 프로세스를 먼저 수행, 남은 처리시간이 더 짧다고 판단되는 프로세스가 준비 큐에 생기면 언제라도 프로세스가 선점되는 스케줄링 기법으로 비선점 방식의 스케줄링 기법에 선점 방식을 도입한 기법",
      answer: '① SJF ② RR ③ SRT',
    },
    {
      id: 17,
      question: '다음은 UML에 대한 설명이다. 괄호 (  ) 안에 들어갈 용어를 쓰시오.',
      detail: "(  ①  ) 은/는 UML의 구성 요소 중 사물의 의미를 확장하고 명확히 나는 요소로 사물과 사물을 연결하여 표현하는 요소\n\n" + 
              "(  ②  ) 은/는 공통의 속성, 연산(메서드), 관계, 의미를 공유하는 객체들의 집합\n\n" +
              "(  ③  ) 은/는 기능을 모아놓은 클래스로 추상 메서드와 상수만을 포함하는 추상 클래스로 구현하는 모든 클래스에 대해 특정한 메서드가 반드시 존재하도록 강제하는 역할을 하는 클래스",
      answer: '① 관계 ② 클래스 ③ 인터페이스',
    },
    {
      id: 18,
      question: '다음은 E-R 다이어그램이다. 괄호 (  ) 안에 들어갈 구성 요소를 E-R 다이어그램의 보기에서 고르시오.',
      detail: "(  ①  ) : 개체 집합의 단일 속성을 나타낸다. \n(  ②  ) : 관계 집합의 속성을 나타낸다. \n(  ③  ) : 개체 집합과 속성을 이어준다. \n(  ④  ) : 개체 집합과 관계 집합을 이어준다. \n(  ⑤  ) : 관계 집합을 나타낸다.",
      answer: '\n ① ㉡ \n ② ㉦\n ③ ㉤\n ④ ㉥\n ⑤ ㉣',
      imageSize: { width: '500px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-3-18.png',
    },
    {
      id: 19,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '0 1 2 3',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-3-19.png',
    },
    {
      id: 20,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '993',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2022-3-20.png',
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
        <h1>2022년 3회</h1>

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

export default Past10;
