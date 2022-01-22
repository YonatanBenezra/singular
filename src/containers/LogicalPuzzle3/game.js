import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuid } from 'uuid';
import Ball11 from '../../assets/balls/Ball11.png'
import Ball10 from '../../assets/balls/Ball10.png'
import Ball9 from '../../assets/balls/Ball9.png'

const itemsFromBackend = [
  { id: uuid(), url: Ball11 },
  { id: uuid(), url: Ball11 },
  { id: uuid(), url: Ball10 },
  { id: uuid(), url: Ball9 },
];

const columnsFromBackend = {
  [uuid()]: {
    items: itemsFromBackend
  },
  [uuid()]: {
    items: []
  },
};

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    console.log(sourceColumn, destColumn, sourceItems, destItems)

    setColumns({
      ...columns,
      [source.droppableId]: {

        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};


function Game() {
  const [columns, setColumns] = useState(columnsFromBackend);
  const [place1, setPlace1] = useState([]);

  return (
    <>
      <div className="game_container">
        <DragDropContext
          onDragEnd={result => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <div

                key={columnId}
              >
                <Droppable droppableId={columnId} key={columnId} direction="horizontal">
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="draggable_balls_row"
                        style={{}}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => {
                                return (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="img_container"

                                  >
                                    <img src={item.url} />

                                  </div>
                                );
                              }}
                            </Draggable>
                          );

                        })}

                        {
                          <div className="droppable_balls_row">
                            {
                              place1.map((item, index) => {
                                <div className="droppable_balls_placeholder">
                                  <img src={item.url} />
                                </div>
                              })
                            }
                          </div>
                        }
                      </div>

                    );
                  }}
                </Droppable>



              </div>
            );
          })}
        </DragDropContext>

      </div>

      <div className="droppableBallsContainer" >
        <div className="dropableBallsPlaceholder"></div>
        <div className="dropableBallsPlaceholder"></div>
        <div className="dropableBallsPlaceholder"></div>
        <div className="dropableBallsPlaceholder"></div>
      </div>
    </>
  );
}

export default Game;