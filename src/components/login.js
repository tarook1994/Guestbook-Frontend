import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import OutlinedInput from "./outlined-input";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      setIsError(false);
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
      if (err.response) {
        return setErrorMessage(err.response.data.error);
      }
      return setErrorMessage("Unexpected Error!");
    }
  };

  return (
    <Grid>
      {isError ? <Alert severity="error">{errorMessage}</Alert> : null}

      <OutlinedInput
        fieldName="Email"
        handleChange={handleEmailChange}
        type="text"
      />
      <OutlinedInput
        fieldName="Password"
        handleChange={handlePasswordChange}
        type="password"
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={handleSignIn}
        disabled={isLoading}
      >
        {isLoading ? <CircularProgress> </CircularProgress> : "Sign in"}
      </Button>
    </Grid>
  );
};

export default Login;
