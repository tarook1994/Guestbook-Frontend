import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  colorPrimary: {
    backgroundColor: "#2c3e50"
  },
  navButton : {
    color: 'white',
    textDecoration: 'none',
    padding: "25px"
  }
}));

export default function AppBarComponent(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" classes={{ root: classes.colorPrimary }}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            Guestbook Application
          </Typography>
          <NavLink to="/login" exact className={classes.navButton}>
            Login
          </NavLink>
          <NavLink to="/register" exact className={classes.navButton}>
            Register
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
