import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export default function Project({ index, project }) {

  const { key, title, images, description, techStack, live, code } = project
 
  return (
    <ProjectContainer
      style={{
        backgroundImage: `url(${images[0]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      animate={{ scale: index === key ? 0.95 : 0.85 }}
    >

    </ProjectContainer>
  );
}

const ProjectContainer = styled(motion.div)`
  aspect-ratio: video;
  width: 100%;
  height: 40rem;
  border-radius: 1em;
  display: flex;
  object-fit: cover;
  flex-shrink: 0;
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