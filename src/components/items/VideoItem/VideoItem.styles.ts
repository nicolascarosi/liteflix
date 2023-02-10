import { iconPlay, iconPlayHover } from 'assets'
import styled from 'styled-components'
import { breakpoints } from 'theme'
import { fontSize, Icon } from 'utils'
import { IStyledVideoItem } from './VideoItem.interface'

const StyledVideoItem = styled.div<IStyledVideoItem>`
  border-radius: 4px;
  background-image: url(${({ backdrop_path }) => backdrop_path});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  aspect-ratio: 15 / 10;
  overflow: hidden;
  position: relative;
  transform: translateY(20px);
  opacity: 0;
  animation: fade-in-slide-up 600ms forwards ease-in-out;
  animation-delay: ${({ index }) =>
    `calc(var(--delay-appereance-1) * ${index} )`};
  .body {
    display: flex;
    padding: 16px;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    z-index: 5;
    height: 100%;
    opacity: 1;
    transition: opacity 500ms;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 22%,
      #000000 122%
    );
    @media (max-width: ${breakpoints.screenLg}) {
      padding: 32px 16px;
    }
    h2 {
      ${fontSize(16, 300, 16, 4)};
      text-align: center;
      @media (max-width: ${breakpoints.screenLg}) {
        ${fontSize(26, 300, 26, 4)};
      }
      @media (max-width: ${breakpoints.screenMd}) {
        ${fontSize(16, 300, 16, 4)};
      }
    }
    &::after {
      content: '';
      background-image: url(${iconPlay});
      background-size: 100%;
      background-repeat: no-repeat;
      width: 40px;
      height: 40px;
      position: absolute;
      z-index: 10;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      @media (max-width: ${breakpoints.screenLg}) {
        width: 64px;
        height: 64px;
      }
      @media (max-width: ${breakpoints.screenLg}) {
        width: 48px;
        height: 48px;
      }
    }
  }
  .overlay {
    padding: 16px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 500ms;
    background-color: rgba(36, 36, 36, 0.7);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    &__title {
      display: flex;
      align-items: center;
      column-gap: 12px;
      margin-bottom: 20px;
      ${fontSize(16, 300, 16, 4)};
      ${Icon} {
        cursor: pointer;
        &:hover {
          &::after {
            background-image: url(${iconPlayHover});
          }
        }
      }
    }
    .movie-details {
      display: flex;
      justify-content: space-between;
      ${fontSize(14, 300, 12, 2)};
      &__vote-average {
        display: flex;
        align-items: center;
        column-gap: 6px;
      }
      &__release-year {
        display: flex;
        align-items: center;
      }
    }
  }
  &:hover {
    .body {
      opacity: 0;
    }
    .overlay {
      opacity: 1;
      z-index: 20;
    }
  }
`

export { StyledVideoItem }
