import React from "react";
import { motion } from "framer-motion";
import donut from "../../assets/balls/Ball2.svg";
import ball from "../../assets/balls/Ball1.svg";
import ball2 from "../../assets/balls/Ball2.svg";
import ball3 from "../../assets/balls/Ball3.png";
import ball4 from "../../assets/balls/Ball4.png";
import ball5 from "../../assets/balls/Ball5.png";
import ball6 from "../../assets/balls/Ball6.png";
import ball7 from "../../assets/balls/Ball7.png";
import ball8 from "../../assets/balls/Ball8.png";


import { Link } from "react-router-dom";
const Rules = () => {
	const numOfRules = 4;
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

	const ballimages3 = {
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 5.5,
				duration: 1,
			},
		},
	};

	const ballimages4 = {
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: 6.5,
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

	const thirdRule = {
		visible: {
			opacity: 1,
			transition: {
				delay: 5.5,
				duration: 1,
			},
		},
	};

	const fourthRule = {
		visible: {
			opacity: 1,
			transition: {
				delay: 6.5,
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
			<div className={`rules-top-text ${numOfRules > 2 && 'top-text-no-margin'}`}>
				<p className={`main-text ${numOfRules > 2 && 'main-text-no-margin'}`}>
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
					className={`main-text ${numOfRules > 2 && 'main-text-no-margin'}`}
				>
					FOLLOW THE RULES
				</motion.p>
			</div>
			<div className={`donut-section ${numOfRules > 2 && 'no-margin'}`}>
				<motion.img
					variants={ballimages}
					initial={{ x: -100, opacity: 0 }}
					animate={ballimages.visible}
					src={ball5}
					alt={ball}
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
					src={ball4}
					alt={ball}
				/>
			</div>
			<div className={`donut-section ${numOfRules > 2 && 'no-margin'}`}>
				<motion.img
					variants={ballimages2}
					initial={{ x: -100, opacity: 0 }}
					animate={ballimages2.visible}
					src={ball6}
					alt={ball}
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
					src={ball7}
					alt={ball}
				/>
			</div>
			<div className={`donut-section ${numOfRules > 2 && 'no-margin'}`}>
				<motion.img
					variants={ballimages3}
					initial={{ x: -100, opacity: 0 }}
					animate={ballimages3.visible}
					src={ball3}
					alt={ball}
				/>
				<motion.p
					variants={ballimages3}
					initial={{ x: -150, opacity: 0 }}
					className="middle-dots"
					animate={ballimages3.visible}
				>
					{Array.apply(null, { length: 8 }).map((e, i) => (
						<span key={i}>
							{String.fromCharCode(183)}
						</span>
					))}
				</motion.p>
				<motion.p
					variants={thirdRule}
					initial={{ opacity: 0 }}
					animate={thirdRule.visible}
					className="rule-text"
				>
					Will be from right to
				</motion.p>
				<motion.p
					variants={ballimages3}
					initial={{ x: 150, opacity: 0 }}
					className="middle-dots"
					animate={ballimages3.visible}
				>
					{Array.apply(null, { length: 8 }).map((e, i) => (
						<span key={i}>
							{String.fromCharCode(183)}
						</span>
					))}				</motion.p>
				<motion.img
					variants={ballimages3}
					initial={{ x: 100, opacity: 0 }}
					animate={ballimages3.visible}
					src={ball6}
					alt={ball}
				/>
			</div>
			<div className={`donut-section ${numOfRules > 2 && 'no-margin'}`}>
				<motion.img
					variants={ballimages4}
					initial={{ x: -100, opacity: 0 }}
					animate={ballimages4.visible}
					src={ball2}
					alt={ball}
				/>
				<motion.p
					variants={ballimages4}
					initial={{ x: -150, opacity: 0 }}
					className="middle-dots"
					animate={ballimages4.visible}
				>
					{Array.apply(null, { length: 8 }).map((e, i) => (
						<span key={i}>
							{String.fromCharCode(183)}
						</span>
					))}
				</motion.p>
				<motion.p
					variants={fourthRule}
					initial={{ opacity: 0 }}
					animate={fourthRule.visible}
					className="rule-text"
				>
					Can not be on the edge
				</motion.p>
				<motion.p
					variants={ballimages4}
					initial={{ x: 150, opacity: 0 }}
					className="middle-dots"
					animate={ballimages4.visible}
				>
					{Array.apply(null, { length: 8 }).map((e, i) => (
						<span key={i}>
							{String.fromCharCode(183)}
						</span>
					))}				</motion.p>
				<motion.img
					variants={ballimages4}
					initial={{ x: 100, opacity: 0 }}
					animate={ballimages4.visible}
					src={ball4}
					alt={ball}
				/>
			</div>
			<motion.button
				variants={button}
				initial={{ y: 40, opacity: 0 }}
				animate={button.visible}
			>
				<Link to="/logical-puzzle2">
					OK, LET'S START
				</Link>
			</motion.button>
		</div >
	);
};

export default Rules;