import { useState } from "react";

import "./App.css";
import Card from "./components/card/Card";
import LargeHeading from "./UI/LargeHeading";
import Selection from "./UI/Selection";

function App() {
  const [current, setCurrent] = useState("opening");

  return (
    <div className="app-component">
      <div className="mtb-10 flex justify-center">
        <LargeHeading text="Flash cards" />
      </div>
      <Selection current={current} setCurrent={setCurrent} />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <Card />
      </div>
    </div>
  );
}

export default App;
