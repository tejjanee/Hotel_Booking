import "./Auth.css";
import { useAuth } from "../../Context";
import {
  validateEmail,
  validateName,
  validateNumber,
  validatePassword,
} from "../../utils";

import { loginHandler, signupHandler } from "../../services";


let isNumberValid,
  isNameValid,
  isEmailValid,
  isPasswordValid,
  isConfirmPasswordValid;

export const AuthSignup = () => {
  const { username, email, password, number, confirmPassword, authDispatch,accessToken } =
    useAuth();
  
 

  const handleNumberChange = (event) => {
    isNumberValid = validateNumber(event.target.value);
    if (isNumberValid) {
      console.log("Valid Input");
      authDispatch({
        type: "NUMBER",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Number");
    }
  };

  const handleNameChange = (event) => {
    isNameValid = validateName(event.target.value);
    if (isNameValid) {
      console.log("Valid Input");
      authDispatch({
        type: "NAME",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Name");
    }
  };

  const handleEmailChange = (event) => {
    isEmailValid = validateEmail(event.target.value);
    if (isEmailValid) {
      console.log("Valid Input");
      authDispatch({
        type: "EMAIL",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Email");
    }
  };

  const handlePasswordChange = (event) => {
    isPasswordValid = validatePassword(event.target.value);
    if (isPasswordValid) {
      console.log("Valid Input");
      authDispatch({
        type: "PASSWORD",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Password");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    isConfirmPasswordValid = validatePassword(event.target.value);
    if (isConfirmPasswordValid) {
      console.log("Valid Input");
      authDispatch({
        type: "CONFIRM_PASSWORD",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Password");
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (
      isNumberValid &&
      isNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
     const f= await signupHandler(username, number, email, password);
      // console.log(f);
      if(f===true){
        const { accessToken, username } = await loginHandler(number, password);
        authDispatch({
          type: "SET_ACCESS_TOKEN",
          payload: accessToken,
        });
        authDispatch({
          type: "SET_USER_NAME",
          payload: username,
        });
        authDispatch({
          type: "CLEAR_USER_DATA",
        });
        authDispatch({
          type: "SHOW_AUTH_MODAL",
        });
      }
    }
    authDispatch({
      type: "CLEAR_USER_DATA",
    });
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleFormSubmit}>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Mobile Number <span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={number}
            type="number"
            className="auth-input"
            maxLength="10"
            placeholder="Enter Mobile Number"
            required
            onChange={handleNumberChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Name <span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={username}
            className="auth-input"
            placeholder="Enter Name"
            required
            onChange={handleNameChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Email <span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={email}
            className="auth-input"
            placeholder="Enter Email"
            type="email"
            required
            onChange={handleEmailChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Password <span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={password}
            className="auth-input"
            placeholder="Enter Password"
            type="password"
            required
            onChange={handlePasswordChange}
          />
        </div>
        <div className="d-flex direction-column lb-in-container">
          <label className="auth-label">
            Confirm Password <span className="asterisk">*</span>{" "}
          </label>
          <input
            defaultValue={confirmPassword}
            className="auth-input"
            placeholder="Enter Password"
            type="password"
            required
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <div>
          <button className="button btn-primary btn-login cursor">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};