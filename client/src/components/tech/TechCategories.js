import React, { useState } from 'react'
import { motion, useTransform, useScroll } from 'framer-motion'
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

    const top = useTransform(
		scrollYProgress,
		[0.3, 0.35, 0.55, 0.6],
		['-217%', '17%', '17%', '217%']
	)

    return (
        <TechCategoriesContainer style={{ top: top }}>
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

const TechCategoriesContainer = styled(motion.div)`
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`