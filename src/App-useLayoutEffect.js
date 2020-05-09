import React, { useState, useRef, useLayoutEffect } from "react";
import { useForm } from "./useForm";
import { HelloRect } from "./HelloRect";

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

  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect());
  }, []);

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
        {showHello && <HelloRect />}

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
