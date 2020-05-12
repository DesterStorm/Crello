import React from 'react';
import CrelloList from './CrelloList'
import { connect } from 'react-redux'

function App() {
  return (
    <div className="App">
      <h2>the beginning of the end</h2>
      <CrelloList title="test"/>
    </div>
  );
}

const mapStateToProps = state => ({
  lists:
})

export default App;
