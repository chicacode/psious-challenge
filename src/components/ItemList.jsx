import React, { Component, useRef } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import  Button  from './Button';
import Notice from './Notice';
import '../assets/styles/components/Item.scss';
import { v4 as uuidv4 } from 'uuid';
import { ITEMS } from '../utils/data';
import styled from 'styled-components';


const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};
/**
 * Moves an item from one list to another list.
 */
const copy = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const item = sourceClone[droppableSource.index];

    destClone.splice(droppableDestination.index, 0, { ...item, id: uuidv4() });
    return destClone;
};

const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};


const Content = styled.div`
    //   margin-right: 200px;
    `;

const Item = styled.div`
      display: flex;
      flex-wrap: wrap;
      user-select: none;
      padding: 0.2rem;
      margin: 0 0.2rem  0.5rem 0;
      align-items: flex-start;
      align-content: flex-start;
      line-height: 1.5;
      border-radius: 3px;
      height: 50px;
      background: #fff;
      border: 1px ${props => (props.isDragging ? 'dashed #000' : 'solid #ddd')};
      width: 150px;
      resize: horizontal;
      overflow: auto;  
     `;

const Clone = styled(Item)`
      + div {
        display: none!important;
      }
    `;

const Handle = styled.div`
      display: flex;
      align-items: center;
      align-content: center;
      user-select: none;
      margin: -0.5rem 0.5rem -0.5rem -0.5rem;
      padding: 0.5rem;
      line-height: 1.5;
      border-radius: 3px 0 0 3px;
      background: #fff;
      border-right: 1px solid #ddd;
      color: #000;
    `;

const List = styled.div`
      border: 1px ${props => (props.isDraggingOver ? 'dashed #000' : 'solid #ddd')};
      background-color: #e9e7e7;
      padding: 0.5rem 0.5rem 0.6rem;
      border-radius: 3px;
      font-family: Helvetica;
      display: flex;
      padding: 10px;
    `;

const Kiosk = styled(List)`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: space-between;
`;

const Container = styled(List)`
    //   margin: 0.5rem 0.5rem 1.5rem;
    background: blue;
    `;


class ItemList extends Component {
    constructor(props) {
        super(props);
      }
    state = {
        [uuidv4()]: [],
        position: {}
    };


    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        switch (source.droppableId) {
            case destination.droppableId:
                this.setState({
                    [destination.droppableId]: reorder(
                        this.state[source.droppableId],
                        source.index,
                        destination.index
                    )
                });
                break;
            case 'ITEMS':
                this.setState({
                    [destination.droppableId]: copy(
                        ITEMS,
                        this.state[destination.droppableId],
                        source,
                        destination
                    )
                });
                break;
            default:
                this.setState(
                    move(
                        this.state[source.droppableId],
                        this.state[destination.droppableId],
                        source,
                        destination
                    )
                );
                break;
        }
    };

    addList = e => {
        this.setState({ [uuidv4()]: [] });
    };
    componentDidMoun(){
      
        this.export();
      };

    ref  = React.createRef();
    export = e =>{ 
    
        this.setState( state => ({ position: {...state.position }} ))
        console.log('Elemt state REFFF', this.state);

        e.preventDefault();


    }


    // { ...console.log('El ref es: ', ...provided.draggableProps.getBoundingClientRect())}
    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        const addList = "Add List";
        const exportData = "Export";


        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Droppable droppableId="ITEMS" isDropDisabled={true}>
                    {(provided, snapshot) => (
                        <Kiosk
                            ref={provided.innerRef}
                            isDraggingOver={snapshot.isDraggingOver}>
                            {ITEMS.map((item, index) => (
                                <Draggable
                                    key={item.id}
                                    draggableId={item.id}
                                    index={index}>
                                    {(provided, snapshot) => (
                                        <React.Fragment>
                                            <Item
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                isDragging={snapshot.isDragging}
                                                style={
                                                    provided.draggableProps
                                                        .style
                                                }>
                                                {item.content}
                                            </Item>
                                            {snapshot.isDragging && (
                                                <Clone>{item.content}</Clone>
                                            )}
                                        </React.Fragment>
                                    )}
                                </Draggable>
                            ))}
                        </Kiosk>
                    )}
                </Droppable>
               
                <Content>
                    <Button element={this.addList}>{ addList }</Button>
                    <Button element={this.export}>{ exportData }</Button>
                    {Object.keys(this.state).map((list, i) => (
                        <Droppable key={list} droppableId={list}>
                            {(provided, snapshot) => (
                                <Container
                                    ref={provided.innerRef}
                            
                                    isDraggingOver={snapshot.isDraggingOver} >
                                    {this.state[list].length
                                        ? this.state[list].map(
                                            (item, index) => (
                                                <Draggable
                                                    key={item.id}
                                                    draggableId={item.id}
                                                    index={index}>
                                                    {(provided, snapshot) => (
                                                        <Item
                                                            ref={
                                                                provided.innerRef 
                                                            }
                                                            {...provided.draggableProps}
                                                            isDragging={snapshot.isDragging}
                                                            style={
                                                                provided.draggableProps.style
                                                            }        >
                                                            <Handle
                                                                {...provided.dragHandleProps}>
                                                                <svg
                                                                    width="24"
                                                                    height="24"
                                                                    viewBox="0 0 24 24">
                                                                    <path
                                                                        fill="currentColor"
                                                                        d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"
                                                                    />
                                                                </svg>
                                                            </Handle>
                                                            {item.content}
                                                        </Item>
                                                    )}
                                                </Draggable>
                                            )
                                        )
                                        : provided.placeholder && (
                                            <Notice>Drop items here</Notice>
                                        )}
                                    {provided.placeholder}
                                </Container>
                            )}
                        </Droppable>
                    ))}
                </Content>
            </DragDropContext>
        );
    }
}

export default ItemList;