import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
// import AddCircle from '@material-ui/icons/AddCircle'
// import AddCircleOutline from '@material-ui/icons/AddCircleOutline'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import * as eventsSelectors from '../store/selectors/events-selectors'
import { green } from 'logger'
import * as tagActions from 'store/actions/tag-actions'
import AddTag from './AddTag'

const styles = theme => ({
  root: {
    // display: 'flex',
    // justifyContent: 'center',
    // flexWrap: 'wrap',
    padding: theme.spacing.unit / 2,
  },
  chip: {
    margin: theme.spacing.unit / 2,
  },
  chipRow: {
    padding: '5px',
    border: 'solid 1px white'
  }
})

class Tags extends React.Component {

  handleDelete = (tag) => {
    green('handleDelete: data', tag)

  }


  render() {
    const {classes, events} = this.props
    const tags = events.map(event => {
      return (
        <div className={classes.chipRow} key={event._id}>
          {
            event.tags.map(t => {
              return (
                <Chip
                  className={classes.chip}
                  key={t}
                  label={t}
                  onDelete={this.handleDelete(t)}
                />
              )
            })
          }
          <AddTag/>
        </div>
      )
    })
    return (
      <Paper className={classes.root}>
        {tags}

      </Paper>
    )
  }
}

Tags.propTypes = {
  classes: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    events: eventsSelectors.getAllEvents(state)
  }
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, tagActions)
)(Tags)

