import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

import React from 'react'



const AnimatedText = ({
	text,
	el: Wrapper = 'p',
	style,
	once,
	isInView,
	repeatDelay,
	animation,
}) => {
	const controls = useAnimation()
	const textArray = Array.isArray(text) ? text : [text]
	const ref = useRef(null)
	// const isInView = useInView(ref, { amount: 0.5, once })

	useEffect(() => {
		let timeout
		const show = () => {
			controls.start('visible')
			if (repeatDelay) {
				timeout = setTimeout(async () => {
					await controls.start('hidden')
					controls.start('visible')
					
				}, repeatDelay)
			}
		}

		if (isInView) {
			show()
		} else {
			controls.start('hidden')
		}

		return () => clearTimeout(timeout)
	}, [isInView, controls, repeatDelay])

	return (
		<Wrapper style={style}>
			 <span className="sr-only">{text}</span>
			<motion.span
				ref={ref}
				initial="hidden"
				animate={controls}
				variants={{
					visible: { transition: { staggerChildren: 0.1 } },
					hidden: {},
				}}
				aria-hidden
			>
				{textArray.map((line, lineIndex) => (
					<span className="block" key={`${line}-${lineIndex}`}>
						{line.split(' ').map((word, wordIndex) => (
							<motion.span
								className="inline-block"
								key={`${word}-${wordIndex}`}
							>
								{word.split('').map((char, charIndex) => (
									<motion.span
										key={`${char}-${charIndex}`}
										className="inline-block"
										variants={animation}
									>
										{char}
									</motion.span>
								))}
								<span className="inline-block">&nbsp;</span>
							</motion.span>
						))}
					</span>
				))}
			</motion.span>
		</Wrapper>
	)
}

export default AnimatedText
