import React from "react";
import PropTypes from "prop-types";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

/**
 * Usage :
 *
 *    <Field
        name="rememberMe"
        component={RenderCheckbox}
        label="Remember me ?"
      />
 */

const RenderCheckbox = ({
  input,
  label,
  meta: { touched, error },
  isDisabled,
  customStyle,
}) => (
  <FormControl error={touched && error !== undefined}>
    <FormControlLabel
      control={
        <Checkbox
          checked={!!input.value}
          onChange={input.onChange}
          disabled={isDisabled}
          style={customStyle}
        />
      }
      label={label}
    />
    {touched && error && <FormHelperText>{error}</FormHelperText>}
  </FormControl>
);

RenderCheckbox.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    onChange: PropTypes.func,
  }).isRequired,
  label: PropTypes.string,
  isDisabled: PropTypes.bool,
  customStyle: PropTypes.shape({}),
  meta: PropTypes.shape({
    touch: PropTypes.bool,
    touched: PropTypes.bool,
    invalid: PropTypes.bool,
    error: PropTypes.string,
  }),
};

RenderCheckbox.defaultProps = {
  label: "",
  meta: {},
  isDisabled: false,
  customStyle: {},
};

export default RenderCheckbox;
