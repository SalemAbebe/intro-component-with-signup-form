import React, { useState } from "react";
import "./Form.css";
function Form() {
  return (
    <div className="form-component">
      <p className="blue">
        <strong>Try it for 7 days</strong> than $20/mo. thereafter
      </p>
      <div className="form-wrapper">
        <div className="form">
          <form>
            <input
              type="text"
              value={0}
              placeholder="First Name"
              onChange={0}
            />{" "}
            <br />
            <input type="text" value={0} placeholder="Last Name" onChange={0} />
            <br />
            <input
              type="email"
              value={0}
              placeholder="Email Address"
              onChange={0}
            />
            <br />
            <input
              type="password"
              value={0}
              placeholder="Password"
              onChange={0}
            />
            <br />
            <button className="green">
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
