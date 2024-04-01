import React, { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useWindowSize } from '../../hooks/useWindowSize'
import { Page } from '../../styles/GlobalStyles'
import styled from 'styled-components'
import catFace from '../../assets/img/catFaceBanner.png'
import leftEye from '../../assets/img/leftEye.png'
import rightEye from '../../assets/img/rightEye.png'
import Footer from '../footer/Footer'

const CatSection = styled(motion.section)`
	width: 100%;
	height: calc(100vh - 10em);
`

const CatContent = styled.div`
	width: 100%;
	max-width: 1000px;
	height: 100%;
	margin: 0 auto;
	display: flex;
  flex-direction: column;
	justify-content: center;
	align-items: center;
`

const CatHead = styled.div`
	position: relative;
	mix-blend-mode: screen;
	display: flex;
	justify-content: center;
	width: 100%;
	min-height: 43em;
	overflow: hidden;
`

const CatFace = styled.img`
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	min-width: 100rem;
	max-width: 100rem;
	z-index: 1;
`

const CatEyes = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	width: 60rem;
	z-index: 0;
`

const CatEye = styled.img`
	width: 30rem;
	height: 30rem;
	z-index: 0;
`

export default function Cat() {
	const catRef = useRef(null)
	const { scrollYProgress } = useScroll({ domTarget: catRef })
	const screenWidth = useWindowSize()

	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		// Create an Intersection Observer instance
		const observer = new IntersectionObserver(
			(entries) => {
				// If the cat face container is in view, start listening to mousemove
				if (entries[0].isIntersecting) {
					setIsVisible(true)
					window.addEventListener('mousemove', handleMouseMove)
				} else {
					// If the cat face container is out of view, remove the mousemove listener
					setIsVisible(false)
					window.removeEventListener('mousemove', handleMouseMove)
				}
			},
			{
				root: null, // Use the viewport as the root
				rootMargin: '0px', // No margin
				threshold: 0.5, // 50% visibility threshold
			}
		)
		// Start observing the cat face container element
		observer.observe(catRef.current)
		// Clean up the observer on unmount
		return () => observer.disconnect()
	}, [isVisible])

	useEffect(() => {
		const shouldAddEvent = screenWidth >= 1024 && isVisible
		if (shouldAddEvent) {
			window.addEventListener('mousemove', handleMouseMove)
		}
		return () => {
			if (shouldAddEvent) {
				window.removeEventListener('mousemove', handleMouseMove)
			}
		}
	}, [screenWidth, isVisible])

	const handleMouseMove = (e) => {
		const mouseX = e.clientX
		const mouseY = e.clientY

		// Get the eye elements and their bounding boxes
		const leftEye = document.querySelector('.cat-leftEye')
		const rightEye = document.querySelector('.cat-rightEye')
		const leftEyeBoundingBox = leftEye.getBoundingClientRect()
		const rightEyeBoundingBox = rightEye.getBoundingClientRect()

		// Calculate the center positions of the eyes
		const leftEyeCenterX =
			leftEyeBoundingBox.left + leftEyeBoundingBox.width / 2
		const leftEyeCenterY =
			leftEyeBoundingBox.top + leftEyeBoundingBox.height * 1.5
		const rightEyeCenterX =
			rightEyeBoundingBox.left + rightEyeBoundingBox.width / 2
		const rightEyeCenterY =
			rightEyeBoundingBox.top + rightEyeBoundingBox.height * 1.5

		// Calculate the distance between the mouse and the eye centers
		const leftEyeDeltaX = mouseX - leftEyeCenterX - 1000
		const leftEyeDeltaY = mouseY - leftEyeCenterY * 2
		const rightEyeDeltaX = mouseX - rightEyeCenterX - 200
		const rightEyeDeltaY = mouseY - rightEyeCenterY * 2

		const maxEyeMove = 35 // Adjust this value to control the eye movement range

		// Calculate the eye movement within the specific range
		const leftEyeMoveX = (leftEyeDeltaX / window.innerWidth) * maxEyeMove
		const leftEyeMoveY =
			(leftEyeDeltaY / window.innerHeight) * (maxEyeMove * 1.5)
		const rightEyeMoveX = (rightEyeDeltaX / window.innerWidth) * maxEyeMove
		const rightEyeMoveY =
			(rightEyeDeltaY / window.innerHeight) * (maxEyeMove * 1.5)

		// Update the CSS style of the eye elements to apply the movement
		leftEye.style.transform = `translate(${leftEyeMoveX}px, ${leftEyeMoveY}px)`
		rightEye.style.transform = `translate(${rightEyeMoveX}px, ${rightEyeMoveY}px)`
	}

	const catYPosition = useTransform(
		scrollYProgress,
		[0.85, 0.9],
		['-100em', '10em']
	)

	return (
		<Page>
      <CatSection ref={catRef} style={{ bottom: catYPosition }}>
        <CatContent>
          <CatHead>
            <div>
              <CatFace src={catFace} />
              <CatEyes>
                <CatEye className="cat-leftEye" src={leftEye} />
                <CatEye className="cat-rightEye" src={rightEye} />
              </CatEyes>
            </div>
          </CatHead>
        </CatContent>
        <Footer />
      </CatSection>
    </Page>
	)
}
