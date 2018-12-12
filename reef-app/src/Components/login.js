import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { AppBar } from "@material-ui/core";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class Login extends React.Component {
  state = {
    spacing: "40",
    username: "",
    password: ""
  };

  handleSubmit = event => {
    console.log(this.state.username, this.state.password);
  };

  handleChange = (fieldName, event) => {
    this.setState({
      [fieldName]: event.target.value
    });
  };
  render() {
    const { classes } = this.props;
    // const { spacing } = this.state.spacing;
    return (
      <Grid className={classes.container} justify="center" spacing={40}>
        <form>
          <TextField
            label="username"
            value={this.state.username}
            onChange={event => this.handleChange("username", event)}
            className={classes.textField}
          />
          <TextField
            label="Password"
            value={this.state.Password}
            onChange={event => this.handleChange("password", event)}
            className={classes.textField}
          />
        </form>
        <Button size="large" onClick={event => this.handleSubmit(event)}>
          Login
        </Button>
        <Button size="large">create account</Button>
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
