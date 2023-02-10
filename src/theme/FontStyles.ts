import PoppinsBold from '../assets/fonts/BebasNeue-Bold.otf'
import BebasNeueRegular from '../assets/fonts/BebasNeue-Regular.otf'
import BebasNeueLight from '../assets/fonts/BebasNeue-Light.otf'
import { createGlobalStyle } from 'styled-components'

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Bebas Neue';
        src: url(${BebasNeueLight}) format('opentype');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Bebas Neue';
        src: url(${BebasNeueRegular}) format('opentype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Bebas Neue';
        src: url(${PoppinsBold}) format('opentype');
        font-weight: 700;
        font-style: normal;
    }
`

export { FontStyles }
