import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Past01 from './pages/Past01';
import Past02 from './pages/Past02';
import Past03 from './pages/Past03';
import Past04 from './pages/Past04';
import Past05 from './pages/Past05';
import Past06 from './pages/Past06';
import Past07 from './pages/Past07';
import Past08 from './pages/Past08';
import Past09 from './pages/Past09';
import Past10 from './pages/Past10';
import Past11 from './pages/Past11';
import Past12 from './pages/Past12';
import RandomPage from './pages/RandomPage';
import FindPage from './pages/FindPage';
import FindPage2 from './pages/FindPage2';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
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
      <Route path='/random' element={<RandomPage />} />
      <Route path='/find' element={<FindPage />} />
      <Route path='/find2' element={<FindPage2 />} />
    </Routes>
  );
};

export default App;
