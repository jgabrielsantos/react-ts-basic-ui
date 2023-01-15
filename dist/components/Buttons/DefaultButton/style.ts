import styled from 'styled-components'

type DefaultButtonProps = {
  readonly size: 'small' | 'medium' | 'large',
  readonly theme: 'primary' | 'secondary' | 'tertiary'
  readonly disabled?: boolean
  readonly success?: boolean
  readonly fail?: boolean
}

export const ButtonWrapper = styled.button<DefaultButtonProps>``