import React, { useState } from 'react'
import styled from 'styled-components'
import ProjectImage from './ProjectImage'

export default function Project({ project }) {

  const { title, images, description, techStack, live, code } = project

 
  return (
    <ProjectContainer>
      <ProjectImage title={title} images={images} />

    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  width: 30rem;
  height: 30rem;
  border-radius: 1em;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  @media screen and (max-width: 999px) {
    width: 18rem;
    height: 18rem;
  }

  @media screen and (max-width: 768px) {
    width: 30rem;
    height: 7rem;
  }

  @media screen and (max-width: 480px) {
    width: 30rem;
    height: 5rem;
  }
`