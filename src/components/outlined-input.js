import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 400
    }
  }
}));

export default function OutlinedInput(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TextField
        required
        onSubmit={null}
        id="outlined-basic"
        variant="outlined"  
        {...props}
      />
    </div>
  );
}
