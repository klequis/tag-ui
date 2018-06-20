import { merge } from 'ramda'
import { keyCreateNewTag, keyDeleteTag } from '../actions/tag-actions'
import { blue } from 'logger'


const tags = (state = [], { type, payload }) => {
  // blue('tags: payload', payload)
  switch (type) {
    case keyCreateNewTag:
      return merge(state, payload.tag)
    case keyDeleteTag:
      const _id = payload.tag._id
      const idx = state.findIndex(t => t._id === _id)
      const removed = remove(idx, 1, state)
      blue('removed', removed)
    default:
      return state
  }
}



export default tags
