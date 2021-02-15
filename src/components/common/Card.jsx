import React from 'react'
import styled from "styled-components";

const CardStyled = styled.div`
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 3px 10px #c4c4c4;
`;

const Card = (props) => {
  return <CardStyled {...props} />
}

export default Card
