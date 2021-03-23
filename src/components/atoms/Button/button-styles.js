import { css } from 'styled-components'

export const ButtonBase = css`
  color: white !important;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 100px;
  border: none;
  outline: none;
  min-width: 100px;
  font-weight: bold;

  &:hover {
    filter: brightness(0.96);
  }

  &:focus {
    box-shadow: none;
  }

  &:active {
    opacity: 80%;
  }
`

export const small = css`
  font-size: 12px;
  padding: 10px 16px;
`

export const medium = css`
  font-size: 14px;
  padding: 11px 20px;
`

export const large = css`
  font-size: 16px;
  padding: 12px 24px;
`

export const fluid = css`
  width: 100% !important;
`
