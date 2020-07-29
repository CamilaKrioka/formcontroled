import React from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

class Form extends React.Component {
  state = {
    formData: {
      email: "",
      password: "",
    },
    submitted: false,
  };

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  handleSubmit = () => {
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000);
    });
  };

  render(props) {
    const { formData, submitted } = this.state;
    const classes = withStyles();
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Formulario de entrada
          </Typography>

          <ValidatorForm ref="form" onSubmit={this.handleSubmit}>
            <TextValidator
              className={classes.form}
              autoFocus
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email"
              onChange={this.handleChange}
              name="email"
              value={formData.email}
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "email is not valid"]}
            />
            <br />
            <TextValidator
              variant="outlined"
              margin="normal"
              fullWidth
              label="Password"
              onChange={this.handleChange}
              name="password"
              value={formData.password}
              validators={[
                "required",
                "matchRegexp:^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$",
              ]}
              errorMessages={["this field is required"]}
            />
            <br />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              className={classes.submit}
              fullWidth
              color="primary"
              variant="contained"
              type="submit"
              disabled={submitted}
            >
              {(submitted && "Your form is submitted!") ||
                (!submitted && "Sing in")}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </ValidatorForm>
        </div>
      </Container>
    );
  }
}

export default withStyles({
  paper: {
    marginTop: "theme.spacing(8)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: "theme.spacing(1)",
    backgroundColor: " theme.palette.secondary.main",
    display: "flex-grow",
  },
  form: {
    width: "100%",
    marginTop: "theme.spacing(1)",
  },
  submit: {
    margin: "theme.spacing(3, 0, 2)",
  },
})(Form);
