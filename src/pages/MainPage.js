import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Content from '../style/Content';
import Footer from '../components/Footer';
import Past01 from '../pages/Past01';
import Past02 from '../pages/Past02';
import Past03 from '../pages/Past03';
import Past04 from '../pages/Past04';
import Past05 from '../pages/Past05';
import Past06 from '../pages/Past06';
import Past07 from '../pages/Past07';
import Past08 from '../pages/Past08';
import Past09 from '../pages/Past09';
import Past10 from '../pages/Past10';
import Past11 from '../pages/Past11';
import Past12 from '../pages/Past12';
import Past13 from '../pages/Past13';

const Container = styled.div`
    display: flex;
`;

const InfoBox = styled.div`
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    width: 600px;
    height: 620px;
    padding: 20px;
`;

const InfoTitle = styled.h3`
  display: flex;
  font-size: 15px;
  color: #393e46;
  margin: 0;
`;

const BoldTitle = styled.h3`
  display: flex;
  font-weight: bold;
  color: #393e46;
  margin-bottom: -10px;
`;

const InfoTitle2 = styled.h3`
  display: flex;
  font-weight: normal;
  font-size: 14px;
  color: #393e46;
`;

const MainPage = () => {
    return (
        <Container>
            <Sidebar />

            <Content>
                <Routes>
                    <Route path='/' element={<h2> 좌측 메뉴에서 연도를 선택해 문제를 풀어주세요!</h2>} />
                    <Route path='/2020/past1' element={<Past01 />} />
                    <Route path='/2020/past2' element={<Past02 />} />
                    <Route path='/2020/past3' element={<Past03 />} />
                    <Route path='/2020/past4' element={<Past04 />} />

                    <Route path='/2021/past1' element={<Past05 />} />
                    <Route path='/2021/past2' element={<Past06 />} />
                    <Route path='/2021/past3' element={<Past07 />} />

                    <Route path='/2022/past1' element={<Past08 />} />
                    <Route path='/2022/past2' element={<Past09 />} />
                    <Route path='/2022/past3' element={<Past10 />} />

                    <Route path='/2023/past1' element={<Past11 />} />
                    <Route path='/2023/past2' element={<Past12 />} />
                    <Route path='/2023/past3' element={<Past13 />} />
                </Routes>

                <InfoBox>
                    <InfoTitle>자격명 : 정보처리기사 <br /><br /> 영문명: Engineer Information Processing <br /><br /> 관련부처: 과학기술정보통신부 <br /><br /> 시행기관: 한국산업인력공단 </InfoTitle><br />
                    
                    <BoldTitle>개요</BoldTitle>
                    <InfoTitle2>컴퓨터를 효과적으로 활용하기 위해서 하드웨어뿐만 아니라 정교한 소프트웨어가 필요하다. 이에 따라 우수한 프로그램을 개발하여 업무의 효율성을 높이고, 궁극적으로 국가발전에 이바지하기 위해서 컴퓨터에 관한 전문적인 지식과 기술을 갖춘 사람을 양성할 목적으로 제정됨.</InfoTitle2>

                    <BoldTitle>합격기준</BoldTitle>
                    <InfoTitle2>- 실기 : 100점을 만점으로 하여 60점 이상.</InfoTitle2>

                    <BoldTitle>실기시험 출제 범위</BoldTitle>
                    <InfoTitle2>1. 현행 시스템 분석 및 요구사항 확인(소프트웨어 공학 기술의 요구사항 분석 기법 활용) <br />
                                2. 데이터 입출력 구현(논리, 물리데이터베이스 설계, 조작 프로시저 등) <br />
                                3. 통합 구현(소프트웨어와 연계 대상 모듈간의 특성 및 연계 모듈 구현 등) <br />
                                4. 서버프로그램 구현(소프트웨어 개발 환경 구축, 형상 관리, 공통 모듈, 테스트 수행 등) <br />
                                5. 인터페이스 구현(소프트웨어 공학 지식, 소프트웨어 인터페이스 설계, 기능 구현, 구현검증 등) <br />
                                6. 화면설계(UI 요구사항 및 설계, 표준 프로토 타입 제작 등) <br />
                                7. 애플리케이션 테스트 (테스트 케이스 설계, 통합 테스트, 성능 개선 등) <br />
                                8. SQL 응용(SQL 작성 등) <br />
                                9. 소프트웨어 개발 보안 구축(SW 개발 보안 설계, SW개발 보안 구현 등) <br />
                                10. 프로그래밍 언어활용(기본 문법 등) <br />
                                11. 응용 SW기초 기술 활용(운영체제, 데이터베이스 활용, 네트워크 활용, 개발환경 구축 등) <br />
                                12. 제품 소프트웨어 패키징(제품 소프트웨어 패키징, 제품소프트웨어 매뉴얼 작성 , 버전 관리등)
                    </InfoTitle2>
                </InfoBox>

            </Content>
            <Footer />
        </Container>
    );
};

export default MainPage;
