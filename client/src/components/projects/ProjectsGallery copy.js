import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { projects } from '../../data';
import Project from './Project';

export default function ProjectsGallery() {
  const galleryRef = useRef(null);
  const [projectIndex, setProjectIndex] = useState(0);  
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-key'));
          if (entry.isIntersecting) {
            console.log(index);
            setProjectIndex(index);
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        root: galleryRef.current,
        threshold: 0.8,
      }
    );
  
    const currentRefs = projectRefs.current; 
    currentRefs.forEach((project) => {
      if (project) observer.observe(project);
    });
  
    return () => {
      currentRefs.forEach((project) => {
        if (project) observer.unobserve(project);
      });
    };
  }, []);

  const scrollToProject = (key) => {
    console.log(key);
    const index = projects.findIndex((project) => project.key === key);
    if (projectRefs.current[index]) {
      projectRefs.current[index].scrollIntoView({ behavior: 'smooth', inline: 'start' });
      setProjectIndex(key);
    }
  };

  const Dots = () => {
    return (
      <DotsContainer>
        {projects.map((project) => (
          <Dot
            key={project.key}
            onClick={() => scrollToProject(project.key)}
            $isActive={projectIndex === project.key}
          />
        ))}
      </DotsContainer>
    );
  };

  return (
    <ProjectGallery ref={galleryRef}>
      <InnerContainer>
        {projects.map((project, index) => (
          <ProjectWrapper
            key={project.key}
            ref={(el) => (projectRefs.current[index] = el)}
            data-key={project.key}
          >
            <Project project={project} />
          </ProjectWrapper>
        ))}
      </InnerContainer>
      <Dots />
    </ProjectGallery>
  );
}

const ProjectGallery = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
	width: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 100%;
`;

const ProjectWrapper = styled.div`
  flex: 0 0 100%;
	height: 100%;
  scroll-snap-align: start;
  transition: all .5s ease-in-out;
  opacity: 0;
  &.visible {
    opacity: 1;
  }
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  gap: 1.6rem;
`;

const Dot = styled.button`
  width: clamp(1rem, 2vw, 2rem);
  height: clamp(1rem, 2vw, 2rem);
  border: none;
  border-radius: 50%;
  background: ${({ $isActive }) => ($isActive ? 'var(--blue)' : 'var(--ltBlue)')};
  cursor: pointer;
  transition: all 0.12s ease;
  &:hover {
    background: var(--blue);
    transform: scale(1.2);
  }
`;
