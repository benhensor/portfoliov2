import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export default function ProjectPanel({
	activeProject,
	index,
	toggleProject,
	title,
	description,
	image,
	live,
	code,
}) {
	const isOpen = activeProject === index

	return (
		<ProjectContainer $isOpen={isOpen}>
			<ProjectTrigger
				aria-controls="project-content"
				aria-expanded={isOpen}
				onClick={() => toggleProject(index)}
			>
				<ProjectImage src={image} alt={title} isOpen={isOpen} />
				
				<ProjectContent
					aria-labelledby="project-title"
					aria-hidden={!isOpen}
					role="region"
					$isOpen={isOpen}
				>
					<ProjectTitle $isOpen={isOpen}>{title}</ProjectTitle>
					<ProjectDescription $isOpen={isOpen}>
						{description}
					</ProjectDescription>
					<ProjectLinks $isOpen={isOpen}>
						<a href={live} target="_blank" rel="noreferrer">
							Live
						</a>
						<a href={code} target="_blank" rel="noreferrer">
							Code
						</a>
					</ProjectLinks>
				</ProjectContent>
			</ProjectTrigger>
		</ProjectContainer>
	)
}

// image
const ProjectImage = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
	opacity: 1;
	z-index: -1;
	filter: brightness(0.5);
	transition: filter 500ms;
`

// content
const ProjectContent = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	height: 80%;
	width: 80%;
	transition: all flex-basis 1500ms, flex-grow 500ms;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 1rem;
`

// panel
const ProjectContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	isolation: isolate;
	flex-basis: ${(props) =>
		props.isOpen
			? 'clamp(15rem, 40vh, 20rem)'
			: 'calc((0.25rem * 2) + 5rem)'};
	overflow: hidden;
	padding: 0.75rem;
	padding-right: calc(-0.75rem * 4);
	border-radius: calc((0.25rem) + (0.25rem));

	@media (prefers-reduced-motion: no-preference) {
		& {
			transition: flex-basis 500ms, flex-grow 500ms;
		}
	}

	&:has([aria-expanded='true']) {
		flex-basis: clamp(15rem, 40vh, 20rem);
		flex-grow: 1;
		${ProjectImage} {
			filter: brightness(0.4);
		}
		${ProjectContent} > p {
			transform: translateY(0);
			opacity: 1;
			transition: transform 500ms, opacity 500ms;
		}
	}

	&:focus-within {
		outline: 1px solid var(--button-inactive);
		outline-offset: 4px;
		transition: outline 500ms;
	}
`

// trigger
const ProjectTrigger = styled.button`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	gap: 1rem;
	background: transparent;
	border: 0;
	padding: 0;
`

// title
const ProjectTitle = styled(motion.span)`

	color: var(--ltOrange);
	font-size: var(--text-xxl);
	font-weight: 700;
	position: absolute;
	top: 0;
	opacity: ${(props) => (props.$isOpen ? '1' : '0')};
	transition: opacity 500ms 250ms;

	@media (max-width: 44.999em) {
		&::after {
			content: '';
			position: absolute;
			top: 0;
			left: calc(1rem + (3rem * -1));
			width: calc(100% + (3rem * 2));
			height: 3rem;
			z-index: -1;
			border-radius: 100vw;
		}
	}
`

const ProjectDescription = styled(motion.p)`
	position: absolute;
	bottom: 10%;
	width: 100%;
	transform: translateY(4rem);
	text-align: left;
	opacity: 0;
	transition: transform 500ms 500ms, opacity 500ms 500ms;
	&:has([aria-hidden='true']) {
		transform: translateY(0);
		opacity: 1;
	}
	&:has([aria-hidden='false']) {
		display: none;
	}
`

const ProjectLinks = styled(motion.div)`
	position: absolute;
	bottom: 0;
	width: 100%;
	display: flex;
	gap: 2rem;
	transition: transform 500ms 500ms, opacity 500ms 500ms;
	&:has([aria-hidden='true']) {
		transform: translateY(0);
		opacity: 1;
	}
	&:has([aria-hidden='false']) {
		display: none;
	}
`
