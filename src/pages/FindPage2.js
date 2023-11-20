import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import Content from '../style/PastContent';
import AnswerButton from '../style/AnswerButton';
import questions from '../components/questionsData';
import Footer from '../components/Footer';

const Container = styled.div`
    display: flex;
`;

const AnswerInput = styled.textarea`
    width: 400px;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
`;

const AnswerText = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  padding: 5px;
  border-radius: 4px;
`;

const FindPage2 = () => {
    const yearRoundOptions = [
        "2020년 1회", "2020년 2회", "2020년 3회", "2020년 4회",
        "2021년 1회", "2021년 2회", "2021년 3회",
        "2022년 1회", "2022년 2회", "2022년 3회",
        "2023년 1회", "2023년 2회", "2023년 3회",
    ];

    const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
    const [globalReveals, setGlobalReveals] = useState(Array(yearRoundOptions.length).fill(false));
    const [currentPage, setCurrentPage] = useState(1);

    const questionsPerPage = 20;

    const handleUserAnswerChange = (event, questionIndex) => {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[questionIndex] = event.target.value;
        setUserAnswers(newUserAnswers);
    };

    const startIndex = (currentPage - 1) * questionsPerPage;
    const endIndex = startIndex + questionsPerPage;
    const questionsToShow = questions.slice(startIndex, endIndex);

    return (
        <Container>
            <Sidebar />

            <Content>
                <h1>기출 문제 모아 보기</h1>

                <label>페이지 선택: </label>
                <select value={currentPage} onChange={(event) => setCurrentPage(parseInt(event.target.value))}>
                    {yearRoundOptions.map((option, index) => (
                        <option key={index} value={index + 1}>
                            {option}
                        </option>
                    ))}
                </select><br />
                
                {questionsToShow.map((question, index) => (
                    <div key={index}>
                        <p>{index + 1}. {question.rotation} 문제</p>
                        <p>{question.question}</p>

                        {question.detail && (
                            <p>{question.detail}</p>
                        )}

                        {question.imagePath && (
                            <img
                                src={question.imagePath}
                                alt={`Question ${question.id}`}
                                style={question.imageSize ? question.imageSize : {}}
                            />
                        )} <br />

                        <AnswerInput
                            value={userAnswers[index]}
                            onChange={(event) => handleUserAnswerChange(event, index)}
                            placeholder="Your answer..."
                            rows={4}
                        /> <br />

                        <AnswerText>
                        {globalReveals[currentPage - 1] && (
                            <p>정답: {question.answer}</p>
                        )}
                        </AnswerText>
                    </div>
                ))}

                {!globalReveals[currentPage - 1] && (
                    <AnswerButton onClick={() => {
                        const newGlobalReveals = [...globalReveals];
                        newGlobalReveals[currentPage - 1] = true;
                        setGlobalReveals(newGlobalReveals);
                    }}>
                        전체 정답 보기
                    </AnswerButton>
                )}

                <br /><br />
            </Content>
            <Footer />
        </Container>
    );
};

export default FindPage2;
