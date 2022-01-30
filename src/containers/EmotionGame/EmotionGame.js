import React, { useState } from "react";
import "./emotion-game.scss";
import { emojis, emojis0, emojis1, emojis2 } from "../../data/emojis";
import Progressbar from "../../components/Progressbar";
import first from "../../assets/first.gif";
import second from "../../assets/second.gif";

const Circle = () => {
  const [cases, setCases] = useState(0);
  const [loading, setLoading] = useState(0);
  const handleClick = (id) => {
    setLoading(loading + id);
    setCases(cases + 1);
  };

  console.log(loading);

  const loadFragment = () => {
    switch (cases) {
      case 0:
        return (
          <div className="wrapper">
            <div className="radius">
              {emojis.map(({ id, emoji }, i) => (
                <div className={`point deg${i} `}>
                  <img
                    src={emoji}
                    key={i}
                    onClick={() => handleClick(id)}
                    className="img"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        );
      case 1:
        return (
          <div className="ani">
            <div className="radius">
              {emojis0.map(({ id, emoji }, i) => (
                <div className={`point deg${i} `}>
                  <img
                    src={emoji}
                    key={i}
                    onClick={() => handleClick(id)}
                    className="ani-img"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="ani1">
            <div className="radius">
              {emojis1.map(({ id, emoji }, i) => (
                <div className={`point deg${i} `}>
                  <img
                    src={emoji}
                    key={i}
                    onClick={() => handleClick(id)}
                    className="ani-img1"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="ani2">
            <div className="radius">
              {emojis2.map(({ id, emoji }, i) => (
                <div className={`point deg${i} `}>
                  <img
                    src={emoji}
                    key={i}
                    onClick={() => handleClick(id)}
                    className="ani-img2"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        );
      default:
        setCases(1);
    }
  };

  return (
    <div className="container">
      <Progressbar loading={loading} />
      {loadFragment()}
      <div
        className="img-div"
        style={{ backgroundImage: `url(${cases === 0 ? first : second})` }}
      ></div>
    </div>
  );
};

export default Circle;