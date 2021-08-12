const LoginValidation = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "This field is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)
  ) {
    errors.username = "Invalid email address";
  }
  if (!values.password) {
    errors.password = "This field is required";
  } else if (values.password.length < 8) {
    errors.password = "Must contain at least 8 characters";
  }
  return errors;
};

export default LoginValidation;
