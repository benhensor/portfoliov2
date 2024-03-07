import React from 'react'
import styled from 'styled-components'

export default function TechStackPage() {
  return (
    <TechStackContainer>Tech Stack</TechStackContainer>
  )
}

const TechStackContainer = styled.section`
  scroll-snap-align: start;
  scroll-snap-stop: always;
  outline: 2px solid red;
  width: 100%;
  max-width: 1000px;
  height: 100vh;
  padding-top: 10rem;
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