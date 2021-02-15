import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Menu = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  bottom: 0px;
  z-index: 9;
  background-color: white;
  border-top: 1px solid #dadada;
  & > a {
    width: 25%;
    text-align: center;
  }
`;

const Btn = styled(Link)`
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.primaryHover} !important;
    text-decoration: underline;
}
`;

const BottomMenu = () => {
  return (
    <Menu>
      <Btn to='/'>
        <i className="fas fa-home fa-lg"></i>
      </Btn>
      <Btn to='/'>
        <i className="fas fa-search fa-lg"></i>
      </Btn>
      <Btn to='/cart'>
        <i className="fas fa-shopping-cart fa-lg"></i>
      </Btn>
      <Btn to='/'>
        <i className="fas fa-user fa-lg"></i>
      </Btn>
    </Menu>
  );
};

export default BottomMenu;
