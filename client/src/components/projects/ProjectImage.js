import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const imageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 1 } },
};

export default function ProjectImage({ title, images}) {

  const [currentImage, setCurrentImage] = useState(0)

  const randomInterval = Math.floor(Math.random() * 5000) + 10000;

  useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage(
				(prevImage) => (prevImage + 1) % images.length
			)
		}, randomInterval)

		return () => clearInterval(interval)
	}, [currentImage, randomInterval, images.length])

  const renderImages = () => {
		return images.map((image, index) => (
			<Image
				key={index}
				variants={imageVariants}
				initial="hidden"
				animate={index === currentImage ? "visible" : "exit"}
				exit="exit"
        src={image}
        alt={title}
			/>
		));
	};
  return (
    <Images>
      {renderImages()}
    </Images>
  )
}

const Images = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const Image = styled(motion.img)`
  max-width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1rem;
`