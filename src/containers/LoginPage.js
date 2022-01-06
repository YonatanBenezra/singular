import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import SingularLogo from '../assets/SingularLogo.png'
import WelcomePageBall from '../assets/WelcomePageBall.png'

import { GradientButton, LoginInput } from '../components/UI'

const LoginPage = () => {
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

	return (
		<div className="login_page">
			<div className="navbar">
				<Link to="/login" className="text">
					LOG IN
				</Link>
			</div>

			<div className="login_page_content">
				<div className="login_form">
					<LoginInput type="text" placeholder="FULL NAME" />
					<LoginInput type="text" placeholder="DATE OF BIRTH" />
					<LoginInput type="text" placeholder="GENDER" />
					<LoginInput type="text" placeholder="ADDRESS" />

					<Link to="/create-password">
						<GradientButton text="NEXT" width="40vw" />
					</Link>
				</div>
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

export default LoginPage
