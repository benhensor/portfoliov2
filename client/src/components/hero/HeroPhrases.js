import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { heroPhrases } from '../../data'

const phraseVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

export default function HeroPhrases() {
  const [currentPhrase, setCurrentPhrase] = useState(0)

	const textRotate = heroPhrases.map((phrase) => phrase.phrase)

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentPhrase(
				(prevPhrase) => (prevPhrase + 1) % textRotate.length
			)
		}, 3500)

		return () => clearInterval(interval)
	}, [textRotate.length])

	const renderPhrases = () => {
		return textRotate.map((phrase, index) => (
			<Phrase
				key={index}
				variants={phraseVariants}
				initial="hidden"
				animate={index === currentPhrase ? "visible" : "exit"}
				exit="exit"
			>
				{phrase}
			</Phrase>
		));
	};

	return (
		<Phrases>{renderPhrases()}</Phrases>
	)
}

const Phrases = styled.div`
	position: relative;
	width: 100%;
	align-content: center;
`

const Phrase = styled(motion.h2)`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	width: 100%;
	font-size: 3em;
	text-align: center;
	letter-spacing: 1rem;
	line-height: 1;
	display: block;
	text-transform: uppercase;
	word-wrap: normal;
	opacity: 0;
	@media screen and (max-width: 999px) {
		font-size: 2.5em;
	}
	@media screen and (max-width: 768px) {
		font-size: 1.5em;
	}
	@media screen and (max-width: 546px) {
		font-size: 0.7em;
	}
`
