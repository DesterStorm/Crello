import React from 'react'
import CrelloCard from './CrelloCard'

const CrelloList = ({title, cards}) => {
  return (
    <div style={styles.container}>
    <h4>{title}</h4>
    { cards.map(card => (
      <CrelloCard text={card.text} />
      ))}
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#d',
    borderRadius: 10,
    width: 260,
    padding: 8,
    marginRight: 8
  }
}

export default CrelloList 