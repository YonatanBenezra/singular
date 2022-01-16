import React from "react";
import { motion } from "framer-motion";
import donut from "../../assets/balls/Ball2.svg";
import ball from "../../assets/balls/Ball1.svg";
import './Rules.scss'
import { Link } from "react-router-dom";
const Rules = () => {
	const mainText = {
		hidden: {
			y: 0,
		},
		visible: {
			textShadow: ["", "", "5px 1px 19px rgb(247, 145, 247)"],
			transition: {
				delay: 1.5,
				duration: 5,
			},
		},
	};

	const mainText1 = {
		hidden: {
			y: 0,
		},
		visible: {
			textShadow: ["", "", "5px 1px 19px rgb(247, 145, 247)"],
			transition: {
				delay: 2.5,
				duration: 3,
			},
		},
	};

	const followText = {
		visible: {
			opacity: 1,
			transition: {
				delay: 3,
				duration: 1,
			},
		},
	};

	const ballimages = {
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 3.5,
				duration: 1,
			},
		},
	};

	const donutimages = {
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 6,
				duration: 2,
			},
		},
	};

	const firstRule = {
		visible: {
			opacity: 1,
			transition: {
				delay: 5.5,
				duration: 1,
			},
		},
	};

	const secondRule = {
		visible: {
			opacity: 1,
			transition: {
				delay: 8,
				duration: 1,
			},
		},
	};

	const button = {
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				// type: "spring",
				// stiffness: 70,
				delay: 8,
				// duration: 3,
			},
		},
	};

	return (
		<div className="maze_page">
			<p className="main-text">
				Complete the task{" "}
				<motion.span variants={mainText} initial="hidden" animate="visible">
					correctly
				</motion.span>{" "}
				and{" "}
				<motion.span variants={mainText1} initial="hidden" animate="visible">
					quickly
				</motion.span>{" "}
				as possible
			</p>
			<motion.p
				variants={followText}
				initial={{ opacity: 0 }}
				animate={followText.visible}
				className="main-text"
			>
				FOLLOW THE RULES
			</motion.p>
			<div className="donut-section">
				<motion.img
					variants={ballimages}
					initial={{ x: -100, opacity: 0 }}
					animate={ballimages.visible}
					src={ball}
					alt={ball}
				/>
				<motion.p
					variants={ballimages}
					initial={{ x: -150, opacity: 0 }}
					animate={ballimages.visible}
				>
					- - - - - - - - -
				</motion.p>
				<motion.p
					variants={firstRule}
					initial={{ opacity: 0 }}
					animate={firstRule.visible}
				>
					Can never be close to
				</motion.p>
				<motion.p
					variants={ballimages}
					initial={{ x: 150, opacity: 0 }}
					animate={ballimages.visible}
				>
					- - - - - - - - -
				</motion.p>
				<motion.img
					variants={ballimages}
					initial={{ x: 100, opacity: 0 }}
					animate={ballimages.visible}
					src={ball}
					alt={ball}
				/>
			</div>
			<div className="donut-section">
				<motion.img
					variants={donutimages}
					initial={{ x: 700, opacity: 0 }}
					src={donut}
					animate={donutimages.visible}
					alt={donut}
				/>
				<motion.p
					variants={donutimages}
					initial={{ x: 600, opacity: 0 }}
					animate={donutimages.visible}
				>
					- - - - - - - - -
				</motion.p>
				<motion.p
					variants={secondRule}
					initial={{ opacity: 0 }}
					animate={secondRule.visible}
				>
					Cannot be at the left end
				</motion.p>
				<motion.p
					variants={donutimages}
					initial={{ x: -600, opacity: 0 }}
					animate={donutimages.visible}
				>
					- - - - - - - - -
				</motion.p>
				<motion.img
					variants={donutimages}
					initial={{ x: -700, opacity: 0 }}
					animate={donutimages.visible}
					src={donut}
					alt={donut}
				/>
			</div>

			<motion.button
				variants={button}
				initial={{ y: 80, opacity: 0 }}
				animate={button.visible}
				style={{ textDecoration: 'none', color: '#fff' }}
			>
				<Link to="/logical-puzzle">
					OK, LET'S START
				</Link>
			</motion.button>
		</div >
	);
};

export default Rules;