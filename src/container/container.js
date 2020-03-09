import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "../components/app-bar";
import Login from "../components/login";

const styles = theme => ({
  background: {
    backgroundColor: "#1084ba"
  }
});

class Container extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <AppBar />
        <Grid container justify="center" classes={{root: classes.background}}>
          <Route path="/login" exact render={() => <Login />} />
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Container);
