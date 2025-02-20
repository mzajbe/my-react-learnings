import { useState } from "react";

<style></style>;

const WriteSomethingToDisplay = () => {
  const [massage, setMassage] = useState("");
  const [displayMessage, setDisplayMessage] = useState("");
  return (
    <div>
      <input
        onChange={(e) => setMassage(e.target.value)}
        type="text"
        name=""
        id="massage"
        value={massage}
        style={{
          width: "200px",
          height: "40px",
          marginBottom: "10px",
        }}
      />

      <button
        onClick={() => {
          setDisplayMessage(massage);
          setMassage("");
        }}
      >
        Enter
      </button>

      <div
        style={{
          height: "100px",
          width: "300px",
          backgroundColor: "purple",
        }}
      >
        {displayMessage}
      </div>
    </div>
  );
};

export default WriteSomethingToDisplay;
