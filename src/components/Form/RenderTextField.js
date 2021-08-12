import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

const RenderTextField = ({
  label,
  input,
  type,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    type={type}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
)

RenderTextField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.shape({}).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    touch: PropTypes.bool,
    invalid: PropTypes.bool,
    error: PropTypes.string,
  }),
}

RenderTextField.defaultProps = {
  label: '',
  meta: {},
  type: '',
}

export default RenderTextField
