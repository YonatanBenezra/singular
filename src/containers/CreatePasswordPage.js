import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import SingularLogo from '../assets/SingularLogo.png'
import WelcomePageBall from '../assets/WelcomePageBall.png'
import { GradientButton } from '../components/UI'
import { LoginInput } from './../components/UI/index'

const CreatePasswordPage = () => {
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
		<div className="create_password_page">
			<div className="navbar">
				<Link to="/login" className="text">
					LOG IN
				</Link>
			</div>

			<div className="password_page_content">
				<div className="password_form">
					<label htmlFor="">Create a password:</label>
					<LoginInput placeholder="PASSWORD" />
					<Link to="/">
						<GradientButton text="LET'S GO!" width="40vw" />
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

export default CreatePasswordPage
