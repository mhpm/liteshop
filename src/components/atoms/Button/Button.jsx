import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import * as Style from './button-styles'

const ButtonStyled = styled.button`
  ${Style.ButtonBase};
  ${(props) => Style[props.size]}
  ${(props) => props.fluid && Style.fluid}
`

export const Button = ({ fluid, size, children, ...props }) => {
  return (
    <ButtonStyled type="button" size={size} fluid={fluid} {...props}>
      {children}
    </ButtonStyled>
  )
}

Button.propTypes = {
  /**
   * Button contents
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * Flag to set width 100%
   */
  fluid: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Optional click handle
   */
  onClick: PropTypes.func,
}

Button.defaultProps = {
  fluid: false,
  size: 'medium',
  onClick: undefined,
}
