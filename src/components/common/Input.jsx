import React from 'react'
import styled from 'styled-components'

const InputStyled = styled.input`
  outline: none;
  display: block;
  background: #f3f3f3;
  width: 100%;
  border: 0;
  box-sizing: border-box;
  padding: 0.5rem 1.3rem;
  color: rgb(146 146 146);

  ::placeholder {
    color: #b5b5b5;
  }
`

const Icon = styled.i`
  position: absolute;
  right: 17px;
  top: 12px;
  z-index: 1;
  color: #b5b5b5;
`

const WithIcon = styled.div`
  position: relative;
`

const InputBase = (props) => {
  return <InputStyled {...props} className={props.className} />
}

const InputWithIcon = (props) => {
  return (
    <WithIcon>
      <InputBase {...props} />
      <Icon className={`fas fa-${props.iconName}`}></Icon>
    </WithIcon>
  )
}

const Input = (props) => {
  if (props.iconName) {
    return <InputWithIcon {...props} />
  } else {
    return <InputBase {...props} />
  }
}

export default Input
