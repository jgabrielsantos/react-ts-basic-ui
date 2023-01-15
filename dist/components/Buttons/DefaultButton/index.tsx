import { ReactNode } from "react"
import * as Styled from './style'

type DefaultButtonProps = {
  children: ReactNode,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  size: 'small' | 'medium' | 'large',
  theme: 'primary' | 'secondary' | 'tertiary'
  disabled?: boolean
  success?: boolean
  fail?: boolean
}

export const DefaultButton = ({
  children,
  onClick,
  size = 'small',
  theme = 'primary',
  disabled = false,
  success = false,
  fail = false
}: DefaultButtonProps) => {
  return (
    <Styled.ButtonWrapper
      onClick={onClick}
      size={size}
      theme={theme}
      disabled={disabled}
      success={success}
      fail={fail}
    >
      {children}
    </Styled.ButtonWrapper>
  )
}