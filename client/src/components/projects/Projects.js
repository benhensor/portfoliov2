import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { motion, useTransform, useScroll } from 'framer-motion'
import ProjectPanel from './ProjectPanel'
import { projects } from '../../data'

export default function Projects() {
	const projectsRef = useRef(null)
	const { scrollYProgress } = useScroll({ domTarget: projectsRef })

	const [activeProject, setActiveProject] = useState(0)

	const toggleProject = (index) => {
		if (activeProject !== index) {
			setActiveProject(index)
		}
	}

	const top = useTransform(
		scrollYProgress,
		[0.4, 0.6, 0.7, 0.8],
		['-200%', '0%', '0%', '100%']
	)
	const opacity = useTransform(
		scrollYProgress,
		[0.4, 0.6, 0.7, 0.8],
		['0', '1', '1', '0']
	)

	return (
		<ProjectsSection
			id="projects"
			ref={projectsRef}
			style={{ top: top, opacity: opacity }}
		>
			<ProjectsContent>
				<ProjectGallery>
					{projects.map((project, index) => (
						<ProjectPanel
							activeProject={activeProject}
							index={index}
							toggleProject={toggleProject}
							key={project.key}
							title={project.title}
							description={project.description}
							image={project.image}
							live={project.live}
							code={project.code}
							onClick={() => toggleProject(index)}
						/>
					))}
				</ProjectGallery>
			</ProjectsContent>
		</ProjectsSection>
	)
}

const ProjectsSection = styled(motion.section)`
	position: fixed;
	width: 100%;
	height: 100vh;
	scroll-snap-align: start;
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

const ProjectsContent = styled.div`
	position: relative;
	max-width: 1000px;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 2px solid var(--accent-color);
	padding-top: 9.6rem;
`

const ProjectGallery = styled.div`
	position: absolute;
	top: 15%;
	display: flex;
	align-items: center;
	width: 100%;
	height: 40rem;
	gap: 1rem;
	background-color: transparent;
	border-radius: calc((0.25rem * 2) + (0.25rem * 2));
	padding: 1rem;
	@media screen and (max-width: 999px) {
		flex-direction: column;
		height: 100%;
	}
	ProjectGallery * {
		margin: 0;
	}
`
