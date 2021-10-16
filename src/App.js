import { useState } from "react";

import "./App.css";
import Card from "./components/card/Card";
import Button from "./UI/button/Button";
import LargeHeading from "./UI/LargeHeading";
import Selection from "./UI/Selection";
import CardConsole from "./components/cardsConsole/CardsConsole";

function App() {
  const [current, setCurrent] = useState("opening");

  return (
    <div className="app-component">
      <div className="mtb-10 flex justify-center">
        <LargeHeading text="Flash cards" />
      </div>
      <Selection current={current} setCurrent={setCurrent} />

      <CardConsole />
    </div>
  );
}

export default App;
