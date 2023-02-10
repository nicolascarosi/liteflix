import { css } from 'styled-components'

const AnimationStyles = css`
  :root {
    --delay-appereance-1: 500ms;
    --delay-appereance-2: 1000ms;
    --delay-appereance-3: 1500ms;
  }

  @keyframes slide-up {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes fade-in-cover {
    0% {
      opacity: 0;
      transform: scale(1.2) matrix(-1, 0, 0, 1, 0, 0);
    }
    20% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: scale(1) matrix(-1, 0, 0, 1, 0, 0);
    }
  }

  //Fade in with slide
  @keyframes fade-in-slide-down {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in-slide-up {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fade-in-slide-right {
    0% {
      opacity: 0;
      transform: translateX(-20px);
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fade-in-slide-up-button-play {
    0% {
      opacity: 0;
      transform: translate(-50%, calc(-50% + 20px));
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  //Fade in with scale
  @keyframes fade-in-scale-up {
    0% {
      opacity: 0;
      transform: scale(0.7);
    }
    70% {
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes width-animation {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  @keyframes btn-outline-animation {
    0% {
      box-shadow: 0 0 0 0 inset var(--btn-outline-border);
    }
    100% {
      box-shadow: 0 0 0 1px inset var(--btn-outline-border);
    }
  }
`

export { AnimationStyles }
