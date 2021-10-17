import { useState } from "react";
// import axios from "axios";
import "./App.css";
import AddCard from "./components/addCard/AddCard";
import CardsList from "./components/CardsList/CardsList";

import LargeHeading from "./UI/LargeHeading";
import Selection from "./UI/Selection";
// import CardConsole from "./components/cardsConsole/CardsConsole";
// import {
//   fetchAllCards,
//   fetchCardById,
//   deleteCard,
//   addCard,
//   editCard,
// } from "./utils/api/Api";

function App() {
  const [current, setCurrent] = useState("opening");

  return (
    <div className="app-component">
      <div className="mtb-10 flex justify-center">
        <LargeHeading text="Flash cards" />
      </div>
      <Selection current={current} setCurrent={setCurrent} />
      {/* <CardConsole /> */}
      <AddCard />
      <CardsList />
    </div>
  );
}

export default App;
