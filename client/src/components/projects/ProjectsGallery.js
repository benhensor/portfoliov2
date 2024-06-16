import React, { useState } from 'react';
import styled from 'styled-components';
import { projects } from '../../data';
import Project from './Project';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import BackgroundWord from '../text/BackgroundWord';

export default function ProjectsGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const gapWidth = 500; // Gap width in pixels

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : projects.length - 1));
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex < projects.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <ProjectGallery>
      <InnerContainer>
        <Chevron
          direction='left' 
          onClick={handlePrevClick}
        >
          <FaChevronLeft />
        </Chevron>
        <GalleryTrackContainer>
            <GalleryTrack style={{ transform: `translateX(calc(-${activeIndex} * (100% + ${gapWidth}px)))` }}>
              {projects.map((project, index) => (
                <ProjectWrapper
                  key={project.key}
                  $isActive={activeIndex === index}
                  style={{
                    marginRight: `${gapWidth}px`,
                  }}
                >
                  <Project project={project} />
                </ProjectWrapper>
              ))}
          </GalleryTrack>
        </GalleryTrackContainer>
        <Chevron
          direction='right'
          onClick={handleNextClick}
        >
          <FaChevronRight />
        </Chevron>
      </InnerContainer>
      <Dots>
        
        {projects.map((project, index) => (
          <Dot
            key={project.key}
            $isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        ))}
        
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
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const Chevron = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ direction }) => (direction === 'left' ? 'left: 1.6rem;' : 'right: 1.6rem;')}
  width: clamp(3rem, 5vw, 4rem);
  height: clamp(3rem, 5vw, 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border: none;
  border-radius: 50%;
  background: #fff;
  color: var(--orange);
  padding: 1rem;
  cursor: pointer;
  transition: all 0.12s ease;
  z-index: 10;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 130%;
    height: 130%;
    border: 3px solid var(--orange);
    padding: 1rem;
    border-radius: 50%;
    transition: all 0.12s ease;
  }
  &:hover {
    color: #fff;
    background-color: var(--orange);
    &::before {
      border-color: #fff;
    }
  }
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
  list-style: none;
  transition: transform 0.5s ease;
`;

const ProjectWrapper = styled.div`
  min-width: 100%;
  transition: opacity .75s ease;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
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
  border: 1px solid var(--blue);
  border-radius: 50%;
  background: ${({ $isActive }) => ($isActive ? 'var(--blue)' : 'transparent')};
  cursor: pointer;
  transition: all 0.12s ease;
  &:hover {
    background: var(--ltBlue);
    transform: scale(1.2);
  }
`;
