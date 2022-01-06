import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SingularLogo from '../assets/SingularLogo.png'
import WelcomePageBall from '../assets/WelcomePageBall.png'

const WelcomePage = () => {
	const ballVariants = {
		visible: {
			rotate: 360,

			transition: {
				repeat: Infinity,
				repeatType: 'loop',
				repeatDelay: 0,
				duration: 1,
			},
		},
	}

	const welcomeBallVariants = {
		visible: {
			rotate: 360,
			transition: {
				repeat: Infinity,
				repeatType: 'loop',
				repeatDelay: 0,
				duration: 0.8,
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

	return (
		<div className="welcome_page">
			<div className="navbar">
				<Link to="/login" className="text">
					LOG IN
				</Link>
			</div>

			<div className="welcome_page_content">
				<motion.h1 variants={textVariants} initial="hidden" animate="visible">
					WELCOME BACK! WE ARE GLAD TO SEE YOU :) <span>SIGN IN</span> TO START
				</motion.h1>

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

export default WelcomePage
