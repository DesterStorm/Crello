import React from 'react'
import CrelloCard from './CrelloCard'
import CrelloActionButton from './CrelloActionButton'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 10px;
  width: 295px;
  padding: 8px;
  margin-right: 8px;
  height: 100%;
`

const CrelloList = ({ title, cards, listID, index }) => {
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {provided => (
        <ListContainer {...provided.droppableProps} ref={provided.innerRef} {...prov}>
        <Droppable droppableId={String(listID)}>
          { provided => (
            <div>
              <h4>{title}</h4>
              { cards.map((card, index) => (
                <CrelloCard 
                  key={card.id} 
                  index={index} 
                  text={card.text} 
                  id={card.  id} 
                />
              ))}
              {provided.placeholder}
              <CrelloActionButton listID={listID} />
              </div>
            
          )}
        </Droppable>
        </ListContainer>
      )}
    </Draggable>
  )
}

export default CrelloList 