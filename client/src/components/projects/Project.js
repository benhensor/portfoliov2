import React from 'react';
import styled from 'styled-components';
import TechCard from './TechCard';
import NavIcon1 from '../../icons/NavIcon1';
import NavIcon4 from '../../icons/NavIcon4';

export default function Project({ project }) {

  const { title, image, description, techStack, live, code } = project;

  return (
    <ProjectContainer $image={image}>
      <ProjectContent>
        
        <Title>{title}</Title>
        <Description>{description}</Description>
        <TechWrapper>
          {techStack.map((tech, idx) => (
            <TechCard key={idx} tech={tech} />
          ))}
        </TechWrapper>
        <Links>
          <a href={code} rel="noreferrer" target="_blank"><NavIcon1 /></a>
          <a href={live} rel="noreferrer" target="_blank"><NavIcon4 /></a>
        </Links>
      </ProjectContent>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.li`
  background: ${({ $image }) => `url(${$image})`};
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 50rem;
  border-radius: 1em;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

// const BackgroundImage = styled.img`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   border-radius: 1em;
//   z-index: -1;
// `

const ProjectContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  padding: 15% 25%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 1em;
  gap: 2rem;
  z-index: 2;
`

const Title = styled.h3`
  font-size: clamp(2rem, 5vw, 3rem);
  color: var(--ltOrange);
`

const Description = styled.p`
  font-size: clamp(1.2rem, 3vw, 2rem);
`

const TechWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 5em;
  a {
		background: transparent;
		display: inline-flex;
		border-radius: 25%;
		align-items: center;
		justify-content: center;
		line-height: 1;
		border: 1px solid rgba(255, 255, 255, 0.5);
		position: relative; // Added to ensure ::before works correctly
		&::before {
			content: '';
			width: 2.5em;
			height: 2.5em;
			position: absolute;
			background-color: var(--orange);
			border-radius: 25%;
			transform: scale(0);
			border: 1px solid rgba(255, 255, 255, 0.5);
			transition: 0.1s ease-in-out;
		}
		&:hover::before {
			transform: scale(1);
			color: #333;
		}
		img {
			width: 1.5em;
			z-index: 1;
			transition: 0.1s ease-in-out;
		}
		&:hover {
			svg {
				filter: brightness(0) saturate(100%) invert(0%) sepia(7%)
					saturate(98%) hue-rotate(346deg) brightness(95%)
					contrast(86%);
			}
		}
	}
`;
