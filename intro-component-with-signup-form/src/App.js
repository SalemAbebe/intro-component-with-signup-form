import React, { useState } from "react";
import "./App.css";
import Form from "./Form/Form";
import Text from "./Text/Text";

function App() {
  // const [state, setState]=
  return (
    <div className="App">
      <div className="container-wrapper">
        <div className="intro-component">
          <div className="left">
            <Text />
          </div>

          <div className="right">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
