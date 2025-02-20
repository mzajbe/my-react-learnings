//this is simple counter for count +1 or -1 from 0 to 20

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex" }}>
      <button
        onClick={() => {
          if (count < 20) {
            setCount(count + 1);
          }
        }}
      >
        count +1
      </button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        count -1
      </button>
      <div
        style={{
          marginTop: "10px",
          marginLeft: "30px",
          border: "2px solid blue",
          padding: "20px",
          height: "15px",

          backgroundColor: "slateblue",
        }}
      >
        {count}
      </div>
    </div>
  );
};

export default Counter;
