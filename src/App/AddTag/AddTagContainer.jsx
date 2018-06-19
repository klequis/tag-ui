import React from 'react'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import AddTag from './AddTag'
import {withStyles} from '@material-ui/core/styles/index'

import * as tagActions from 'store/actions/tag-actions'
import * as eventsSelectors from '../../store/selectors/events-selectors'

const styles = {}

const AddTagContainer = ({ requestCreateNewTag }) => {

  const onAddTag = (values) => {
    requestCreateNewTag(values)
  }



  return (
    <AddTag
      onAddTag={onAddTag}
    />
  )

}

const mapStateToProps = (state) => {
  return {}
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, tagActions)
)(AddTagContainer)