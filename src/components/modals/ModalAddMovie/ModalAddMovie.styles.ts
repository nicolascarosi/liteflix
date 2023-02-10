import styled, { css } from 'styled-components'
import { fontSize } from 'utils'
import { IStyledProgressBarActions } from './ModalAddMovie.interface'
import { breakpoints } from 'theme'

const StyledModalAddMovie = styled.section`
  width: 100%;
  display: grid;
  .dropzone {
    cursor: pointer;
    display: flex;
    column-gap: 16px;
    align-items: center;
    justify-content: center;
    min-height: 100px;
    width: 100%;
    border: 1px dashed;
    p {
      user-select: none;
      ${fontSize(16, 400, 16, 4)};
    }
  }
  .custom-input {
    margin-top: 40px;
    min-width: 248px;
    justify-self: center;
    @media (max-width: ${breakpoints.screenLg}) {
      margin-top: 48px;
      max-width: calc(100% - 128px);
      width: 100%;
    }
  }
  .final-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    .logo {
      position: relative;
      top: -80px;
    }
    p {
      text-align: center;
      ${fontSize(24, 300, 26, 4)};
      margin-bottom: 24px;
      strong {
        font-weight: 400;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`

const StyledProgressBarActions = styled.div<IStyledProgressBarActions>`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  button {
    ${fontSize(18, 300, 22, 4)};
    ${({ status }) => {
      if (status === 'uploading' || status === 'error') {
        return css`
          color: var(--white);
          font-weight: 400;
        `
      } else {
        return css`
          color: var(--primary);
          pointer-events: none;
        `
      }
    }}
  }
`

export { StyledModalAddMovie, StyledProgressBarActions }
