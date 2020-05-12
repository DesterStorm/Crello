import React from 'react'
import CrelloCard from './CrelloCard'

const CrelloList = ({title, cards}) => {
  return (
    <div style={styles.container}>
    <h4>{title}</h4>
    { cards.map(card => (
      <CrelloCard
      )}
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#ccc',
    borderRadius: 10,
    width: 260,
    padding: 8
  }
}

export default CrelloList 