import React from "react";
import { useDrag } from "react-dnd";

function Ball({ id, url }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
        
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <img
      ref={drag}
      src={url}
      width="100px"
      
    />
  );
}

export default Ball;