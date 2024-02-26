import React from 'react'
import styled from 'styled-components'
import Header from './components/header/Header'
import TechStack from './components/tech/TechStack'
import Projects from './components/projects/Projects'
import About from './components/about/About'
import Contact from './components/contact/Contact'

export default function App() {
	return (
		<Container>
			<Header />
			<Main>
				<TechStack />
                <About />
				<Projects />
				<Contact />
			</Main>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 1200vh;
	scroll-snap-type: y mandatory;
`

const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	background: #111;
	position: relative;
`
