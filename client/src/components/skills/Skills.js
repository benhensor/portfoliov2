import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useTransform, useScroll } from 'framer-motion'
import icons from '../../icons'

export default function Skills() {

    const skillsRef = useRef(null)
    const carouselRef = useRef()
    const { scrollYProgress } = useScroll({ domTarget: skillsRef })

    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }, [])

    const skillsXPosition = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.4], ['-100%', '0%', '0%', '100%'])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.25, 0.4], ['0', '1', '1', '0'])

    return (
        <SkillsSection id='skills' ref={skillsRef} style={{ left: skillsXPosition, opacity: opacity }}>
            <SkillsContent>
                <Carousel ref={carouselRef} className="carousel">
                    <InnerCarousel className="inner" drag="x" dragConstraints={{left: -width, right: 0}}>
                        {icons.map((icon, index) => {
                            return (
                                <IconContainer key={index}>
                                    <div>
                                        <Icon src={icon} alt='' />
                                    </div>
                                </IconContainer>
                            )
                        })}
                    </InnerCarousel>
                </Carousel>
            </SkillsContent>
        </SkillsSection>
    )
}

const SkillsSection = styled(motion.section)`
    position: fixed;
    left: 0;
    top: 4em;
    width: 100%;
    height: 50em;
    @media screen and (max-width: 999px) {
        padding: var(--m-desktop);
    }
    @media screen and (max-width: 768px) {
        padding: var(--m-mobile);
    }
`

const SkillsContent = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Carousel = styled(motion.div)`
    cursor: grab;
    width: 1000px;
    overflow: hidden;
`

const InnerCarousel = styled(motion.div)`
    display: flex;
    width: 3200px;
    gap: 5em;
`

const IconContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    min-height: 60rem;
    width: 40rem;
    padding: 40px;
    background-color: #333;
    border-radius: 2rem;
    border: 2px solid #fff;
    div {
        width: 10em;
        height: 10em;
    }
`

const Icon = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    pointer-events: none; 
`