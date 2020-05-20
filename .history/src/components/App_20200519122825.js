import React, { Component } from 'react';
import CrelloList from './CrelloList'
import { connect } from 'react-redux'
import CrelloActionButton from './CrelloActionButton'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { sort } from '../actions'
import styled from 'styled-components'

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`

class App extends Component { 

  onDragEnd = (result) => {
    // reordering logic here
    // source = where the dragging occurs. has index id
    // destination = id where the dragged item lands. has index id
    const { destination, source, draggableId, type } = result

    if(!destination) {
      return
    }

    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId,
      type
    ))
  }

  render () {
    const { lists } =  this.props
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <h2>the beginning of the end</h2>
          <Droppable droppableId='all-lists' direction='horizontal' type='list'>
            {provided => (
              <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
              { lists.map((list, index) => (
                <CrelloList 
                  listID={list.id} 
                  key={list.id} 
                  title={list.title} 
                  cards={list.cards} 
                  index={index}
                /> 
              ))}
              <CrelloActionButton list />
            </ListContainer>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    );
  }
}



const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
