import { createGlobalStyle } from 'styled-components';

import { media } from './media';

const GlobalStyle = createGlobalStyle`
    :root {
        // mobile size (default)
        // colors
        --white: hsl(0, 0%, 100%);
        --black: hsl(0, 0%, 0%);
        --gray-96: hsl(0, 0%, 96%);
        --gray-93: hsl(0, 0%, 93%);
        --gray-67: hsl(0, 0%, 67%); // gray text

        // color vars
        --text-primary: var(--black);
        --text-secondary: var(--white);
        --bg-primary: var(--white);

        // font
        --font-sans-serif: 'Rubik', 'Roboto', -apple-system, system-ui, BlinkMacSystemFont, 'Helvetica Neue', 'Helvetica', sans-serif;
        --font-pixel: 'Cozette', -apple-system, system-ui, BlinkMacSystemFont, 'Helvetica Neue', 'Helvetica', sans-serif; // not using!
        --basic-font-weight: 500; // 500 for Rubik
        --basic-font-size: 16px; // 16 for Rubik

        // spacing
        --layout-padding: .5rem;
        --basic-spacing: .5rem;

        // other
        --basic-rounded: .5rem;
        --full-rounded: 10000px;
        
        ${media.lg} {
            // desktop size
            
            --basic-font-size: 18px;
        }
    }

    [data-theme='dark'] {
        // dark theme style vars
    }

    *,
    *:before,
    *:after {
        box-sizing: inherit;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        overscroll-behavior-x: none;
        font-family: var(--font-sans-serif);
        font-size: var(--basic-font-size);
        font-weight: var(--basic-font-weight);
        background-color: var(--bg-primary);
        color: var(--text-primary);
    }

    a {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0); // outline light by press on mobile
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }

    // link custom fonts locally
    @font-face {
        font-family: "Cozette";
        src: url("/assets/fonts/Cozette/CozetteVector.ttf");
    }
`;

export default GlobalStyle;
