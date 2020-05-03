import React, { useState } from "react";
import { useForm } from "./useForm";

const App = () => {
  const [{ count1, count2 }, setCount] = useState({ count1: 10, count2: 20 });
  const [values, handleChange] = useForm({ email: "", password: "" });

  return (
    <div>
      <h3>Counters (plain useState hook usage):</h3>
      <div>
        <button
          onClick={() =>
            setCount(currentState => ({
              ...currentState,
              count2: currentState.count2 + 1
            }))
          }
        >
          +
        </button>
      </div>
      <div>Count 1: {count1}</div>
      <div>Count 2: {count2}</div>
      <hr />
      <h3>Form Handling with Custom Hook:</h3>
      <input
        type="text"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
