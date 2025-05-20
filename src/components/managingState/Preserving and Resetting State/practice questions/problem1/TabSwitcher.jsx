import React, { useState } from "react";

export default function TabSwitcher() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [tab1Counter, setTab1Counter] = useState(0);
  const [tab2Counter, setTab2Counter] = useState(0);

  const resetAll = () => {
    setTab1Counter(0);
    setTab2Counter(0);
  };

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button onClick={() => setActiveTab("tab1")}> Tab 1</button>
        <button onClick={() => setActiveTab("tab2")}> Tab 2</button>
      </div>

      {activeTab === "tab1" && (
        <div>
          <h1>Tab 1 Counter: {tab1Counter}</h1>
          <button onClick={() => setTab1Counter(tab1Counter + 1)}>+1</button>
        </div>
      )}
      {activeTab === "tab2" && (
        <div>
          <h1>Tab 2 Counter: {tab2Counter}</h1>
          <button onClick={() => setTab2Counter(tab2Counter + 1)}>+1</button>
        </div>
      )}
      <button onClick={resetAll} style={{ marginTop: "20px" }}>
        Reset All
      </button>
    </div>
  );
}
