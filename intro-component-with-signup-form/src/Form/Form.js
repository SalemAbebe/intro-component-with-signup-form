import React, { useState } from "react";
import "./Form.css";

function Form() {
  // OPTION 1
  //  set states for individual input fields

  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmailAddress, setEnteredEmailAddress] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isValid, setIsValid] = useState(true);

  // input change handler function
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

  // submit handler function
  const submitHandler = (event) => {
    event.preventDefault();
    const signUpData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmailAddress,
      password: enteredPassword,
    };

    console.log(signUpData);
    if (
      enteredFirstName.trim().length === 0 ||
      enteredLastName.trim().length === 0 ||
      enteredEmailAddress.trim().length === 0 ||
      enteredPassword.trim().length === 0
    ) {
      setIsValid(false);
      console.log(isValid);
    }
    setEnteredFirstName("");
    setEnteredLastName("");
    setEnteredEmailAddress("");
    setEnteredPassword("");
  };
  // "required" used as input validator

  //   // firstName validator fun.
  //   const minMaxLength = (text, minLength, maxLength) => {
  //     let result = !text || text.length < minLength;
  //     if (maxLength) result = result || text.length < minLength;
  //     return result;
  //   };
  //   // email validator fun.
  // const validEmail=(text) => {
  //     const regex = RegExp(
  //         /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  //       );

  //     return !regex.test(text);
  //   }
  //   case 'firstName':
  //   if (minMaxLength(value, 3)) {
  //     currentFormErrors[
  //       name
  //     ] = `First Name should have minimum 3 characters`;
  //   } else {
  //     delete currentFormErrors[name];
  //   }
  //   break;

  // // // // OPTION2 -----To be revised
  // // // add name attribute on each input filed
  // // set state for inputs and form error
  // const [user, setUser] = useState({});
  // const [formErrors, setFormErrors] = useState({});

  // // // create a single function to handle input change

  // const inputChangeHandler = (e) => {
  //   const { name, value } = e.target;
  //   let formErrors = this.state.formErrors;
  //   switch (name) {
  //     case "firstName":
  //       setUser({ ...user, firstName: value });

  //       if (minMaxLength(value, 2)) {
  //         currentFormErrors[
  //           name
  //         ] = `First Name should have minimum 3 characters`;
  //       } else {
  //         delete currentFormErrors[name];
  //       }
  //       break;
  //     case "lastName":
  //       setUser({ ...user, lastName: value });
  //       if (minMaxLength(value, 3)) {
  //         currentFormErrors[
  //           name
  //         ] = `Last Name should have minimum 2 characters`;
  //       } else {
  //         delete currentFormErrors[name];
  //       }
  //       break;
  //     case "email":
  //       setUser({ ...user, email: value });
  //       if (!value || validEmail(value)) {
  //         currentFormErrors[name] = `Email address is invalid`;
  //       } else {
  //         userExists(value).then((result) => {
  //           if (result) {
  //             currentFormErrors[name] =
  //               "The email is already registered. Please use a different email.";
  //           } else {
  //             delete currentFormErrors[name];
  //           }
  //         });
  //       }
  //       break;
  //     case "password":
  //       setUser({ ...user, password: value });
  //       break;
  //   }
  //   console.log(user);
  // };
  // // validate firstNAme input length
  // const minMaxLength = (text, minLength, maxLength) => {
  //   let result = !text || text.length < minLength;
  //   if (maxLength) result = result || text.length < minLength;
  //   return result;
  // };

  // // validate email format
  // const validEmail = (text) => {
  //   const regex = RegExp(
  //     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  //   );

  //   return !regex.test(text);
  // };
  // // set form errors state
  // XXXXXXXXXXXXXXXXXXXXXXXXXXXx OPtion 2 to be continued XXXXXXXXXXXXXX

  // // Option3

  // //  set states for individual input fields

  // const [enteredFirstName, setEnteredFirstName] = useState("");
  // const [enteredLastName, setEnteredLastName] = useState("");
  // const [enteredEmailAddress, setEnteredEmailAddress] = useState("");
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [isValid, setISValid] = useState(true);

  // // input change handler function
  // const enteredFirstNameInputHandler = (e) => {
  //   setEnteredFirstName(e.target.value);
  // };
  // const enteredLastNameInputHandler = (e) => {
  //   setEnteredLastName(e.target.value);
  // };
  // const enteredEmailAddressInputHandler = (e) => {
  //   setEnteredEmailAddress(e.target.value);
  // };
  // const enteredPasswordInputHandler = (e) => {
  //   setEnteredPassword(e.target.value);
  // };
  // // submit handler function
  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   const signUpData = {
  //     firstName: enteredFirstName,
  //     lastName: enteredLastName,
  //     email: enteredEmailAddress,
  //     password: enteredPassword,
  //   };
  //   if (enteredFirstName.trim().length === 0) {
  //     setISValid(false);
  //     return;
  //   }
  //   console.log(signUpData);
  //   setEnteredFirstName("");
  //   setEnteredLastName("");
  //   setEnteredEmailAddress("");
  //   setEnteredPassword("");
  // };

  return (
    <div className="form-component">
      <p className="blue">
        <strong>Try it for 7 days</strong> than $20/mo. thereafter
      </p>
      <div className="form-wrapper">
        <div className="form">
          <form onSubmit={submitHandler}>
            <input
              style={{
                borderColor: !isValid ? "red" : "rgb(118, 118, 118)",
                // background: !isValid ? "blue" : "yellow",
              }}
              type="text"
              // name="firstName"
              value={enteredFirstName}
              placeholder="First Name"
              onChange={enteredFirstNameInputHandler}
              // onBlur={inputChangeHandler}

              // required
            />{" "}
            {!isValid ? <p style={{ color: "blue" }}>please write </p> : null}
            <br />
            <input
              style={{ borderColor: !isValid ? "red" : "black" }}
              type="text"
              // name="lastName"
              value={enteredLastName}
              placeholder="Last Name"
              onChange={enteredLastNameInputHandler}
              // onBlur={inputChangeHandler}
              // required
            />
            <br />
            <input
              style={{ borderColor: !isValid ? "red" : "black" }}
              type="email"
              // name="email"
              value={enteredEmailAddress}
              placeholder="Email Address"
              onChange={enteredEmailAddressInputHandler}
              // onBlur={inputChangeHandler}
              // required
            />
            <br />
            <input
              style={{ borderColor: !isValid ? "red" : "black" }}
              type="password"
              // name="password"
              value={enteredPassword}
              placeholder="Password"
              onChange={enteredPasswordInputHandler}
              // onBlur={inputChangeHandler}
              // required
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
