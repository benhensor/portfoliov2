import React from 'react';
import styled from 'styled-components';
import TechCard from './TechCard';

export default function Project({ project }) {

  const { title, image, description, techStack, live, code } = project;

  return (
    <ProjectContainer $images={project.images}>
      <BackgroundImage src={image} alt={title} />
      <ProjectContent>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <TechWrapper>
          {techStack.map((tech, idx) => (
            <TechCard key={idx} tech={tech} />
          ))}
        </TechWrapper>
        <Links>
          <a href={code} rel="noreferrer" target="_blank">CODE</a>
          <a href={live} rel="noreferrer" target="_blank">LIVE</a>
        </Links>
      </ProjectContent>
    </ProjectContainer>
  );
}

const ProjectContainer = styled.li`
  position: relative;
  width: 100%;
  height: 50rem;
  border-radius: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1em;
  z-index: -1;
`

const Title = styled.h3`
  font-size: 2.5rem;
  color: var(--ltOrange);
`

const Description = styled.p`
  font-size: clamp(1.2rem, 5vw, 2rem);
`

const ProjectContent = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: calc(100% - 6rem);
  height: calc(100% - 6rem);
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
  overflow: hidden;
  gap: 2rem;
  z-index: 2;
  @media only screen and (max-width: 768px) {
    width: calc(100% - 5rem);
    height: calc(100% - 5rem);
  }
`;

const TechWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  a {
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
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
