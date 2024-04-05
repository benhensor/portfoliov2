import React, { forwardRef, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useInView } from 'framer-motion'
import { Page } from '../styles/GlobalStyles'

const Projects = forwardRef((props, ref) => {

  const { setActiveLink } = props
  const projectsRef = useRef(null)
  const isInView = useInView(projectsRef, { amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      setActiveLink('projects')
    }
  }, [isInView, setActiveLink])

  return (
    <Page ref={ref}>
      <ProjectsContent
        ref={projectsRef}
      >
        <h1>Projects</h1>
      </ProjectsContent>
    </Page>
  )
})

export default Projects

const ProjectsContent = styled(motion.div)`
  display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
  width: 100%;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`