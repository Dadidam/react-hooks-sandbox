import React, { useEffect, useState } from "react";
import { useForm } from "./useForm";
import { useFetch } from "./useFetch";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });

  useEffect(() => {
    console.log("render called");

    return () => {
      console.log("unmount");
    };
  }, [values.password, values.firstName]);

  // useEffect(() => {
  //   const onMouseMove = e => {
  //     console.log(e);
  //   };

  //   window.addEventListener("mousemove", onMouseMove);

  //   return () => {
  //     window.removeEventListener("mousemove", onMouseMove);
  //   };
  // }, []);

  // const [count, setCount] = useState(0);
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const url = `http://numbersapi.com/${count}/trivia`;
  const { data, loading } = useFetch(url);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <h3>Form Handling with Custom Hook:</h3>
      <input
        type="text"
        name="firstName"
        placeholder="first name"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="email address"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
      />
      <hr />
      <div>
        <h3>Use async fetch along with custom hooks:</h3>
        <div>{!data ? "loading..." : data}</div>
        <div>Count: {count}</div>
        <div>
          <button onClick={() => setCount(currentCount => currentCount + 1)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
