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

const Past12 = () => {
  const questions = [
    {
      id: 1,
      question: '다음은 C언어 소스 코드이다. \'54321\'을 \'43215\'로 변환하는 과정 중 다음 빈칸에 들어갈 답을 쓰시오.',
      answer: 'n[(i+1) % 5]',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-2-01.png',
    },
    {
      id: 2,
      question: '4620원을 차례로 입력해서 거스름돈을 구하려고 한다.\n a, b, c, d에 들어갈 코드를 순서대로 작성하시오.\n(단, 보기에서 최소한의 식을 이용하여 코드를 구현해야 함.)',
      detail: "<보기>\n1000, 500, 100, 10, %, /, +, -",
      answer: '\nm / 1000\n(m % 1000) / 500\n(m % 500) / 100\n(m % 100) / 10',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-2-02.png',
    },
    {
      id: 3,
      question: '다음은 C언어 코드이다 출력 결과를 쓰시오.',
      detail:"입력값으로는 홍길동, 김철수, 박영희 순서대로 주어짐",
      answer: '\n박영희\n박영희\n박영희',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-2-03.png',
    },
    {
      id: 4,
      question: '데이터베이스와 관련한 다음 <처리 조건>에 부합하는 SQL문을 작성하시오.',
      detail: '<처리 조건>\n1. 테이블명은 학생으로 정의한다.\n2. 학생 테이블에 학번 220103, 성명 \'한국산\', 학년 3, 과목 \'경영학개론\' 연락처 \'010-1234-1234\' 인 학생의 정보를 입력하시오.',
      answer: 'INSERT INTO 학생(학번, 이름, 학년, 전공, 번호) VALUES(220103, \'한국산\', 3, \'경영학개론\', \'010-1234-1234\');',
    },
    {
      id: 5,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: 'BCD',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-2-05.png',
    },
    {
      id: 6,
      question: '전체 조건식의 참과 거짓 결과에 상관없이 결정 포인트 내에 있는 모든 개별 조건식이 참 한번, 거짓 한번을 모두 갖도록 조합하는 커버리지를 쓰시오.',
      answer: '조건 커버리지',
    },
    {
      id: 7,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '505',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-2-07.png',
    },
    {
      id: 8,
      question: '다음 보기에서 설명하는 암호 기법을 쓰시오.',
      detail: " 소프트웨어의 위변조 방지 역공학 기술의 일종으로서, 디지털 콘텐츠의 관련 산업이나 전자상거래 또는 보호해야 할 소프트웨어가 있는 다양한 산업 분야에 적용된다.\n\n " +
              "사용자에 의해 소프트웨어가 수정이 이루어졌는지를 검증하는데, 소프트웨어 내에서의 암호 키의 사용을 보호하기 위해 난독화(Obfuscation) 기법을 함께 사용하기도 한다.\n\n " +
              "난독화란 코드를 읽기 어렵게 만들어 역공학을 통한 공격을 막는 기술이다.",
      answer: '템퍼 프루핑(Tamper proofing)',
    },
    {
      id: 9,
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '213465',
      imageSize: { width: '700px', height: '450px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-2-09.png',
    },
    {
      id: 10,
      question: '데이터 베이스 설계 순서에 알맞은 답을 보기에서 쓰시오.',
      detail: '( ① ) -> ( ② ) -> ( ③ ) -> ( ④ ) -> ( ⑤ )\n\n [보기]\nⓐ논리적 설계 ⓑ 구현 ⓒ 물리적 설계 ⓓ 요구사항 분석 ⓔ 개념적 설계',
      answer: '\n ① : ⓓ 요구사항 분석 \n ② : ⓔ 개념적 설계 \n ③ : ⓐ논리적 설계 \n ④ : ⓒ 물리적 설계 \n ⑤ : ⓑ 구현',
    },
    {
      id: 11,
      question: '다음 설명하는 디자인 패턴 중 알맞은 답을 쓰시오.',
      detail: "① 객체를 하나만 생성하고 그 객체를 모든 곳에서 참조할 수 있도록 하는 패턴\n② 연산을 수행해야할 원소의 클래스를 수정하지 않고도 새로운 연산을 추가 가능하게 하는 패턴",
      answer: '① 싱글톤 ② 비지터',
    },
    {
      id: 12,
      question: '다음은 패리티 비트 관련 설명이다. 다음 보기 중 알맞은 답을 각각 고르시오.',
      detail: "[보기]\n㉠ FEC (Forward Error Correction)\n㉡ CRC (Cyclic Redundancy Check)\n㉢ BEC (Binary Erasure Check)\n㉣ NAK (Negative Acknowledgment)\n㉤ Parity\n㉥ BCD (Binary-Coded Decimal)\n㉦ MD (Message Digest)\n㉧ Hamming\n\n" +
      "① 은/는 데이터 전송 중 발생한 단일 비트 오류를 검출하고 복구하는 기술로, 추가적인 패리티 비트를 사용하여 오류 검출 및 정정이 가능하다\n" +
      "② 은/는 전송된 데이터에 발생하는 오류를 감지하고 바로 잡을 수 있는 기술로, 추가적인 리소스를 사용하여 오류를 자체적으로 복구하는 방법이다.\n" +
      "③ 은/는 전송된 데이터 중에서 일부 데이터가 손실되는 경우(지워지는 경우)에 이를 감지하는 기술로, 특정 비트의 유무를 체크하여 데이터가 손실되었는지 확인한다.\n" +
      "④ 은/는 각 데이터 블록에 대해 홀수 개수 또는 짝수 개수의 1 비트가 존재하도록 추가적인 비트를 사용하여 오류를 검출하는 방법이다.\n" +
      "⑤ 은/는 데이터 블록에 대한 체크섬을 생성하여 오류를 검출하는 기술로, 수신 측에서 전송된 데이터의 체크섬과 자체적으로 계산한 체크섬을 비교하여 오류를 감지한다.",
      answer: '\n① : ㉧ Hamming\n② : ㉠ FEC (Forward Error Correction)\n③ : ㉢ BEC (Binary Erasure Check)\n④ : ㉤ Parity\n⑤ : ㉡ CRC (Cyclic Redundancy Check)',
    },
    {
      id: 13,
      question: 'HDLC(High-Level Data Link Control)의 다양한 모드 중 알맞은 답을 보기에서 각각 고르시오.',
      detail:"[보기]\nⓐ 정보 ⓑ 익명 ⓒ 감독 ⓓ 릴레이 ⓔ 비번호 ⓕ 연결 \n제어 ⓖ 동기 균형 ⓗ 비동기 균형 모드 ⓘ 동기 응답\n모드 ⓙ 비동기 응답 모드 ⓚ 양방향 응답 모드\n\n" +
      "①은/는 데이터 전송에 대한 주된 기능을 제공하며 데이터를 전송하고 수신하기 위한 프레임들을 사용한다. 정보 프레임은 데이터를 실어 나르는 역할을 한다.\n\n" +
      "②은/는 데이터 전송의 흐름을 관리하고, 데이터의 에러와 유효성을 확인하는 역할을 하며 확인응답 프레임을 사용하여 데이터 프레임의 수신 및 확인 상태를 제어한다. 송신측은 확인응답 프레임을 통해 수신측으로부터 데이터 프레임의 수신 확인 여부를 파악할 수 있다.\n\n" +
      "③은/는 주로 제어 메시지를 전송하는데 사용되며 프레임에 번호가 없고 특별한 기능을 수행하는 제어 프레임을 사용한다.이 모드에서는 주로 링크 제어 프레임(Link Control Frame)이 사용한다.\n\n" +
      "④은/는 HDLC의 균형 모드 중 하나로, 두 장비 간의 통신이 균형적으로 이루어지는 모드입니다. ABM은 전이중(Full-duplex) 통신을 지원하며, 송신측과 수신측 모두가 데이터를 주고받을 수 있다.\n\n" +
      "⑤은/는 HDLC의 비균형 모드 중 하나로, 일방향 통신이 이루어지는 모드이다. ARM은 반 이중(Half-duplex) 통신을 지원하며, 송신측과 수신측이 동시에 데이터를 주고받을 수 없고, 한 번에 한 방향으로만 통신이 가능하다.",
      answer: '\n① : ⓐ 정보\n② : ⓒ 감독\n③ : ⓔ 비번호\n④ : ⓗ 비동기 균형 모드\n⑤ : ⓙ 비동기 응답 모드',
    },
    {
      id: 14,
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '\ntrue\nfalse\ntrue\ntrue',
      imageSize: { width: '350px', height: '350px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-2-14.png',
    },
    {
      id: 15,
      question: '다음 보기에서 대칭키와 비대칭키를 구별해서 작성하시오. ',
      detail: '[보기]\n DES, RSA, AES, ARIA, SEED, ECC\n\n①대칭키 : __________________ \n② 비대칭키 : __________________',
      answer: '\n① DES AES ARIA SEED\n② RSA ECC',
    },
    {
      id: 16,
      question: '괄호 (  ) 안에 들어갈 올바른 답을 쓰시오.',
      detail: "(  ) 함수는 단방향(일방향) 암호화에 사용되는 함수이다. 임의의 크기를 갖는 데이터를 고정된 크기의 값으로 변환하는 함수로 입력 데이터로부터 해시 값을 계산하는 것은 쉽지만, 원래 데이터를 복원하는 것은 어려워야 한다.",
      answer: '해시',
    },
    {
      id: 17,
      question: 'DROP TABLE 학생 _____ ; 에서 연쇄적으로 제거하기 위해 빈칸에 들어가야할 단어를 쓰시오.',
      answer: 'CASCADE',
    },
    {
      id: 18,
      question: '다음 빈칸에 알맞은 연산자를 넣으시오.',
      answer: '>',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-2-18.png',
    },
    {
      id: 19,
      question: '다음은 파이썬 소스 코드이다. 출력 결과를 쓰시오.',
      detail: "a = \"Engineer Information Processing\"\n\nb = a[:3]\nc = a[4:6]\nd = a[28:]\n\ne=b+c+d\n\nprint(e)",
      answer: 'engneing',
    },
    {
      id: 20,
      question: '하향식 통합테스트에서는 상위 수준 모듈들이 하위 수준 모듈들과 통합되는 과정을 검증한다. 이때, 하위 수준 모듈들을 대체하기 위해 (  ①  ) 모듈을 사용하고' +
                '상향식 통합테스트에서는 하위 수준 모듈들이 상위 수준 모듈들과 통합되는 과정을 검증한다. 이때, 상위 수준 모듈들을 대체하기 위해 (  ②  ) 모듈을 사용한다.',
      answer: '①스텁 ②드라이버',
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
        <h1>2023년 2회</h1>

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

export default Past12;
