import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useMotionValue } from 'framer-motion'
import { projects } from '../../data'

const ONE_SECOND = 1000
const AUTO_DELAY = ONE_SECOND * 10
const DRAG_BUFFER = 50

const SPRING_OPTIONS = {
  type: 'spring',
  mass: 3,
  stiffness: 400,
  damping: 50,
}

export default function ProjectsGallery() {
  const galleryRef = useRef(null)
  const [projectIndex, setProjectIndex] = useState(0)

  const dragX = useMotionValue(0)

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get()

      if (x === 0) {
        setProjectIndex((prev) => {
          if (prev === projects.length - 1) {
            return 0;
          }
          return prev + 1;
        })
      }
    }, AUTO_DELAY)

    return () => clearInterval(intervalRef)
  }, [dragX])

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && projectIndex < projects.length - 1) {
      setProjectIndex((prev) => prev + 1);
    } else if (x >= DRAG_BUFFER && projectIndex > 0) {
      setProjectIndex((prev) => prev - 1);
    }
  };

  const MappedProjects = ({ projectIndex }) => {
    return (
      <>
        {projects.map((project, idx) => {
        return (
          <Project
            key={idx}
            animate={{
              scale: projectIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            $images={project.images}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </Project>
        );
      })}
      </>
    )
  }

  const Dots = ({ projectIndex, setProjectIndex }) => {
    return (
      <DotsContainer>
        {projects.map((_, index) => {
          return (
            <Dot
              key={index}
              onClick={() => setProjectIndex(index)}
              $isActive={projectIndex === index}
            ></Dot>
          )
        })}
      </DotsContainer>
    )
  }

  return (
    <ProjectGallery ref={galleryRef}>
      <InnerContainer
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${projectIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
      >
        <MappedProjects projectIndex={projectIndex} />
      </InnerContainer>
      <Dots projectIndex={projectIndex} setProjectIndex={setProjectIndex}/>
    </ProjectGallery>
  )
}

const ProjectGallery = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  /* @media screen and (max-width: 999px) {
 
  }

  @media screen and (max-width: 768px) {
  
  }

  @media screen and (max-width: 480px) {
    
  } */
`

const InnerContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  align-items: center;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`

const Project = styled(motion.div)`
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
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
`

const Dot = styled.button`
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 50%;
  background: ${({ $isActive }) => $isActive ? 'var(--orange)' : 'var(--ltOrange)'};
  cursor: pointer;
  &:hover {
    background: var(--orange);
  }
  @media only screen and (max-width: 768px) {
    width: 1.5rem;
    height: 1.5rem;
  }
  @media only screen and (max-width: 480px) {
    width: 1rem;
    height: 1rem;
  }
`