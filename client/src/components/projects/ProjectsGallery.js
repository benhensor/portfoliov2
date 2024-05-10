import React, { useRef } from 'react'
import styled from 'styled-components'
import Project from './Project'
import { projects } from '../../data'

export default function ProjectsGallery() {



  const galleryRef = useRef(null)

  return (
    <GalleryContainer ref={galleryRef}>
      {projects.map((project, index) => (
        <Project key={index} project={project} />
      ))}
    </GalleryContainer>
  )
}

const GalleryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2em;

  @media screen and (max-width: 999px) {
 
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1em;
  }

  @media screen and (max-width: 480px) {
    
  }
`