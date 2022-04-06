import React, { useState } from "react";
import "./Form.css";
function Form() {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmailAddress, setEnteredEmailAddress] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const enteredFirstNameInputHandler = (e) => {
    setEnteredFirstName(e.target.value);
  };
  const enteredLastNameInputHandler = (e) => {
    setEnteredLastName(e.target.value);
  };
  const enteredEmailAddressInputHandler = (e) => {
    setEnteredEmailAddress(e.target.value);
  };
  const enteredPasswordInputHandler = (e) => {
    setEnteredPassword(e.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const signUpData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmailAddress,
      password: enteredPassword,
    };
    console.log(signUpData);
    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredEmailAddress("");
    setEnteredPassword("");
  };
  return (
    <div className="form-component">
      <p className="blue">
        <strong>Try it for 7 days</strong> than $20/mo. thereafter
      </p>
      <div className="form-wrapper">
        <div className="form">
          <form onSubmit={submitHandler}>
            <input
              type="text"
              value={enteredFirstName}
              placeholder="First Name"
              onChange={enteredFirstNameInputHandler}
            />{" "}
            <br />
            <input
              type="text"
              value={enteredLastName}
              placeholder="Last Name"
              onChange={enteredLastNameInputHandler}
            />
            <br />
            <input
              type="email"
              value={enteredEmailAddress}
              placeholder="Email Address"
              onChange={enteredEmailAddressInputHandler}
            />
            <br />
            <input
              type="password"
              value={enteredPassword}
              placeholder="Password"
              onChange={enteredPasswordInputHandler}
            />
            <br />
            <button className="green" type="submit">
              <strong>CLAIM YOUR FREE TRIAL</strong>
            </button>
          </form>
          <p className="grey-red">
            <span className="gray">
              By clicking the button, you are agreeing to
            </span>
            <span className="red"> our Terms and Services</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Form;
