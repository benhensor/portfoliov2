import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import ProjectTechIcon from '../../icons/ProjectTechIcon'

export default function Project({ project, idx, springOptions, projectIndex }) {

  const { title, description, techStack, live, code } = project
 
  return (
    <ProjectContainer
      key={idx}
      animate={{
        scale: projectIndex === idx ? 0.95 : 0.85,
      }}
      transition={springOptions}
      $images={project.images}
    >
      <ProjectContent>
        <h3>{title}</h3>
        <p>{description}</p>
        <TechWrapper key={idx}>
        {techStack.map((tech, idx) => (
          <ProjectTechIcon key={idx} icon={tech} />
        ))}
        </TechWrapper>
        <Links>
          <a href={code} rel='noreferrer' target='_blank'>CODE</a>
          <a href={live} rel='noreferrer' target='_blank'>LIVE</a>
        </Links>
      </ProjectContent>
    </ProjectContainer>
  );
}

const ProjectContainer = styled(motion.div)`
  background-image: url(${({ $images }) => $images[0]});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 40rem;
  border-radius: 1em;
  display: flex;
  object-fit: cover;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  &::after {
    content: '';
    position: absolute;
    width: calc(100% - 1rem);
    height: calc(100% - 1rem);
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 0.7em;
  }
  h3 {
    font-size: 3rem;
    color: var(--ltOrange);
    z-index: 1;
    
  }
  p {
    font-size: clamp(1rem, 3vw, 1.5rem);
  }
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 50rem;
  }
`

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 1;
  @media only screen and (max-width: 480px) {
    padding: 2rem;
  }
`

const TechWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  > img {
    width: 4rem;
    height: 4rem;
  }
`

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  > a {
    width: 10rem;
    text-align: center;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: var(--orange);
    color: var(--ltOrange);
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 600;
    transition: background-color 0.3s ease;
    &:hover {
      background-color: var(--ltOrange);
      color: var(--orange);
    }
  }
`