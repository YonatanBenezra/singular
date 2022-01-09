import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SingularLogo from '../assets/SingularLogo.png'
import WelcomePageBall from '../assets/WelcomePageBall.png'

const HomePage = () => {
	const welcomeBallVariants = {
		visible: {
			x: [0, 0, -100, -50, 100, 50, 0],
			y: [0, 600, 400, 600, 400, 600, 0],

			rotate: 360,

			transition: {
				duration: 5,
				rotate: {
					duration: 1,
					repeat: Infinity,
					type: 'tween',
					ease: 'linear',
				},

				delay: 1,
			},
		},
	}

	const ballVariants = {
		visible: {
			rotate: 360,

			transition: {
				repeat: Infinity,
				type: 'tween',
				ease: 'linear',
				duration: 1,
			},
		},
	}

	const textVariants = {
		hidden: {
			y: -1000,
		},

		visible: {
			y: 0,

			transition: {
				type: 'spring',
				stiffness: 70,
				delay: 1,
			},
		},
	}

	const fadeFromLeft = {
		hidden: {
			x: -1000,
		},

		visible: {
			x: 0,

			transition: {
				type: 'spring',
				stiffness: 70,
				delay: 6,
			},
		},
	}

	return (
		<div className="home_page">
			<div className="navbar">
				<Link to="/login" className="text">
					LOG IN
				</Link>
			</div>

			<div className="home_page_content">
				<motion.h1 variants={textVariants} initial="hidden" animate="visible">
					Hi! Nice to see you :) <br /> Here is a series of short, fun games
				</motion.h1>
				<motion.h2 variants={textVariants} initial="hidden" animate="visible">
					Take a minute to play them freely
				</motion.h2>

				<motion.button variants={fadeFromLeft} className="play_button" initial="hidden" animate="visible">
					<motion.img variants={ballVariants} src={WelcomePageBall} alt="WelcomePageBall" />
					LET'S GO!
				</motion.button>

				<p>© 2022 | Singgular.io | All rights reserved | Let's talk- Info@singgular.io</p>
			</div>

			<div className="top_spinning_logo">
				<div className="singular_logo">
					<motion.img src={SingularLogo} alt="SingularLogo" variants={ballVariants} initial="hidden" animate="visible" />
				</div>

				<div className="welcome_page_ball">
					<motion.img src={WelcomePageBall} alt="WelcomePageBall" variants={welcomeBallVariants} initial="hidden" animate="visible" />
				</div>
			</div>
		</div>
	)
}

export default HomePage
