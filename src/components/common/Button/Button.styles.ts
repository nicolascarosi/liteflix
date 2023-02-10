import styled, { css } from 'styled-components'
import { IButtonVariant, IColor } from 'interfaces'
import { colors } from 'theme'
import { IButton } from './Button.interface'
import { fontSize, Icon } from 'utils'

const btnColors = {
  black: {
    text: colors.white,
    background: colors.black,
    border: colors.black,
  },
  white: {
    text: colors.black,
    background: colors.white,
    border: colors.white,
  },
}

const variants = (variant: IButtonVariant, color: IColor, disabled = false) => {
  if (disabled) {
    return css`
      cursor: not-allowed;
      background-color: var(--disabled);
      border-color: var(--disabled);
      color: var(--black);
    `
  } else if (variant === 'ghost') {
    return css`
      background-color: transparent;
      color: var(--white);
      border-color: transparent;
      span,
      ${Icon} {
        transition: opacity 400ms;
      }
      &:hover {
        span,
        ${Icon} {
          opacity: 0.8;
        }
      }
    `
  } else if (variant === 'outline') {
    return css`
      color: var(--white);
      box-shadow: 0 0 0 0 inset var(--btn-outline-border);
      animation: btn-outline-animation 600ms forwards ease-in-out;
      animation-delay: var(--delay-appereance-2);
      &::after {
        content: '';
        height: 100%;
        position: absolute;
        z-index: 20;
        top: 0;
        left: 0;
        animation: width-animation 600ms forwards ease-in-out;
        animation-delay: var(--delay-appereance-2);
        background-color: var(--btn-outline-bg);
        width: 0;
      }
      span,
      ${Icon} {
        transform: translateX(-20px);
        opacity: 0;
        animation: fade-in-slide-right 600ms forwards ease-in-out;
        animation-delay: var(--delay-appereance-3);
      }
    `
  } else {
    return css`
      color: ${btnColors[color].text};
      &::after {
        content: '';
        height: 100%;
        position: absolute;
        z-index: 20;
        top: 0;
        left: 0;
        animation: width-animation 600ms forwards ease-in-out;
        animation-delay: var(--delay-appereance-2);
        background-color: ${btnColors[color].background};
        width: 0;
      }
      span,
      ${Icon} {
        transform: translateX(-20px);
        opacity: 0;
        animation: fade-in-slide-right 600ms forwards ease-in-out;
        animation-delay: var(--delay-appereance-3);
      }
    `
  }
}

const StyledButton = styled.button<IButton>`
  ${fontSize(18, 400, 18, 4)}
  min-width: 248px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: 12px;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) 0s;
  user-select: none;
  position: relative;
  padding: 17px 40px;
  width: ${({ block }) => (block ? '100%' : 'auto')};
  span,
  ${Icon} {
    z-index: 30;
  }
  ${({ variant = 'default', color = 'black', disabled }) =>
    variants(variant, color, disabled)}
  &:hover {
    opacity: 0.9;
  }
`

const StyledLink = styled(StyledButton).attrs({
  as: 'a',
})``

export { StyledButton, StyledLink }
