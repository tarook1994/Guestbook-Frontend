import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "./outlined-input";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  background: {
    backgroundColor: "#1084ba"
  }
}));

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const classes = useStyles();
  let history = useHistory();

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleSignIn = async () => {
    try {
      const signInResult = await axios.post(
        "http://localhost:8080/api/v1/users/login",
        {
          email,
          password
        }
      );
      console.log(signInResult);
      setIsLoading(false);
      if (signInResult.data.user) {
        const loginCookie = signInResult.data.token;
        localStorage.setItem("loginCookie", loginCookie);
        return history.push("/guestbook");
      }
      setIsError(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setIsError(true);
      if (err.response) {
        return setErrorMessage(err.response.data.error);
      }
      return setErrorMessage("Unexpected Error!");
    }
  };

  return (
    <Grid container justify="center" classes={{ root: classes.background }}>
      <Grid>
        {isError ? <Alert severity="error">{errorMessage}</Alert> : null}
          <OutlinedInput
            label="Email"
            onChange={handleEmailChange}
            type="text"
          />
          <OutlinedInput
            label="Password"
            type="password"
            onChange={handlePasswordChange}
          />

        <Button
          variant="outlined"
          color="primary"
          size="large"
          onClick={handleSignIn}
          disabled={isLoading}
        >
          {isLoading ? <CircularProgress> </CircularProgress> : "Sign in"}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Login;
