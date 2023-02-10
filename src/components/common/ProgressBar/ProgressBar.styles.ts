import styled from 'styled-components'
import { fontSize } from 'utils'
import { IStyledProgressBar } from './ProgressBar.interface'

const StyledProgressBar = styled.div<IStyledProgressBar>`
  padding-top: 22px;
  p {
    ${fontSize(16, 300, 16, 4)};
    margin-bottom: 16px;
    strong {
      font-weight: 400;
    }
  }
  .progress-bar {
    width: 100%;
    height: 4px;
    position: relative;
    background-color: var(--disabled);
    margin-bottom: 10px;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: -3px;
      height: 10px;
      background-color: ${({ status }) =>
        status === 'error' ? 'var(--error)' : 'var(--primary)'};
      transition: width 400ms ease-in-out;
      width: ${({ uploadPercentage = 0 }) => `${uploadPercentage}%`};
    }
  }
`

export { StyledProgressBar }
