import { combineReducers } from 'redux'
import requests from './requests'
import images from './images'
import events from './events'
import tags from './tags'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  events,
  images,
  requests,
  tags,
  form: formReducer,
})
