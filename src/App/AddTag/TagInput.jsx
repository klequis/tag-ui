import React from 'react'
import { compose } from 'recompose'
import { Field, reduxForm } from 'redux-form'
import AddCircle from '@material-ui/icons/AddCircle'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import { green } from 'logger'

const styles = {}

const renderTextField = ({
                           input,
                           label,
                           meta: { touched, error },
                           ...custom
                         },) => (
  <TextField
    placeholder={label}
    {...input}
    {...custom}
  />
)

const TagInput = ({ addClick, handleSubmit, onAddTag, pristine, reset, showInput, submitting, toggleInput }) => {

  const onSubmit = (values) => {
    green('TagInput.onSubmit: values', values)
    onAddTag(values)
    toggleInput()
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        {
          showInput
            ? <div>
                <Field
                  name='name'
                  component={renderTextField}
                  label='new tag name'
                />
                <Button type="submit" disabled={pristine || submitting}>
                  Submit
                </Button>
              </div>
            : <AddCircle
                onClick={() => addClick()}
              />
        }
      </form>
    </div>
  )
}

export default compose(
  withStyles(styles),
  reduxForm({ form: 'TagInput'})
)(TagInput)