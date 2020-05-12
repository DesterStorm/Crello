import React from 'react';
import CrelloList from './CrelloList'
import { connect } from 'react-redux'

class App extends Component {
  render () {
    const { lists } =  this.props
    return (
      <div className="App">
        <h2>the beginning of the end</h2>
        lists.map(list)
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
})

export default connect(mapStateToProps)(App);
