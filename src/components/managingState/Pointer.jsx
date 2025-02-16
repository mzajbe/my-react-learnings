// Group related state 
// https://react.dev/learn/choosing-the-state-structure

import { useState } from "react";
let a= 10;

const Pointer = () => {
  //   const [x, setX] = useState(0);
  //   const [y, setY] = useState(0);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handlePointerMove = (e) => {
    // why i use e here?
    // setX(e.clientX);
    // setY(e.clientY);

    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
      onPointerMove={handlePointerMove}
    >
      <div
        style={{
          position: "absolute",
          backgroundColor: "red",
          borderRadius: "50%",
          left: -10,
          top: -10,
          width: 20,
          height: 20,
          transform: `translate(${position.x}px,${position.y}px)`,
        }}
      ></div>
    </div>
  );
};

export default Pointer;
