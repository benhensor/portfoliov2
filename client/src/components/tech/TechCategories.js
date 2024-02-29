import React, { useState } from 'react'
import styled from 'styled-components'
import TechCategory from './TechCategory'
import {
	backend,
	design,
	devops,
	frontend,
	languages,
	testing,
	tools,
} from '../../data'

export default function TechCategories({ scrollYProgress }) {

    const [hoveredCategory, setHoveredCategory] = useState(null)

    const sections = [
        { title: 'Languages', skillSet: languages },
        { title: 'Frontend', skillSet: frontend },
        { title: 'Backend', skillSet: backend },
        { title: 'Testing', skillSet: testing },
        { title: 'DevOps', skillSet: devops },
        { title: 'Design', skillSet: design },
        { title: 'Tools', skillSet: tools },
    ]

    return (
        <TechCategoriesContainer>
            {sections.map((section, index) => (
                <TechCategory
                    key={index}
                    title={section.title}
                    skillSet={section.skillSet}
                    scrollYProgress={scrollYProgress}
                    isHovered={hoveredCategory === section.title}
                    onHover={() => setHoveredCategory(section.title)}
                    onHoverLeave={() => setHoveredCategory(null)}
                />
            ))}
        </TechCategoriesContainer>
    )
}

const TechCategoriesContainer = styled.div`
	position: absolute;
	top: 20%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`
