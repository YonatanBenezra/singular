import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

// fake data generator
const getItems = (count) => Array.from({ length: count }, (v, k) => k).map(k => {
    const u = window.unique = (window.unique || 0) + 1
    return {
        id: `item-${u}`,
        content: `item ${u}`
    }
});

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list)
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result

}

const grid = 8

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: grid * 2,
    margin: `0 10px ${grid}px 0`,

    display: 'inline-flex',
    width: '120px',
    padding: '10px',

    // change background colour if dragging
    background: isDragging ? 'lightgreen' : 'grey',
    display: 'inline-flex',
    padding: '10px',
    margin: '0 10px 0 0',
    border: '1px solid grey',
    // styles we need to apply on draggables
    ...draggableStyle
})

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: grid,
    margin: '10px 0'
})

export default class ServiceCommandUnit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [{ "id": "item-11", "content": "item 11" }, { "id": "item-12", "content": "item 12" }, { "id": "item-16", "content": "item 16" }]
        }
        this.onDragEnd = this.onDragEnd.bind(this)
    }

    onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
            return
        }

        const items = reorder(this.state.items, result.source.index, result.destination.index)

        this.setState({
            items
        })
    }

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId={this.props.type} direction="horizontal" type={this.props.type}>
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                            {this.state.items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                    {(provided, snapshot) => (
                                        <div style={{ display: 'inline-flex' }}>
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
                                                {item.content}
                                                <span
                                                    {...provided.dragHandleProps}
                                                    style={{ display: 'inline-block', margin: '0 10px', border: '1px solid #000' }}>
                                                    ⇄
                                                </span>
                                            </div>
                                            {provided.placeholder}
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        )
    }
}