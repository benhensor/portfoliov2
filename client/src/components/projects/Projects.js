import React, { useState } from 'react'
import styled from 'styled-components'
import ProjectPanel from './ProjectPanel'
import { projects } from '../../data'

 const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-inline: auto;
    background-color: #333;
`

const ProjectGallery = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    contain: content;
    max-width: 70rem;
    padding: 1rem;
    background-color: #000;
    border-radius: calc((0.25rem * 2) + (0.25rem * 2));

    /* demo only */
    margin: 10rem 0;
    
    @media (min-width: 45em) {
        flex-direction: row;
        height: 30rem;
    }
    ProjectGallery * {
        margin: 0;
    }
`

export default function Projects() {
    
    const [activeProject, setActiveProject] = useState(0)

    const toggleProject = (index) => {
        setActiveProject(activeProject === index ? null : index)
    }
    
    return (
        <Container>
            <ProjectGallery>
                {projects.map((project, index) => (
                    <ProjectPanel 
                        activeProject={activeProject}
                        index={index}
                        toggleProject={toggleProject}
                        key={project.key}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        live={project.live}
                        code={project.code}
                        onClick={() => toggleProject(index)}
                    />
                )
                )}
            </ProjectGallery>
        </Container>
    )
}