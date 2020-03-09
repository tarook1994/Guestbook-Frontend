import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import OutlinedInput from "./outlined-input";
import Button from "@material-ui/core/Button";
import axios from "axios";

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    } catch (err) {}
  };

  return (
    <Grid>
      <OutlinedInput fieldName="Email" handleChange={handleEmailChange} />
      <OutlinedInput fieldName="Password" handleChange={handlePasswordChange} />
      <Button variant="outlined" color="primary" onClick={handleSignIn}>
        Sign in
      </Button>
    </Grid>
  );
};

export default Login;
