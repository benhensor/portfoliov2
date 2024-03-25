import React, { forwardRef } from 'react'
import styled from 'styled-components'
import { Page } from '../styles/GlobalStyles'

const HeroPage = forwardRef((props, ref) => {

	return (
    <Page>
      <HeroContent>
      </HeroContent>
    </Page>
	)
})

export default HeroPage

const HeroContent = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
`