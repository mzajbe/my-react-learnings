// https://react.dev/learn/choosing-the-state-structure


import { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      label: "input",
    },
  ]);

  const handleAddInput = () => {
    const nextId = inputs[inputs.length - 1].id + 1;
    console.log(nextId);

    setInputs([
      ...inputs,
      {
        id: nextId,
        label: "input",
      },
    ]);
  };

  console.log(inputs);
  

  //input.push will change on the main array. so, it is not good practice.
  //   we should create a new array
  // so, we will use spread operator

  return (
    <div>
      {inputs.map((input) => (
        <div key={input.id} style={{ marginBottom: "20px" }}>
          <input type="text" label={input.label}></input>
        </div>
      ))}
      <button
        style={{
          marginTop: 20,
        }}
        onClick={handleAddInput}
      >
        Add Input
      </button>
    </div>
  );
};

export default Form;
