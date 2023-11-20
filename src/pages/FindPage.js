import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Content from '../style/PastContent';
import AnswerButton from '../style/AnswerButton';
import questions from '../components/questionsData';
import Modal from '../components/Modal';
import Footer from '../components/Footer';

const Container = styled.div`
  display: flex;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  width: 200px;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const ModalButton = styled.button`
  padding: 8px 16px;
  background-color: #F2CD5C;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #F2921D;
  }
`;

const WarningMessage = styled.div`
  color: red;
  margin-top: 5px;
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

const FindPage = () => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);              // 문제 인덱스
  const [questionNumberInput, setQuestionNumberInput] = useState('');               // 문제 번호 입력 (1)
  const [invalidInput, setInvalidInput] = useState(false);                          // 문제 번호 입력 (2)
  const [isModalOpen, setIsModalOpen] = useState(false);                            // 모달 창
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill('')); // 사용자 답안 입력 (1)
  const [userAnswer, setUserAnswer] = useState('');                                 // 사용자 답안 입력 (2)
  const [revealedAnswers, setRevealedAnswers] = useState(Array(questions.length).fill(false)); // 정답 확인 여부
  const [answered, setAnswered] = useState(false);                                             // 답변을 제출 했는지 여부
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

  const handleSearchInputChange = (event) => {
    setQuestionNumberInput(event.target.value);
  };

  const handleSearchClick = () => {
    const parsedNumber = parseInt(questionNumberInput, 10);
    if (!isNaN(parsedNumber) && parsedNumber >= 1 && parsedNumber <= questions.length) {
      setCurrentQuestionIndex(parsedNumber - 1);
      setQuestionNumberInput('');
      setInvalidInput(false);
    } else {
      setInvalidInput(true);
    }
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchClick();
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
  
  const currentQuestion = questions[currentQuestionIndex];                  // 현재 보고 있는 문제 정보 출력
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <Container>
      <Sidebar />

      <Content>
        <h1>문제 찾기</h1>

        <AnswerButton onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
          이전
        </AnswerButton>
        <AnswerButton onClick={handleNextQuestion} disabled={isLastQuestion}>
          {isLastQuestion ? '마지막 문제입니다.' : '다음'}
        </AnswerButton><br /><br />
        
        <SearchContainer>
            <form onSubmit={handleSearchSubmit}>
            <SearchInput
                type="number"
                min={1}
                max={questions.length}
                value={questionNumberInput}
                onChange={handleSearchInputChange}
                placeholder="질문 번호 입력(1~260)"
            />
            <SearchButton type="submit">검색</SearchButton>　
            <ModalButton onClick={handleOpenModal}>검색 방법</ModalButton>
            </form>
        </SearchContainer>

        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <p>
          기출 년도에 맞는 문제를 찾으시려면 아래 번호를 참고 하세요. <br /><br />
          1 ~ 20	: 2020년 1회 기출문제 <br />
          21 ~ 40	: 2020년 2회 기출문제 <br />
          41 ~ 60	: 2020년 3회 기출문제 <br />
          61 ~ 80	: 2020년 4회 기출문제 <br /><br />
          81 ~ 100	: 2021년 1회 기출문제 <br />
          101 ~ 120	: 2021년 2회 기출문제 <br />
          121 ~ 140	: 2021년 3회 기출문제 <br /><br />
          141 ~ 160	: 2022년 1회 기출문제 <br />
          161 ~ 180	: 2022년 2회 기출문제 <br />
          181 ~ 200	: 2022년 3회 기출문제 <br /><br />
          201 ~ 220	: 2023년 1회 기출문제 <br />
          221 ~ 240	: 2023년 2회 기출문제 <br />
          241 ~ 260	: 2023년 3회 기출문제 <br /><br />
          </p>
        </Modal>

        {invalidInput && (
          <WarningMessage>유효한 문제 번호를 입력하세요.</WarningMessage>
        )}

        <QuestionNumber>{currentQuestionIndex + 1}. {currentQuestion.rotation} 문제</QuestionNumber>
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

export default FindPage;
