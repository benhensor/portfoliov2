import React, { useRef }  from 'react'
import styled from 'styled-components'
import HeroAnimation from '../components/heroPage/HeroAnimation'

export default function Hero({ scrolled }) {

    const heroRef = useRef(null)

	return (
		<HeroContainer ref={heroRef} $scrolled={scrolled}>
            <HeroContent>
                <HeroAnimation/>
            </HeroContent>
        </HeroContainer>
	)
}

const HeroContainer = styled.section`
  scroll-snap-align: start;
  scroll-snap-stop: always;
  outline: 2px solid red;
  width: 100vw;
  height: 100vh;
  margin: 4em auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: ${props => props.$scrolled ? 'fixed' : 'relative'};
  top: ${props => props.$scrolled ? '4em' : 'auto'};
  border-bottom: ${({ $scrolled }) => $scrolled ? '0.2em solid var(--blue)' : 'none'};
  @media screen and (max-width: 999px) {
		padding: var(--m-desktop);
	}
	@media screen and (max-width: 768px) {
		padding: var(--m-mobile);
	}
`

const HeroContent = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	
`