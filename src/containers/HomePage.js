import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SingularLogo from "../assets/SingularLogo.png";
import WelcomePageBall from "../assets/WelcomePageBall.png";

function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

const HomePage = () => {
  console.log(useMediaQuery("(min-width: 1019px)"));
  const welcomeBallVariants = {
    visible: {
      rotate: 360,
      transition: {
        duration: 1,
        rotate: {
          duration: 1,
          repeat: 3,
          type: "tween",
          ease: "linear",
        },
        delay: 0.5,
      },
    },
  };

  const ballVariants = {
    visible: {
      rotate: 103,
      transition: {
        repeat: 0,
        type: "tween",
        ease: "linear",
        duration: 1,
      },
    },
  };

  const textVariants = {
    hidden: {
      y: -1000,
    },
    visible: {
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        delay: 1,
      },
    },
  };

  const button = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        delay: 6,
      },
    },
  };

  const boardVariants = {
    visible: {
      x: [-150, 600, 590, 610, 590, 610, 590, 1400],
      transition: {
        duration: 6,
        rotate: {
          duration: 1,
          repeat: 3,
          type: "tween",
          ease: "linear",
        },
        delay: 1,
      },
    },
  };

  return (
    <div className="home_page" style={{ minHeight: "100vh" }}>
      <div className="board-section">
        <div className="board"></div>
      </div>

      <div className="navbar">
        <Link to="/login" className="text">
          LOG IN
        </Link>
      </div>
      <div className="home_page_content">
        <motion.h1 variants={textVariants} initial="hidden" animate="visible">
          Hi! Nice to see you :) <br /> Here is a series of{" "}
          <span>short, fun</span> games
        </motion.h1>
        <motion.h2 variants={textVariants} initial="hidden" animate="visible">
          Take a minute to play them freely
        </motion.h2>

        <Link to="/logical-puzzle/rules">
          <motion.button
            variants={button}
            className="play_button"
            initial="hidden"
            animate="visible"
          >
            <img src={WelcomePageBall} alt="WelcomePageBall" />
            LET'S GO!
          </motion.button>
        </Link>
        <p>
          © 2022 | Singgular.i.5o | All rights reserved | Let's talk-
          Info@singgular.io
        </p>
      </div>

      <div className="top_spinning_logo">
        <div className="singular_logo">
          <motion.img
            src={SingularLogo}
            alt="SingularLogo"
            variants={ballVariants}
            initial="hidden"
            animate="visible"
          />
        </div>
        <div className="welcome_page_ball">
          <motion.img
            variants={welcomeBallVariants}
            src={WelcomePageBall}
            // initial="hidden"
            animate="visible"
            alt="WelcomePageBall"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;