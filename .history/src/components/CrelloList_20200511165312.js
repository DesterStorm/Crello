import React from 'react'
import CrelloCard from './CrelloCard'

const CrelloList = ({title}) => {
  return (
    <div style={styles.container}>
    <h4>{title}</h4>
    <CrelloCard/>
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#ccc',
    borderRadius: 3,
    width: 260,
    padding: 
  }
}

export default CrelloList 