import React from 'react'

class CrelloActionButton extends React.Component {

  renderAddButton = () => {
    const { list } = this.props

    const buttonText = list ? 'Add another list' : 

    return (
      <div>
        <Icon>add</Icon>
        <p>Add another card</p>
      </div>
    )
  }

  render() {
    return null
  }
}

export default CrelloActionButton