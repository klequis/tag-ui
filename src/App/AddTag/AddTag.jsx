import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import {withStyles} from '@material-ui/core/styles'

import { green } from 'logger'

import TagInput from './TagInput'

const styles = {

}

class AddTag extends React.Component {

  state = {
    showInput: false
  }

  addClick = (e) => {
    this.setState({
      showInput: true,
    })
  }

  toggleInput = () => {
    green('showInput')
    this.setState((prevState, props) => ({
      showInput: !prevState.showInput
    }))
  }

  render() {
    const { onAddTag } = this.props
    // green('AddTag.onAddTag', onAddTag)
    return (
      <div>
        <TagInput
          addClick={this.addClick}
          onAddTag={onAddTag}
          toggleInput={this.toggleInput}
          showInput={this.state.showInput}
        />
      </div>
    )
  }
}

export default compose(
  withStyles(styles),
)(AddTag)