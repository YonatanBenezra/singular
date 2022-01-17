import { useEffect, useState } from "react";
import purpleTriangle from '../../assets/purple-triangle.png'
import imgs from "../../assets/cardsGame/exports";
import Cards from '../../data/cards-1.json'
import { DragDropContext, Droppable } from "react-beautiful-dnd";
var React = require("react");
var Coverflow = require("react-coverflow");

const Carousel = (props) => {
  const Images = imgs;
  const [chosenImages, setChosenImages] = useState(["", "", "", "", "", ""]);
  const [chosenImage, setChosenImage] = useState(null);
  const [images, setImages] = useState(Cards.cards);
  const [selected, setSelected] = useState(0);
  const [activeImg, setActiveImg] = useState(Math.floor(Cards.cards.length / 2));
  const prev = () => {
    console.log(activeImg);
    activeImg > 0 && setActiveImg(activeImg - 1);
  };
  const next = () => {
    console.log(activeImg);
    activeImg < Cards.cards.length - 1 && setActiveImg(activeImg + 1);
  }
  return (
    <div className="carousel">
      <Coverflow
        classes={{ background: "white" }}
        className=""
        enableScroll={true}
        displayQuantityOfSide={Cards.cardsCount / 2 - 1}
        navigation={false}
        enableHeading={false}
        clickable={true}
        active={activeImg}
        media={{
          "@media (max-width: 900px)": {
            minWidth: "300px",
            width: "100%",
            height: "100%",
          },
          "@media (min-width: 900px)": {
            minWidth: "300px",
            width: "100%",
            height: "100%",
          },
        }}
      >
        {Cards.cards.map((img, index) => {
          return index == activeImg ? (
              console.log(activeImg),
              < div
                role="menuitem"
                tabIndex="0"
                key={index}
                className="middle"
              >
                <img
                  className="middle"
                  alt="title or description"
                  style={{
                    display: "block",
                    width: "80px",
                    height: "120px",
                    backgroundSize: "contain",
                    objectFit: "cover",
                    outline: "5px solid #ffffff1f",
                    borderRadius: "10px",
                    marginLeft: "18px",
                  }}
                  src={img.url}
                />
              </div>
              ) : (
              <img
                key={index}
                alt={index}
                style={{
                  display: "block",
                  width: "120px",
                  height: "200px",
                  backgroundSize: "contain",
                  objectFit: "cover",
                  outline: "8px solid #ffffff1f",
                  borderRadius: "10px",
                }}
                src={img.url}
              />
              )
        })}
      </Coverflow >
      <div className="btns">
        <img src={purpleTriangle} alt="" onClick={prev} className="previous-btn purple-btn">
        </img>
        <img src={purpleTriangle} alt="" onClick={next} className="next-btn purple-btn"></img>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: "65px",
        }}
      >
        {chosenImages.map((i) => {
          return (
            <div
              className={!i ? "center" : ""}
              style={{
                width: "100px",
                height: "122px",
                outline: "8px solid #ffffff1f",
                borderRadius: "10px",
                display: "block",
                backgroundSize: "contain",
                objectFit: "cover",
                backgroundImage: `url(${i})`,
              }}
            //   chosenImage && images[chosenImage]
            ></div>
          );
        })}
      </div>
    </div >
  );
};

export default Carousel;
