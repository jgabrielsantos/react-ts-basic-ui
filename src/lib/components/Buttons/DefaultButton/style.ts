import styled from 'styled-components'

type DefaultButtonProps = {
  readonly size?: 'small' | 'medium' | 'large',
  readonly theme?: 'primary' | 'secondary' | 'tertiary'
  readonly color?: string
  readonly disabled?: boolean
  readonly success?: boolean
  readonly fail?: boolean
}

export const ButtonWrapper = styled.button<DefaultButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: ${({ size }) => {
    switch(size) {
      default: 
        return '0px 0px'
      case 'large':
        return '12px 24px'
      case 'medium':
        return '10px 20px'
      case 'small':
        return '8px 12px'
    }
  }};
  color: ${({ color, theme }) => {
    switch(theme) {
      default:
        return '#000000'
      case 'primary':
        return '#FFFFFF'
      case 'secondary':
        return color
      case 'tertiary':
        return '#202532'
    }
  }};
  border-radius: 6px;
  border: ${({ color, theme}) => {
    switch(theme) {
      default:
        return '1px solid #000000'
      case 'primary':
        return `1px solid ${color}`
      case 'secondary':
        return `1px solid ${color}`
      case 'tertiary':
        return '1px solid #BEC0C5'
    }
  }};
  background-color: ${({ color, theme }) => {
    switch(theme) {
      default:
        return 'transparent'
      case 'primary':
        return color;
    }
  }};
`