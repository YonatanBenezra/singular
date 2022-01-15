import { useEffect, useState } from "react";
import imgs from '../../assets/cardsGame/exports'
var React = require("react");
var Coverflow = require("react-coverflow");

const Carousel = (props) => {
    const Images = imgs
    const [images, setImages] = useState(Images);
    const [selected, setSelected] = useState(0);
    const [activeImg, setActiveImg] = useState(images.length / 2)
    const prev = () => {
        console.log(images)
        activeImg > 0 && setActiveImg(activeImg - 1)
    }
    const next = () => {
        activeImg < images.length && setActiveImg(activeImg + 1)
    }
    const pop = (index) => {
        // images.filter((img, i) => {
        //     if (i === index) {
        //         selected.push(img)
        //         setSelected(selected)
        //     }
        // })
        images.splice(index, 1);
        setImages([...images]);
    }
    return (
        <div className='carousel'>
            <Coverflow classes={{ background: 'white' }} className=''
                enableScroll={true}
                displayQuantityOfSide={4}
                navigation={false}
                enableHeading={false}
                clickable={false}
                active={activeImg}
                media={{
                    '@media (max-width: 900px)': {
                        width: '100%',
                        height: '100%'
                    },
                    '@media (min-width: 900px)': {
                        width: '100%',
                        height: '100%'
                    }
                }}
            >
                {images.map((img, index) => {
                    return (
                        index === activeImg ?
                            <div
                                onClick={() => pop(index)}
                                role="menuitem"
                                tabIndex="0"
                                key={index}
                            >
                                <div
                                    alt="title or description"
                                    style={{ display: "block", width: "100%", height: '200px', backgroundImage: `url(${img})`, backgroundSize: 'contain' }}
                                />
                            </div>
                            :
                            <div
                                key={index}
                                alt="title or description"
                                style={{ display: "block", width: "100%", height: '200px', backgroundImage: `url(${img})`, backgroundSize: 'contain' }}
                            />
                    )
                })}


            </Coverflow >
            <div className="btns">
                <button onClick={next}>Next</button>
                <button onClick={prev}>Previous</button>
            </div>
        </div >
    );
};

export default Carousel;
