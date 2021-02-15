import React from 'react'
import styled from 'styled-components'
import Input from 'components/common/Input'
import { Link } from 'react-router-dom'

const HeaderStyled = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 90px;
  z-index: 9;
  border-bottom: 1px solid #e8e8e8;
  & > div {
    width: 40%;

    @media only screen and (max-width: 992px) {
      width: 60%;
    }

    @media only screen and (max-width: 640px) {
      width: 90%;
    }
  }
`

const Logo = styled.i`
  color: ${(props) => props.theme.colors.primary};
`

const Header = () => {
  return (
    <HeaderStyled>
      <div className="row">
        <div className="col-1 p-0">
          <Link to="/">
            <Logo className="fab fa-app-store fa-2x pt-1"></Logo>
          </Link>
        </div>
        <div className="col">
          <Input
            iconName="search"
            placeholder="search ..."
            className="rounded-pill"
          />
        </div>
      </div>
    </HeaderStyled>
  )
}

export default Header
