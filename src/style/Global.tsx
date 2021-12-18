// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit/dist/theme';
import { createGlobalStyle } from 'styled-components';
import { Colors, Fonts, Gradients, Shadows } from './FlokiStyle';


// const { isDark, toggleTheme } = useTheme()

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}




const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto Slab', sans-serif;
  }
  body {
  ${/* 

    height: 100%;
    margin: 0;
    background-attachment:fixed;
    background-image:
    linear-gradient(
      130deg,
      rgba(245,169,202,1) 0%,
      rgba(248,194,217,1) 44%,
      rgba(252,226,237,1) 100%
    );
  */ null}

    ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
    input.sc-jrAGrp.lewRFV {
      background-color: white;
    }
  }
`

export default GlobalStyle
