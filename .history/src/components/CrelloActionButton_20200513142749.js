import React from 'react'

class CrelloActionButton extends React.Component {

  renderAddButton = () => {
    const { list } = this.props
    return (
      <div>
        <Icon>add</Icon>
        <p></p>
      </div>
    )
  }

  render() {
    return null
  }
}

export default CrelloActionButton