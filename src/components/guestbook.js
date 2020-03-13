import React, { useEffect, useState } from "react";
import OutlinedInput from "./outlined-input";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    height: "80%"
  }
}));

const GuestBook = props => {
  const { isAuthenticatedFromLogin: isAuthenticatedFromPreviousLogin } = props;
  const [isLoading, setIsLoading] = useState(isAuthenticatedFromPreviousLogin ? false : true);
  const [isError, setIsError] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(
    isAuthenticatedFromPreviousLogin ? true : false
  );
  const [guestMessage, setGuestMessage] = useState("");
  const classes = useStyles();

  const handleMessageChange = event => {
    setGuestMessage(event.taget.value);
  };

  let renderedComponent = null;
  if (isError) {
    renderedComponent = null;
  } else if (isLoading) {
    renderedComponent = (
      <>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.root}
        >
          <CircularProgress></CircularProgress>
        </Grid>
      </>
    );
  } else if (isAuthenticated) {
    renderedComponent = (
      <>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid item>
            <OutlinedInput
              id="outlined-full-width"
              label="Message"
              style={{ margin: 8 }}
              placeholder="Say a word..."
              multiline={true}
              fullWidth={true}
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              sizeLarge
              onChange={handleMessageChange}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </>
    );
  }

  return <>{renderedComponent}</>;
};

export default GuestBook;
