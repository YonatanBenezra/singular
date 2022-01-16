import { useEffect, useState } from "react";
import imgs from "../../assets/cardsGame/exports";
var React = require("react");
var Coverflow = require("react-coverflow");

const Carousel = (props) => {
  const Images = imgs;
  const [chosenImages, setChosenImages] = useState(["", "", "", "", "", ""]);
  const [chosenImage, setChosenImage] = useState(null);
  const [images, setImages] = useState(Images);
  const [selected, setSelected] = useState(0);
  const [activeImg, setActiveImg] = useState(images.length / 2);
  const prev = () => {
    console.log(activeImg);
    activeImg > 0 && setActiveImg(activeImg - 1);
  };
  const next = () => {
    console.log(activeImg);
    activeImg < images.length - 1 && setActiveImg(activeImg + 1);
  };
  const pop = (index, img) => {
    // images.filter((img, i) => {
    //     if (i === index) {
    //         selected.push(img)
    //         setSelected(selected)
    //     }
    // })
    if (!chosenImages[0]) {
      setChosenImages([img, "", "", "", "", ""]);
      images.splice(index, 1);
      setImages([...images]);
      if (activeImg < 1) {
        activeImg < images.length && setActiveImg(activeImg + 1);
      } else {
        activeImg < images.length && setActiveImg(activeImg - 1);
      }
    } else if (!chosenImages[1]) {
      setChosenImages([chosenImages[0], img, "", "", "", ""]);
      images.splice(index, 1);
      setImages([...images]);
      if (activeImg < 1) {
        activeImg < images.length && setActiveImg(activeImg + 1);
      } else {
        activeImg < images.length && setActiveImg(activeImg - 1);
      }
    } else if (!chosenImages[2]) {
      setChosenImages([chosenImages[0], chosenImages[1], img, "", "", ""]);
      images.splice(index, 1);
      setImages([...images]);
      if (activeImg < 1) {
        activeImg < images.length && setActiveImg(activeImg + 1);
      } else {
        activeImg < images.length && setActiveImg(activeImg - 1);
      }
    } else if (!chosenImages[3]) {
      setChosenImages([
        chosenImages[0],
        chosenImages[1],
        chosenImages[2],
        img,
        "",
        "",
      ]);
      images.splice(index, 1);
      setImages([...images]);
      if (activeImg < 1) {
        activeImg < images.length && setActiveImg(activeImg + 1);
      } else {
        activeImg < images.length && setActiveImg(activeImg - 1);
      }
    } else if (!chosenImages[4]) {
      setChosenImages([
        chosenImages[0],
        chosenImages[1],
        chosenImages[2],
        chosenImages[3],
        img,
        "",
      ]);
      images.splice(index, 1);
      setImages([...images]);
      if (activeImg < 1) {
        activeImg < images.length && setActiveImg(activeImg + 1);
      } else {
        activeImg < images.length && setActiveImg(activeImg - 1);
      }
    } else if (!chosenImages[5]) {
      setChosenImages([
        chosenImages[0],
        chosenImages[1],
        chosenImages[2],
        chosenImages[3],
        chosenImages[4],
        img,
      ]);
      images.splice(index, 1);
      setImages([...images]);
      if (activeImg < 1) {
        activeImg < images.length && setActiveImg(activeImg + 1);
      } else {
        activeImg < images.length && setActiveImg(activeImg - 1);
      }
    }
  };
  return (
    <div className="carousel">
      <Coverflow
        classes={{ background: "white" }}
        className=""
        enableScroll={true}
        displayQuantityOfSide={4}
        navigation={false}
        enableHeading={false}
        clickable={false}
        active={activeImg}
        media={{
          "@media (max-width: 900px)": {
            width: "100%",
            height: "100%",
          },
          "@media (min-width: 900px)": {
            width: "100%",
            height: "100%",
          },
        }}
      >
        {images.map((img, index) => {
          return index === activeImg ? (
            <div
              onClick={() => pop(index, img)}
              role="menuitem"
              tabIndex="0"
              key={index}
            >
              <div
                alt="title or description"
                style={{
                  display: "block",
                  width: "100px",
                  height: "122px",
                  backgroundImage: `url(${img})`,
                  backgroundSize: "contain",
                  objectFit: "cover",
                  outline: "5px solid #ffffff1f",
                  borderRadius: "10px",
                  marginLeft: "18px",
                }}
              />
            </div>
          ) : (
            <div
              key={index}
              alt="title or description"
              style={{
                display: "block",
                width: "120px",
                height: "200px",
                backgroundImage: `url(${img})`,
                backgroundSize: "contain",
                objectFit: "cover",
                outline: "8px solid #ffffff1f",
                borderRadius: "10px",
              }}
            />
          );
        })}
      </Coverflow>
      <div className="btns">
        <button style={{ marginLeft: "-110px" }} onClick={prev}>
          Next
        </button>
        <button onClick={next}>Previous</button>
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
                width: "140px",
                height: "183px",
                outline: "8px solid #ffffff1f",
                borderRadius: "10px",
                display: "block",
                backgroundSize: "contain",
                objectFit: "cover",
                backgroundImage: `url(${i})`,
                height: "183px",
              }}
              //   chosenImage && images[chosenImage]
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
