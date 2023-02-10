import { iconCheck } from 'assets'
import styled from 'styled-components'
import { breakpoints } from 'theme'
import { fontSize, Icon } from 'utils'
import { IStyledCustomSelect } from './CustomSelect.interface'

const StyledCustomSelect = styled.div<IStyledCustomSelect>`
  position: relative;
  z-index: 10;
  .select-label {
    display: flex;
    justify-content: center;
    align-items: center;
    ${fontSize(18, 300, 18, 4)};
    .dropdown-action {
      margin-left: 5px;
      display: flex;
      align-items: center;
      column-gap: 12px;
      ${fontSize(18, 700, 17, 4)};
      color: var(--white);
      white-space: nowrap;
      ${Icon} {
        transition: transform 400ms;
        ${({ active }) => (active ? 'transform: rotate(180deg)' : '')}
      }
    }
  }
  .dropdown-body {
    position: absolute;
    top: calc(100% + 15px);
    right: 0;
    width: 240px;
    z-index: -1;
    opacity: 0;
    padding: 24px;
    transition: opacity 400ms;
    background-color: var(--black);
    @media (max-width: ${breakpoints.screenLg}) {
      top: calc(100% + 25px);
      right: 50%;
      transform: translateX(50%);
    }
    &::before {
      content: '';
      border-style: solid;
      border-width: 8px;
      border-color: transparent transparent var(--black);
      position: absolute;
      bottom: 100%;
      right: 54px;
    }
    ul {
      display: grid;
      gap: 16px;
    }
    button {
      ${fontSize(16, 300, 16, 4)};
      color: var(--white);
      position: relative;
      width: 100%;
      text-align: left;
      &[disabled] {
        cursor: default;
        font-weight: 400;
        &::after {
          content: '';
          background-image: url(${iconCheck});
          background-size: 100%;
          background-repeat: no-repeat;
          width: 12px;
          height: 9px;
          position: absolute;
          z-index: 10;
          right: 0;
        }
      }
    }
    &.active {
      opacity: 1;
      z-index: 10;
    }
  }
`

export { StyledCustomSelect }
