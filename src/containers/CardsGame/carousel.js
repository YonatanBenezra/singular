import { useEffect, useState,useRef } from "react";
import purpleTriangle from '../../assets/purple-triangle.png'
import Cards from '../../data/cards-1.json'
var React = require("react");
var Coverflow = require("react-coverflow");

const Carousel = () => {
  const [chosenImages, setChosenImages] = useState([]);
  const [activeImg, setActiveImg] = useState(Math.floor(Cards.cards.length / 2));
  const prev = () => {
    console.log(activeImg);
    activeImg > 0 && setActiveImg(activeImg - 1);
  };
  const next = () => {
    console.log(activeImg);
    activeImg < Cards.cards.length - 1 && setActiveImg(activeImg + 1);
  }

 
  const dragNode = useRef();

  const handleDragStart = (e) =>{
      console.log('drag Start..')
      dragNode.current = e.target.currentSrc;
      }
  


  const handleDragEnd = (e) => {
    console.log('image path',dragNode)
    if(chosenImages.length < 6){
      setChosenImages(prev => [...prev,dragNode.current])
    }
    else{
      return;
    }

  }

  const DoubleClickDelete = (item) => {
      console.log(item);
      setChosenImages((prev) => prev.filter((_,i) =>i !== item));
      if(chosenImages.length == 6){
        setPlaceholderMap((prev)=> [...prev,item])
      }
      else if (chosenImages.length < 6){
        setPlaceholderMap((prev)=> [...prev,item])
        setPlaceholderMap((prev)=> [...prev,item])
      }
  }

  let [placeholderMap,setPlaceholderMap] = useState([1,2,3,4,5,6])
  console.log(placeholderMap)

  useEffect(()=>{
    
    if(placeholderMap.length >= 1){
      placeholderMap.length -=1
    }
  },[chosenImages])

  console.log(chosenImages)

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
                  draggable
                  onDragStart={(e) => (handleDragStart(e,(index)))}
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
        {chosenImages.map((i,e) => {
          return (
              <>
            <div
            key={e}
              className={!i ? "center" : ""}
              style={{
                width: "100px",
                height: "122px",
                margin:10,
                outline: "8px solid #ffffff1f",
                borderRadius: "10px",
                display: "block",
                backgroundSize: "contain",
                objectFit: "cover",
                backgroundImage: `url(${i})`,
              }}
              onDoubleClick={() => DoubleClickDelete(e)}
              >
              
            </div>
            
            </>
          );
        })}
        
         {placeholderMap.length >= 1 ? placeholderMap.map(e=>{
           
           return(
            <div 
            className={"center"}
            style={{
              width: "100px",
              height: "122px",
              margin:10,
              outline: "8px solid #ffffff1f",
              borderRadius: "10px",
              display: "block",
              backgroundSize: "contain",
              objectFit: "cover",
              backgroundImage: ``,
              
            }}
            onDragLeave={handleDragEnd}
            
          >
         </div>
           )
           
         }):(<></>)}

          </div>
    </div >
  );
};

export default Carousel;