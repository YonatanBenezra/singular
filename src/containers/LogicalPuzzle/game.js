import React, { useState } from "react";
import { useDrop } from "react-dnd";
import Ball1 from '../../assets/balls/Ball1.svg'
import Ball2 from '../../assets/balls/Ball2.svg'
import Ball from "./balls";

const BallList = [
    {
        id: 1,
        url: Ball1
    },
    {
        id: 2,
        url: Ball1
    },
    {
        id: 3,
        url: Ball2
    },
];

function Game() {
    const [place1, setPlace1] = useState([])

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addImageToPlaceHolder(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),

    }));

    const addImageToPlaceHolder = (id) => {
        const pictureList = BallList.filter((ball) => id === ball.id);
        setPlace1((place1) => [...place1, pictureList[0]].slice(0, 3));

    };

    return (
        <div className="game_container">
            <div className="draggable_balls_row">
                {
                    BallList.map((ball) => {
                        return <div className="img_container">
                            <Ball url={ball.url} id={ball.id} />
                        </div>
                    })
                }
            </div>

            <div className="droppable_balls_row" ref={drop}>
                {
                    place1.map((ball) => {
                        return <div className="droppable_balls_placeholder" >
                            <Ball url={ball.url} id={ball.id} />
                        </div>
                    })
                }
                {place1.length > 0 ? "" : <div className="droppable_balls_placeholder" ></div>}
                {place1.length > 1 ? "" : <div className="droppable_balls_placeholder" ></div>}
                {place1.length > 2 ? "" : <div className="droppable_balls_placeholder" ></div>}
            </div>
        </div>
    )
}
export default Game;