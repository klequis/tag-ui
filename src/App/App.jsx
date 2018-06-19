
import { withStyles } from '@material-ui/core/styles'
import AppBar from 'elements/AppBar'
import React, { Component, Fragment } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import * as tagActions from 'store/actions/tag-actions'
import Tags from './Tags'

const styles = theme => ({
  root: {
    flexGrow: 1,
    fontSize: '2em',
  },
})

class App extends Component {

  render() {
    return (
      <Router>
        <Fragment>
          <AppBar title='Events' />
          <Route path='/' component={Tags} />
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, tagActions)
)(App)