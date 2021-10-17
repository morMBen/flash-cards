import { useState, useEffect } from "react";
import "./App.css";
import AddCard from "./components/addCard/AddCard";
import CardsList from "./components/CardsList/CardsList";
import { fetchAllCards } from "./utils/api/Api";

import LargeHeading from "./UI/LargeHeading";
import Selection from "./UI/Selection";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [current, setCurrent] = useState("opening");
  const [allCards, setAllCards] = useState();
  const [currentCardSelected, setCurrentCardSelected] = useState(null);

  useEffect(() => {
    const asyncFunc = async () => {
      const data = await fetchAllCards();
      setAllCards(data);
      return data;
    };
    asyncFunc();
  }, []);
  useEffect(() => {
    if (allCards) {
      setIsLoading(false);
    }
  }, [allCards]);

  return (
    <div className="app-component">
      {!isLoading && (
        <>
          <div className="mtb-10 flex justify-center">
            <LargeHeading text="Flash cards" />
          </div>
          <Selection
            allCards={allCards}
            setAllCards={setAllCards}
            currentCardSelected={currentCardSelected}
            current={current}
            setCurrent={setCurrent}
          />
          {/* <CardConsole /> */}
          <AddCard />
          {current === "cardEdit" && (
            <CardsList
              currentCardSelected={currentCardSelected}
              setCurrentCardSelected={setCurrentCardSelected}
              allCards={allCards}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
