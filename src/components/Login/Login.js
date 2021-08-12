import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import styles from "./LoginStyles";
import { reduxForm, Field } from "redux-form";
import {
  Grid,
  Button,
  withStyles,
  Typography,
  FormControl,
  Link,
} from "@material-ui/core";
import RenderTextField from "../Form/RenderTextField";
import RenderCheckbox from "../Form/RenderCheckbox";
import { afterLogin } from "../../store/Application/ApplicationActions";
import validate from "../Form/FormValidation/LoginValidation";
import Logo from "./logo.png";

const Login = ({ classes, handleSubmit }) => {
  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid container direction="column" className={classes.paper}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid item className={classes.item}>
            <img alt="LoginLogo" className={classes.logo} src={Logo} />
          </Grid>
          <Grid item className={classes.item}>
            <Typography variant="h2">FRONT APP</Typography>
          </Grid>
          <Grid item className={classes.title}>
            <Typography variant="h4">SIGN IN</Typography>
          </Grid>
          <Grid item className={classes.item}>
            <FormControl>
              <Field
                component={RenderTextField}
                name="username"
                label="Username"
                className={classes.input}
                variant="outlined"
              />
            </FormControl>
          </Grid>
          <Grid item className={classes.item}>
            <FormControl>
              <Field
                component={RenderTextField}
                className={classes.input}
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
              />
            </FormControl>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="row"
              justify="space-evenly"
              alignItems="center"
            >
              <Grid item className={classes.forget}>
                <FormControl>
                  <Field
                    name="rememberMe"
                    color="primary"
                    component={RenderCheckbox}
                    label="Remember me ?"
                  />
                </FormControl>
              </Grid>
              <Grid item className={classes.forget}>
                <Link>{"Don't have an account? Sign Up"}</Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.button}>
            <Button variant="contained" color="primary" type="submit">
              Sign In
            </Button>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

Login.prototype = {
  classes: PropTypes.func.isRequired,
};

const formConfig = {
  form: "SIGN_IN_FORM",
  validate,
  onSubmit: (values, dispatch) => {
    dispatch(afterLogin(values));
  },
};

export default compose(reduxForm(formConfig), withStyles(styles))(Login);
