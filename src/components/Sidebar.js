import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SidebarContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100px;
  padding: 20px;
`;

const SidebarTitle = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  font-size: 20px;
  color: #393e46;
  margin: 0;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const MenuItem = styled.div`
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  height: 40px;
  font-size: 16px;
  border-radius: 10px;
  color: #393e46;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00A9FF;
    color: white;
    font-size: medium;
    border-radius: 10px;
  }
`;

const DropdownContent = styled.div`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  background-color: #CDF5FD;
  border-radius: 10px;
`;

const MenuItem2 = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  font-size: 16px;
  border-radius: 10px;
  color: #393e46;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00A9FF;
    color: white;
    font-weight: bold;
    border-radius: 10px;
  }
`;

const MenuItem3 = styled(Link)`
  display: flex;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  height: 40px;
  font-size: 16px;
  border-radius: 10px;
  color: #393e46;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00A9FF;
    color: white;
    font-size: medium;
    border-radius: 10px;
  }
`;


const DropdownMenuItem = ({ year, items }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <MenuItem onClick={toggleDropdown}>{year}년</MenuItem>

      <DropdownContent visible={dropdownVisible}>
        {items.map((item, index) => (
          <MenuItem2 key={index} to={`/${year}/past${index + 1}`}>
            {item}
          </MenuItem2>
        ))}
      </DropdownContent>
    </>
  );
};

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarTitle>기출 문제</SidebarTitle>

      <DropdownMenuItem year="2020" items={['1회', '2회', '3회', '4회']} />
      <DropdownMenuItem year="2021" items={['1회', '2회', '3회']} />
      <DropdownMenuItem year="2022" items={['1회', '2회', '3회']} />
      <DropdownMenuItem year="2023" items={['1회', '2회']} />

      <br /><br />
      <MenuItem3 to="/random">랜덤문제</MenuItem3>
      <MenuItem3 to="/find">문제찾기</MenuItem3>
      <MenuItem3 to="/find2">문제보기</MenuItem3>
      <br /><br />

      <MenuItem2 to="/">홈</MenuItem2>
    </SidebarContainer>
  );
};

export default Sidebar;
