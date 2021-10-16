import { useState } from "react";
import axios from "axios";
import "./App.css";

import LargeHeading from "./UI/LargeHeading";
import Selection from "./UI/Selection";
import CardConsole from "./components/cardsConsole/CardsConsole";
import Button from "./UI/button/Button";
import {
  fetchAllCards,
  fetchCardById,
  deleteCard,
  addCard,
  editCard,
} from "./utils/api/Api";

function App() {
  const [current, setCurrent] = useState("opening");

  const getFunc = async () => {
    const data = await editCard(2, {
      frontText: "Mordi2",
      backText: "Mardochei2",
    });
    console.log(data);
    // const data = await axios.post(
    //   "https://616b302016c3fa0017171619.mockapi.io/cards",
    //   { frontText: "brr2", backText: "brr2" }
    // );
    // console.log(data.data);
    // return data.data[0];
  };

  return (
    <div className="app-component">
      <div className="mtb-10 flex justify-center">
        <LargeHeading text="Flash cards" />
      </div>
      <Selection current={current} setCurrent={setCurrent} />
      <CardConsole />
      <Button text="get test" onClick={getFunc} />
    </div>
  );
}

export default App;
