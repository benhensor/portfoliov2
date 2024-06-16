import React, { forwardRef, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useInView } from 'framer-motion'
import { useActiveLink } from '../context/useActiveNavLink'
import ProjectsGallery from '../components/projects/ProjectsGallery'

const ProjectsPage = forwardRef((props, ref) => {

  const { setActiveLink } = useActiveLink()
  const projectsRef = useRef(null)
  const isInView = useInView(projectsRef, { amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      setActiveLink('projects')
    } 
  }, [isInView, setActiveLink])
  
  return (
    <Projects ref={ref} id='projects'>
      <Content>
        <BGWord>PROJECTS</BGWord>
        <ProjectsSection ref={projectsRef}>
          <ProjectsGallery />
        </ProjectsSection>
      </Content>
    </Projects>
  )
})

export default ProjectsPage

const Projects = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
`

const Content = styled(motion.div)`
  width: 100%;
  overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
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

const ProjectsSection = styled.div`
	width: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
`