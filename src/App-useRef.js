import React, { useState, useRef } from "react";
import { useForm } from "./useForm";
import { HelloRef } from "./HelloRef";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });

  const inputRef = useRef();

  const [showHello, setShowHello] = useState(true);

  // able to keep even functions as a ref:
  const hello = useRef(() => console.log("Hi, there!"));

  return (
    <div>
      <>
        {/* 1 - use ref as a DOM-reference */}

        <input ref={inputRef} type="text" name="email" />
        <button
          onClick={() => {
            inputRef.current.focus();
            hello.current();
          }}
        >
          set focus
        </button>
        <hr />

        {/* 2 - use ref to manage some values w/o re-rendering components (check HelloRef.js) */}

        <button onClick={() => setShowHello(!showHello)}>
          toggle hello ref
        </button>
        {showHello && <HelloRef />}

        <input
          ref={inputRef}
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          name="firstName"
          placeholder="first name"
          value={values.firstName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
      </>
    </div>
  );
};

export default App;
