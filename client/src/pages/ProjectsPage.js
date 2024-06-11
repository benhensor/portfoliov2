import React, { forwardRef, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useInView, useAnimation } from 'framer-motion'
import ProjectsGallery from '../components/projects/ProjectsGallery'

const ProjectsPage = forwardRef((props, ref) => {

  const { setActiveLink } = props
  const projectsRef = useRef(null)
  const isInView = useInView(projectsRef, { amount: 0.5 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
      setActiveLink('projects')
    } else {
      controls.start('hidden')
      setActiveLink('')
    }
  }, [isInView, setActiveLink, controls])
  
  return (
    <ProjectsContainer ref={ref}>
      <ProjectsSection ref={projectsRef}>
        <Content >
          <BGWord>PROJECTS</BGWord>
          <ProjectsGallery />
        </Content>
      </ProjectsSection>
    </ProjectsContainer>
  )
})

export default ProjectsPage

const ProjectsContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

const ProjectsSection = styled.div`
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Content = styled(motion.div)`
  display: flex;
	justify-content: center;
	position: relative;
  width: 100%;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`

const BGWord = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
  transform: translate(-50%, -50%);
	font-size: clamp(4rem, 20vw, 15rem);
	font-weight: 700;
	color: var(--text-color-dk);
	z-index: -1;
	@media screen and (max-width: 768px) {
		text-align: center;
	}
`