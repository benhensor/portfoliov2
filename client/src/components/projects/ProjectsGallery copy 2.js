import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { projects } from '../../data';
import Project from './Project';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function ProjectsGallery() {
  const galleryRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projects.length - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex < projects.length - 1 ? prevIndex + 1 : 0));
  };

  const calculateOpacity = (index) => {
    const offset = Math.abs(index - activeIndex);
    const maxOffset = Math.floor(projects.length / 2);
    return Math.max(0, 1 - offset / maxOffset);
  };

  return (
    <ProjectGallery ref={galleryRef}>
      <InnerContainer>
        <GalleryTrackContainer>
          <GalleryTrack>
            {projects.map((project, index) => (
              <ProjectWrapper
                key={project.key}
                style={{
                  opacity: calculateOpacity(index),
                  transform: `translateX(-${activeIndex * 100}%)`
                }}
              >
                <Project project={project} />
              </ProjectWrapper>
            ))}
          </GalleryTrack>
        </GalleryTrackContainer>
      </InnerContainer>
      <Dots>
        <Chevron onClick={handlePrevClick}>
          <FaChevronLeft />
        </Chevron>
        {projects.map((project, index) => (
          <Dot
            key={project.key}
            $isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
        <Chevron onClick={handleNextClick}>
          <FaChevronRight />
        </Chevron>
      </Dots>
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
  width: 100%;
  max-width: 1000px;
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const Chevron = styled.button`
  width: clamp(2rem, 5vw, 4rem);
  height: clamp(2rem, 5vw, 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: clamp(1rem, 2vw, 2rem);
  border: none;
  border-radius: 50%;
  background: var(--ltBlue);
  padding: 1rem;
  cursor: pointer;
  transition: all 0.12s ease;
`;

const GalleryTrackContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  width: 100%;
`;

const GalleryTrack = styled.ul`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
  transition: transform 0.5s ease;
`;

const ProjectWrapper = styled.div`
  min-width: 100%;
  transition: opacity 0.5s ease;
`;

const Dots = styled.div`
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