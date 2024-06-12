import React from 'react';
import styled from 'styled-components';
import ProjectTechIcon from './ProjectTechIcon';

export default function Project({ project }) {
  const { title, description, techStack, live, code } = project;

  return (
    <ProjectContainer $images={project.images}>
      <ProjectContent>
        <h3>{title}</h3>
        <p>{description}</p>
        <TechWrapper>
          {techStack.map((tech, idx) => (
            <ProjectTechIcon key={idx} icon={tech} />
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

const ProjectContainer = styled.div`
  background: var(--background-card);
  width: 100%;
  height: 50rem;
  border-radius: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  h3 {
    font-size: 2.5rem;
    color: var(--ltOrange);
  }
  p {
    font-size: clamp(1.2rem, 5vw, 2rem);
  }
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
  overflow: hidden;
  gap: 2rem;
  z-index: 1;
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
