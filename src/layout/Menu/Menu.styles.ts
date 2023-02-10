import { StyledButton, Backdrop } from 'components'
import styled from 'styled-components'
import { breakpoints } from 'theme'
import { fontSize } from 'utils'

const StyledMenuList = styled.nav`
  background-color: var(--bg-menu);
  padding: 80px 88px;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 600;
  height: 100vh;
  min-width: 760px;
  transform: translateX(100%);
  transition: transform var(--menu-transition-duration);
  ul {
    display: grid;
    row-gap: 40px;
    margin-top: 80px;
    @media (max-width: ${breakpoints.screenXl}) {
      margin-top: 60px;
      row-gap: 25px;
    }
  }
  @media (max-width: ${breakpoints.screenLg}) {
    min-width: unset;
    width: 100%;
    height: 100%;
    background-color: var(--black);
    padding: 60px 24px;
    ul {
      overflow-y: auto;
      row-gap: 40px;
      height: 100%;
      padding-bottom: 40px;
    }
  }
`

const StyledMenuItem = styled.li`
  ${fontSize(22, 300, 22, 4)};
  cursor: pointer;
  transition: padding 300ms;
  &:hover {
    padding-left: 10px;
  }
  > ${StyledButton} {
    padding-left: 0;
    padding-right: 0;
    justify-content: flex-start;
  }
`

const StyledMenu = styled.div`
  height: var(--header-height);
  display: flex;
  column-gap: 40px;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  min-width: 170px;
  transition: min-width var(--menu-transition-duration);
  .notification {
    margin-left: auto;
    @media (max-width: ${breakpoints.screenMd}) {
      display: none;
    }
  }
  .toggle-menu,
  .notification,
  .user-avatar {
    position: relative;
    z-index: 700;
    opacity: 0;
    transform: scale(0.7);
    animation: fade-in-scale-up 600ms forwards ease-in-out;
    animation-delay: var(--delay-appereance-1);
  }
  .toggle-menu {
    height: 22px;
    width: 27px;
    position: relative;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;
    span {
      background: var(--white);
      display: block;
      height: 1px;
      opacity: 1;
      position: absolute;
      transform: rotate(0deg);
      transition: 300ms ease-in-out;
      width: 100%;
      &:first-child {
        top: 3px;
      }
      &:nth-child(2) {
        height: 1px;
        top: 8.5px;
      }
      &:nth-child(3) {
        height: 1px;
        top: 15px;
        width: 75%;
      }
      @media (min-width: ${breakpoints.screenLg}) {
        right: 0;
      }
      @media (max-width: ${breakpoints.screenLg}) {
        left: 0;
      }
    }
    @media (min-width: ${breakpoints.screenLg}) {
      &:hover {
        span {
          &:nth-child(3) {
            width: 100%;
          }
        }
      }
    }
  }
  &.active {
    @media (min-width: ${breakpoints.screenLg}) {
      min-width: 575px;
    }
    .toggle-menu {
      span {
        &:first-child {
          top: 8.5px;
          transform: rotate(135deg);
        }
        &:nth-child(2) {
          opacity: 0;
        }
        &:nth-child(3) {
          top: 8.5px;
          transform: rotate(-135deg);
          width: 100%;
        }
      }
    }
    ${StyledMenuList} {
      transform: translateX(0);
    }
  }
  @media (max-width: ${breakpoints.screenLg}) {
    width: 100%;
    .user-avatar {
      z-index: 1000;
    }
  }
  @media (max-width: ${breakpoints.screenMd}) {
    .user-avatar {
      margin-left: auto;
    }
  }
`

export { StyledMenu, StyledMenuList, StyledMenuItem }
