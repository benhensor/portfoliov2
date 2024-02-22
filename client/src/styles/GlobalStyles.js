import { createGlobalStyle } from 'styled-components';
import '../assets/fonts/fonts.css'

const GlobalStyles = createGlobalStyle`
    :root {
        font-size: 62.5%;
        ::-webkit-scrollbar {display:none;}

        /* Global Colours */
        --accent-color: #de9e36;
        --highlight-color: #fafbdf;
        --border-color: #00c5c5;
        --aux-highlight-color: #d8fdfe;
        --wave-highlight-color: #0eebe7;
        --background-color: linear-gradient(180deg, #141717 0%, #1d1f20 100%);
        --card-background-color: linear-gradient(to bottom right, #2f3636, #171e1e);
        --background-static: #141717;

        /* Button Colors */
        --button-inactive: #006767;
        --button-hover: #de9e36;
        --button-active: #00c5c5;

        /* Text Colors */
        --text-color-lt: #eeeeee;
        --text-color-md: #cccccc;
        --text-color-dk: #323232;
        --text-color-soft: #8c8c8c;
        --copy-dkbg-color: #8d8d8d;

        /* Global Fonts */

        --font-centra: "Centra", sans-serif;
        --font-roboto: "Roboto", sans-serif;
        --font-poppins: "Poppins", sans-serif;

        /* Global Font Sizes */

        font-size: 62.5%;

        --text-xxs: 0.8rem;
        --text-xs: 1rem;
        --text-s: 1.2rem;
        --text-r: 1.6rem;
        --text-l: 1.8rem;
        --text-xl: 2.2rem;
        --text-xxl: 2.8rem;
        --text-xxxl: 3.2rem;
        --text-xxxxl: 4rem;
        --text-xxxxxl: 6rem;
        --text-xxxxxxl: 8rem;
        --text-xxxxxxxl: 10rem;

        /* Global Margins */

        --m-desktop: 0 2em;
        --m-mobile: 0 1em;

        /* Animation Settings */

        --blurA: blur(20px);
        --blurB: blur(10px);
        --blurC: blur(10px);
        --blurD: blur(20px);
    }

    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        min-width: 0;
    }

    html {
        user-select: none;
        -webkit-tap-highlight-color: transparent;
        @media screen and (max-width: 400px) {
            font-size: 13px;
        }
    }

    body {
        font-family: 'Centra', sans-serif;
        font-size: 1.6rem;
        line-height: 1.6;
        color: #fff;
        justify-content: center;
        background-color: var(--background-static);
        overflow-x: hidden;
        width: 100vw;
        min-height: 2400vh;
    }

    main {
        background: #111;
        margin: 0 auto;
        position: relative;
    }

    p {
        font-size: 1.1em;
        line-height: 27px;
        color: #fff;
    }

    img {
        max-width: 100%;
        display: block;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: #fff;
    }
`

export default GlobalStyles;