import React, { forwardRef, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Page } from '../styles/GlobalStyles'

import { projects } from '../data'

const Projects = forwardRef((props, ref) => {

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

  const contentVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
        duration: 0.75,
				staggerChildren: 3,
			},
		},
	}

  const cycleImages = (images) => {
    let i = 0
    setInterval(() => {
      i = i === images.length - 1 ? 0 : i + 1
    }, 3000)

  }

  return (
    <Page ref={ref}>
      <Content 
        ref={projectsRef}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={contentVariants}
      >

        <BGWord>
          PROJECTS
        </BGWord>

        <ProjectsGrid>
          {projects.map((project, index) => (
            <motion.img
              key={index}
              src={cycleImages(project.image)}
              alt={project.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </ProjectsGrid>

      </Content>
    </Page>
  )
})

export default Projects

const Content = styled(motion.div)`
  display: flex;
	justify-content: center;
	align-items: flex-end;
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
		width: 100%;
		text-align: center;
	}
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  width: 100%;
  gap: 5rem;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    outline: 1px solid var(--orange);
  }
`