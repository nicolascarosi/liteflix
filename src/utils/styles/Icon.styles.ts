import styled, { css } from 'styled-components'
import { IIcon } from './Utils.interface'

const getIconStyle = (
  icon: string,
  width = 18,
  height = 18,
  color = 'default'
) => {
  if (color === 'default') {
    return css`
      background-image: url(${icon});
      background-repeat: no-repeat;
      background-size: 100%;
      display: block;
      width: ${width + 'px'};
      height: ${height + 'px'};
    `
  }
  return css`
    mask-image: url(${icon});
    mask-repeat: no-repeat;
    mask-size: 100%;
    display: block;
    width: ${width + 'px'};
    height: ${height + 'px'};
    background-color: ${'var(--' + color + ')'};
  `
}

const Icon = styled.i<IIcon>`
  margin-bottom: 2px;
  &::after {
    content: '';
    transition: background 400ms;
    ${({ icon, width, height, color }) =>
      getIconStyle(icon, width, height, color)};
  }
`

export { Icon, getIconStyle }
