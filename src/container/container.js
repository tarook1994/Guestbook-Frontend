import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import AppBar from "../components/app-bar";
import Login from "../components/login";
import Register from "../components/register";
import GuestBook from "../components/guestbook";

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
        <Grid container justify="center" classes={{ root: classes.background }}>
          <Route path="/login" exact render={() => <Login  />} />
          <Route path="/register" exact render={() => <Register />} />
          <Route path="/guestbook" exact render={() => <GuestBook />} />
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Container);
