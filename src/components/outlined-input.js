import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: 200
    }
  }
}));

export default function OutlinedInput(props) {
  const classes = useStyles();
    const {fieldName, handleChange} = props;
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label={fieldName} variant="outlined" onChange={handleChange} />
    </form>
  );
}
