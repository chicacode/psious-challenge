import React, { Component } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import '../assets/styles/components/Item.scss';
import { items } from '../utils/data';

class Item extends Component {
    state = { items: items }

    onDragEnd = result => {
        const { destination, source, reason } = result;

        if (!destination || reason === 'CANCEL') {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const items = Object.assign([], this.state.items);
        const droppedItems = this.state.items[source.index]

        items.splice(source.index, 1);
        items.splice(destination.index, 0, droppedItems);

        this.setState({
            items
        })
    }

    renderItems = (items, i) => {
        return   <Draggable key={i} draggableId={i + ''} index={i}>
        {(provided) => (<div ref={provided.innerRef} {...provided.draggableProps}  {...provided.dragHandleProps}  className="items-description-container" >
         
                
               {items.name}
           
        </div>)}

    </Draggable>
        // return <Draggable
        //     key={i}
        //     draggableId={i + ''}
        //     index={i}
        // > {(provided) => (
        //     <div ref={provided.innerRef} {...provided.droppableProps} {...provided.dragHandleProps} className="items-description-container" >
        //         {items.name}
        //     </div>
        // )}

        // </Draggable>


    }

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="items">
                    <Droppable droppableId="id">
                        {(provided) => (<div ref={provided.innerRef} {...provided.droppableProps} className="items-container">
                            <div className="items-description">
                                {this.state.items.map(this.renderItems)}
                                {provided.placeholder}
                            </div>
                        </div>)}

                    </Droppable>
                </div>
            </DragDropContext>
        )
    }

}

export default Item;