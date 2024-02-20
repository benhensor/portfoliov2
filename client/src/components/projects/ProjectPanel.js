import React from "react";
import styled from "styled-components";

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

    const isOpen = activeProject === index;

	return (
		<ProjectContainer $isOpen={isOpen}>
			<ProjectTriggerContainer>
				<ProjectTrigger
					aria-controls="project-content"
					aria-expanded={isOpen}
					onClick={() => toggleProject(index)}
				>
					<ProjectTitle>{title}</ProjectTitle>
					{/* icon here */}
				</ProjectTrigger>
			</ProjectTriggerContainer>
			<ProjectContent
				id="project-content"
				aria-labelledby="project-title"
				aria-hidden={!isOpen}
				role="region"
			>
				<p>{description}</p>
				<ProjectImage src={image} alt={title} />
				<a href={live} target="_blank" rel="noreferrer">
					Live
				</a>
				<a href={code} target="_blank" rel="noreferrer">
					Code
				</a>
			</ProjectContent>
		</ProjectContainer>
	);
}

// image
const ProjectImage = styled.img`
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -1;
	transition: filter 500ms;
`;

// content
const ProjectContent = styled.div`
	height: 100%;
	width: 100%;
    transition: flex-basis 500ms, flex-grow 500ms;

	> p {
		transform: translateY(2rem);
		opacity: 0;
		margin-left: calc(3rem + 1rem);
	}
`;

// panel
const ProjectContainer = styled.div`
	position: relative;
	height: 100%;
	isolation: isolate;
	flex-basis: ${(props) =>
		props.isOpen
			? "clamp(15rem, 40vh, 20rem)"
			: "calc((0.25rem * 2) + 3rem)"};
	max-width: ${(props) => (props.isOpen ? "none" : "100%")};
	overflow: hidden;
	padding: 0.75rem;
	padding-right: calc(-0.75rem * 4);
	border-radius: calc((0.25rem * 2) + (0.25rem * 2));

	@media (prefers-reduced-motion: no-preference) {
		& {
			transition: flex-basis 500ms, flex-grow 500ms;
		}
	}

	&:has([aria-expanded="true"]) {
		flex-basis: clamp(15rem, 40vh, 20rem);
		flex-grow: 1;
		${ProjectImage} {
			filter: brightness(0.5);
		}
        ${ProjectContent} > p {
            transform: translateY(0);
            opacity: 1;
            transition: transform 500ms, opacity 500ms;
        }
	}

	&:focus {
		outline: 3px solid #ff0ff0;
		outline-offset: 4px;
	}
`;

const ProjectTriggerContainer = styled.h2`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

`

// trigger
const ProjectTrigger = styled.button`
	display: flex;
    justify-content: center;
	align-items: center;
    width: 100%;
    height: 100%;
	gap: 1rem;
	background: transparent;
	border: 0;
	padding: 0;
`;

// title
const ProjectTitle = styled.span`
	font-size: 1.5rem;
	font-weight: 700;
	position: relative;
	isolation: isolate;
	display: grid;
	align-items: center;

	@media (max-width: 44.999em) {
		&::after {
			content: "";
			position: absolute;
			left: calc(1rem + (3rem * -1));
			width: calc(100% + (3rem * 2));
			height: 3rem;
			background: hsl(0 0% 0% / 0.5);
			z-index: -1;
			border-radius: 100vw;
		}
	}
`;