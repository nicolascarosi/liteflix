import { css } from 'styled-components'

type IWeight = 300 | 400 | 500 | 600 | 700 | null

export const fontSize = (
  size = 16,
  weight?: IWeight,
  lineHeight?: number,
  letterSpacing?: number
) => css`
  font-size: ${size}px;
  font-size: ${0.0625 * size + 'rem'};
  ${weight ? 'font-weight: ' + weight : ''};
  ${lineHeight ? 'line-height:' + lineHeight + 'px' : ''};
  ${letterSpacing ? 'letter-spacing:' + letterSpacing + 'px' : ''};
`
