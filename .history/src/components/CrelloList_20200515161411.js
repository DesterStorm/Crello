import React from 'react'
import CrelloCard from './CrelloCard'
import CrelloActionButton from './CrelloActionButton'
import { Droppable } from 'react-beautiful-dnd'

const CrelloList = ({title, cards, listID}) => {
  return (
    <Droppable droppableId={String(listID)}>
      { provided => (
        <div {...provided.droppableProps} ref={provided.innerRef} style={styles.container}>
          <h4>{title}</h4>
          { cards.map(card => (
            <CrelloCard key={card.id} text={card.text} id={card.id} />
            ))}
            <CrelloActionButton listID={listID} />
            {provided.}
        </div>
      )}
    </Droppable>
  )
}

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 10,
    width: 295,
    padding: 8,
    marginRight: 8,
    height: '100%'
  }
}

export default CrelloList 