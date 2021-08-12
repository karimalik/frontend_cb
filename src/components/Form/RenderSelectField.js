import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import uuidv1 from 'uuid/v1';
import {FormControl, FormHelperText,Select,MenuItem} from '@material-ui/core';

const renderOptionText = (element, optionText) => {
  if (!element) return ''

  return typeof optionText === 'function'
    ? optionText(element)
    : get(element, optionText)
}

/**
 * Usage :
 *
 *    <Field
        name="favoriteColor"
        component={RenderSelectField}
        label="Favorite Color"
        choices={[
          { name: 'Red', value: 'ff0000' },
          { name: 'Green', value: '00ff00' },
          { name: 'Blue', value: '0000ff' },
        ]}
        allowEmpty
      />
 */

const RenderSelectField = ({
  input,
  meta: { touched, error },
  choices,
  optionText,
  optionValue,
  id,
  allowEmpty,
  ...custom
}) => (
  <FormControl error={touched && error !== undefined} fullWidth>
    <Select
      {...input}
      {...custom}
      inputProps={{
        name: input.name,
        id,
      }}
    >
      {allowEmpty && <option value="" />}
      {choices.map(choice => (
        <MenuItem key={uuidv1()} value={choice[optionValue]}>
          {renderOptionText(choice, optionText)}
        </MenuItem>
      ))}
    </Select>
    {touched && error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
)

RenderSelectField.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  label: PropTypes.string,
  choices: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    touch: PropTypes.bool,
    invalid: PropTypes.bool,
    error: PropTypes.string,
  }),
  id: PropTypes.string,
  optionText: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  optionValue: PropTypes.string,
  allowEmpty: PropTypes.bool,
}

RenderSelectField.defaultProps = {
  label: '',
  id: `select-${uuidv1()}`,
  optionText: 'name',
  optionValue: 'value',
  meta: {},
  allowEmpty: false,
}

export default RenderSelectField
