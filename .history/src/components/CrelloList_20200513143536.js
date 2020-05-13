import React from 'react'
import CrelloCard from './CrelloCard'
import CrelloActionButton

const CrelloList = ({title, cards}) => {
  return (
    <div style={styles.container}>
    <h4>{title}</h4>
    { cards.map(card => (
      <CrelloCard key={card.id} text={card.text} />
      ))}
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 10,
    width: 260,
    padding: 8,
    marginRight: 8
  }
}

export default CrelloList 