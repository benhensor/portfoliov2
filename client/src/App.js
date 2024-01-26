import React from 'react'
import styled from 'styled-components'
import Header from './components/header/Header'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import VertSpace from './components/VertSpace'
import Cat from './components/cat/Cat'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin: 60em auto;
`

function App() {    

    return (
        <Container>
            <Header />
            <Main>
                <Skills />
                <Projects />
                <About />
                <Contact />
                <Cat />
                <VertSpace />
            </Main>
        </Container>
    )
}

export default App;
