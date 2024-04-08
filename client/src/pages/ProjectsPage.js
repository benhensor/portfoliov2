import React, { forwardRef, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Page } from '../styles/GlobalStyles'

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

      </Content>
    </Page>
  )
})

export default Projects

const Content = styled(motion.div)`
  display: flex;
	justify-content: space-between;
	align-items: center;
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