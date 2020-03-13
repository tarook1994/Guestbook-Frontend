import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import OutlinedInput from "./outlined-input";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";

const Register = props => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = event => {
    setConfirmPassword(event.target.value);
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleRegister = async () => {
    try {
      if (email !== "") {
        if (password === confirmPassword) {
          setIsLoading(true);
          const registerResult = await axios.post(
            "http://localhost:8080/api/v1/users/create-user",
            {
              name,
              email,
              password,
              confirmPassword
            }
          );
          console.log(registerResult);
          setIsError(false);
          setIsLoading(false);

        }
      }
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
    <>
      <Grid>
        {isError ? <Alert severity="error">{errorMessage}</Alert> : null}
        <OutlinedInput fieldName="Name" handleChange={handleNameChange} />
        <OutlinedInput fieldName="Email" handleChange={handleEmailChange} />
        <OutlinedInput
          fieldName="Password"
          handleChange={handlePasswordChange}
          type="password"
        />
        <OutlinedInput
          fieldName="Confirm Password"
          handleChange={handleConfirmPasswordChange}
          type="password"
        />
        <Button variant="outlined" color="primary" onClick={handleRegister}>
          {isLoading ? <CircularProgress> </CircularProgress> : "Register"}
        </Button>
      </Grid>
    </>
  );
};
export default Register;
