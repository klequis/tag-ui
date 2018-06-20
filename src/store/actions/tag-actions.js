import { createRequestThunk, logError, logReturnValue } from './action-helpers'
import api from 'api'
import { orange } from 'logger'

// Create
export const keyCreateNewTag = 'actionKeyCreateTag'
export const requestKeyCreateNewTag = 'requestKeyCreateTag'

const createNewTag = (tag) => ({
  type: keyCreateNewTag,
  payload: { tag },
})

export const requestCreateNewTag = createRequestThunk({
  request: api.tags.create,
  key: requestKeyCreateNewTag,
  success: [ createNewTag ],
  failure: [ (error) => logError(error, requestKeyCreateNewTag) ]
})

// Delete
export const keyDeleteTag = 'actionKeyDeleteTag'
export const requestKeyDeleteTag = 'requestKeyDeleteTag'

const deleteTag = (tag) => ({
  type: keyDeleteTag,
  payload: { tag },
})

export const requestDeleteTag = createRequestThunk({
  request: api.tags.delete,
  key: requestKeyDeleteTag,
  success: [ deleteTag ],
  failure: [ (error) => logError(error, requestKeyDeleteTag) ]
})

