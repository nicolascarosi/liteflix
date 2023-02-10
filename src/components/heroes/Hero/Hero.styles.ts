import styled from 'styled-components'
import { breakpoints } from 'theme'
import { fontSize } from 'utils'
import { IStyledHero } from './Hero.interface'

const StyledHero = styled.section<IStyledHero>`
  height: 100%;
  width: 100%;
  padding: 150px 0 86px;
  position: relative;
  min-height: 930px;
  display: flex;
  overflow: hidden;
  @media (max-width: ${breakpoints.screenXl}) {
    padding: 130px 0 70px;
  }
  @media (max-width: ${breakpoints.screenLg}) {
    padding: 274px 0 70px;
  }
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: url(${({ backgroundImage }) => backgroundImage});
    background-repeat: no-repeat;
    background-size: cover;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    animation: fade-in-cover 6000ms forwards ease-in-out;
    @media (max-width: ${breakpoints.screenLg}) {
      max-height: 620px;
      background-image: linear-gradient(
          0deg,
          rgba(36, 36, 36, 1) 0%,
          rgba(36, 36, 36, 0) 30%
        ),
        url(${({ backgroundImage }) => backgroundImage});
      background-position: center;
    }
  }
  &::after {
    content: '';
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.6), transparent 85%);
    opacity: 1;
    position: absolute;
    right: 60%;
    top: 0;
    bottom: 0;
    left: 0;
    transition: opacity 0.5s;
    @media (max-width: ${breakpoints.screenLg}) {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.6), transparent 40%);
      right: 0;
      max-height: 620px;
    }
  }
`

const StyledHeroContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  column-gap: 50px;
  place-items: end start;
  @media (min-width: ${breakpoints.screenLg}) {
    grid-template-columns: 1fr 220px;
  }
  .details {
    padding-bottom: 72px;
    position: relative;
    z-index: 10;
    @media (max-width: ${breakpoints.screenLg}) {
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 64px;
      padding-left: 8px;
      padding-right: 8px;
    }
    p {
      ${fontSize(20, 300, 20, 4)};
      margin-bottom: 24px;
      transform: translateY(-20px);
      opacity: 0;
      animation: fade-in-slide-down 600ms forwards ease-in-out;
      animation-delay: var(--delay-appereance-1);
      strong {
        font-weight: 400;
      }
    }
    .title {
      overflow: hidden;
      margin-bottom: 32px;
      h1 {
        ${fontSize(100, 700, 100, 8)};
        color: var(--primary);
        transform: translateY(100%);
        animation: slide-up 1200ms forwards;
        animation-delay: var(--delay-appereance-2);
        @media (max-width: ${breakpoints.screenXl}) {
          ${fontSize(80, 700, 80, 6)};
        }
        @media (max-width: ${breakpoints.screenLg}) {
          ${fontSize(76, 700, 78)};
        }
      }
    }
    .actions {
      display: flex;
      column-gap: 24px;
      @media (max-width: ${breakpoints.screenLg}) {
        flex-direction: column;
        row-gap: 16px;
      }
    }
  }
  .featured-items {
    align-self: flex-start;
    width: 100%;
  }
`

export { StyledHero, StyledHeroContainer }
