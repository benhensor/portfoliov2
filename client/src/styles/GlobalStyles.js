import styled, { createGlobalStyle } from 'styled-components'
import '../assets/fonts/fonts.css'

const GlobalStyles = createGlobalStyle`
  :root {
    ::-webkit-scrollbar {display:none;}

    /* Global Colours */
    --orange: #de9e36;
    --ltOrange: #f9fad0;
    --blue: #00c5c5;
    --ltBlue: #d8fdfe;
    --error: #ff0000;
    --background-card: linear-gradient(to bottom right, #2f3636, #171e1e);
    --background-gradient: linear-gradient(180deg, #141717 0%, #1d1f20 100%);
    --background-static: #141717;

    /* Button Colors */
    --button-inactive: #006767;
    --button-hover: #de9e36;
    --button-active: #00c5c5;

    /* Animated Gradient Colors */
    --color-bg1: rgb(108, 0, 162);
    --color-bg2: rgb(0, 17, 82);
    --color1: 18, 113, 255;
    --color2: 221, 74, 255;
    --color3: 100, 220, 255;
    --color4: 200, 50, 50;
    --color5: 180, 180, 50;
    --color-interactive: 140, 100, 255;
    --circle-size: 80%;
    --blending: hard-light;


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
    content: none;
    ${'' /* outline: 1px solid red; */}
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
    // overflow-x: hidden;
    width: 100vw;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Centra', sans-serif;
    font-weight: 700;
    color: #fff;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.2;
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

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`

export const Page = styled.section`
	scroll-snap-align: start;
	scroll-snap-stop: always;
	width: 100%;
	max-width: 1000px;
	height: 100vh;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	@media screen and (max-width: 999px) {
		padding: var(--m-desktop);
	}
	@media screen and (max-width: 768px) {
		padding: var(--m-mobile);
	}
`

export default GlobalStyles
