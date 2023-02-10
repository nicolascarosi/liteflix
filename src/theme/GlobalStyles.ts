import { createGlobalStyle } from 'styled-components'
import { generateTheme } from './generate-theme'
import { fontSize } from 'utils'
import { ResetStyles } from './ResetStyles'
import { AnimationStyles } from './AnimationStyles'
import { breakpoints } from 'theme'

const GlobalStyles = createGlobalStyle`

    ${ResetStyles}
    ${AnimationStyles}
    :root{
        --primary-font: "Bebas Neue", "Helvetica Neue", helvetica, arial, sans-serif;
        --header-height: 104px;
        --menu-transition-duration: 600ms;
        --backdrop-transition-duration: 600ms;
        ${generateTheme()};
        @media (max-width: ${breakpoints.screenLg}) {
            --header-height: 76px;   
        }
    }

    html, body {
        font-family: var(--primary-font);
        font-size: 16px;
        overflow: initial;
        height: 100%;
        background-color: var(--black);
        color: var(--white);
    }

    .custom-input {
        ${fontSize(16, 300, 19, 4)};
        color: var(--white);
        padding: 8px 16px;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid var(--white);
        text-align: center;
        &::placeholder {
            color: var(--white);
        }
    }
 `

export default GlobalStyles
