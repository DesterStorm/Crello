import React from 'react'
import Icon from '@material-ui/core/Icon'
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

class CrelloActionButton extends React.Component {

  state = {
    formOpen: false,
    text: ''
  }

  openForm = () => {
    this.setState({
      formOpen: true
    })
  }

  closeForm = (e) => {
    this.setState({
      formOpen: false
    })
  }

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  renderAddButton = () => {
    const { list } = this.props

    const buttonText = list ? 'Add another list' : 'Add another card'
    const buttonTextOpacity = list ? 1 : .5
    const buttonTextColor = list ? 'white' : 'inherit'
    const buttonTextBackground = list ? 'rbga(0,0,0,.15)' : 'inherit'

    return (
      <div 
        onClick={this.openForm}
        style={{
          ...styles.openFormButtonGroup,
          opacity: buttonTextOpacity, 
          color: buttonTextColor, 
          backgroundColor: buttonTextBackground
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    )
  }

  renderForm = () => {
    const { list } = this.props 
    const placeholder = list ? 'Enter list title' : 'Enter the card title'
    const buttonTitle = list ? 'Add List' : 'Add Card'

    return <div>
      <Card style={{
        overflow: 'visible',
        minHeight: 65,
        minWidth: 272,
        padding: '6px 8px 2px'
      }}>
        <Textarea 
          placeholder={placeholder} 
          autoFocus 
          onBlur={this.closeForm}
          value={this.state.text}
          onChange={this.handleInputChange}
          style={{
            resize: 'none',
            width: '100%',
            overflow: 'hidden',
            outline: 'none',
            border: 'none'
          }}
        />
      </Card>
      <div style={styles.formButtonGroup}>
        <Button variant='contained' style={{ color: 'white', backgroundColor: '#5aac44' }}>
          {buttonTitle}
        </Button>
      </div>
    </div>
  }

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton()
  }
}

const styles = {
  openForButtonGroup: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 260,
    paddingLeft: 8
  },
  formButtonGroup: {
    marginTop: 8,
    display: 'flex',
    alignItems: 'center'
  }
}

export default CrelloActionButton