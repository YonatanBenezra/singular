import React from "react";
import { motion } from "framer-motion";
import ball11 from "../../assets/balls/Ball11.png";
import ball10 from "../../assets/balls/Ball10.png";
import ball9 from "../../assets/balls/Ball9.png";



import { Link } from "react-router-dom";
const Rules = () => {
	const mainText = {
		hidden: {
			y: 0,
		},
		visible: {
			textShadow: ["", "", "rgb(121 83 224 / 80%) 3px 3px 20px, rgb(121 83 224 / 80%) -2px 1px 30px, rgb(121 83 224) -2px 1px 30px"],
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
			textShadow: ["", "", "rgb(121 83 224 / 80%) 3px 3px 20px, rgb(121 83 224 / 80%) -2px 1px 30px, rgb(121 83 224) -2px 1px 30px"],
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
	const ballimages2 = {
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 4.5,
				duration: 1,
			},
		},
	};

	const firstRule = {
		visible: {
			opacity: 1,
			transition: {
				delay: 3.5,
				duration: 1,
			},
		},
	};

	const secondRule = {
		visible: {
			opacity: 1,
			transition: {
				delay: 4.5,
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
		<div className="rules-page">
			<div className="rules-top-text">
				<p className="main-text">
					Complete the task{" "}
					<motion.span variants={mainText} initial="hidden" animate="visible" transition={{ delay: 1 }}>
						correctly
					</motion.span>{" "}
					and{" "}
					<motion.span variants={mainText1} initial="hidden" animate="visible" transition={{ delay: 1 }}>
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
			</div>
			<div className="donut-section">
				<motion.img
					variants={ballimages}
					initial={{ x: -100, opacity: 0 }}
					animate={ballimages.visible}
					src={ball11}
					alt={ball11}
				/>
				<motion.p
					variants={ballimages}
					initial={{ x: -150, opacity: 0 }}
					className="middle-dots"
					animate={ballimages.visible}
				>
					{Array.apply(null, { length: 8 }).map((e, i) => (
						<span key={i}>
							{String.fromCharCode(183)}
						</span>
					))}
				</motion.p>
				<motion.p
					variants={firstRule}
					initial={{ opacity: 0 }}
					animate={firstRule.visible}
					className="rule-text"
				>
					Can not be next to
				</motion.p>
				<motion.p
					variants={ballimages}
					initial={{ x: 150, opacity: 0 }}
					className="middle-dots"
					animate={ballimages.visible}
				>
					{Array.apply(null, { length: 8 }).map((e, i) => (
						<span key={i}>
							{String.fromCharCode(183)}
						</span>
					))}				</motion.p>
				<motion.img
					variants={ballimages}
					initial={{ x: 100, opacity: 0 }}
					animate={ballimages.visible}
					src={ball11}
					alt={ball11}
				/>
			</div>
			<div className="donut-section">
				<motion.img
					variants={ballimages2}
					initial={{ x: -100, opacity: 0 }}
					animate={ballimages2.visible}
					src={ball9}
					alt={ball9}
				/>
				<motion.p
					variants={ballimages2}
					initial={{ x: -150, opacity: 0 }}
					className="middle-dots"
					animate={ballimages2.visible}
				>
					{Array.apply(null, { length: 8 }).map((e, i) => (
						<span key={i}>
							{String.fromCharCode(183)}
						</span>
					))}
				</motion.p>
				<motion.p
					variants={secondRule}
					initial={{ opacity: 0 }}
					animate={secondRule.visible}
					className="rule-text"
				>
					Can not be next to
				</motion.p>
				<motion.p
					variants={ballimages2}
					initial={{ x: 150, opacity: 0 }}
					className="middle-dots"
					animate={ballimages2.visible}
				>
					{Array.apply(null, { length: 8 }).map((e, i) => (
						<span key={i}>
							{String.fromCharCode(183)}
						</span>
					))}				</motion.p>
				<motion.img
					variants={ballimages2}
					initial={{ x: 100, opacity: 0 }}
					animate={ballimages2.visible}
					src={ball10}
					alt={ball10}
				/>
			</div>
			<motion.button
				variants={button}
				initial={{ y: 80, opacity: 0 }}
				animate={button.visible}
			>
				<Link to="/logical-puzzle3">
					OK, LET'S START
				</Link>
			</motion.button>
		</div >
	);
};

export default Rules;