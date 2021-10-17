import React from "react";
import { useState, useEffect, Fragment } from "react";
import Card from "../card/Card";
import { fetchAllCards } from "../../utils/api/Api";

const CardsList = () => {
  const [allCards, setAllCards] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [currentSelected, setCurrentSelected] = useState(null);
  const [isFrontText, setIsFrontText] = useState(true);
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
  const showAllCards = () => {
    return allCards.map((e, i) => {
      return (
        <div style={{ padding: "10px " }}>
          <Card
            key={i}
            frontText={e.frontText}
            backText={e.backText}
            isFronText={currentSelected !== i ? true : isFrontText}
            addClass="plr-5"
            setIsFronText={() => {
              if (currentSelected === i) {
                setIsFrontText(!isFrontText);
              } else {
                setIsFrontText(true);
                setCurrentSelected(i);
              }
            }}
            style={{
              width: "150px",
              height: "200px",
              borderWidth: `${currentSelected === i ? "5px" : "4px"}`,
              borderColor: `${
                currentSelected === i ? "var(--blue)" : "var(--green)"
              }`,
            }}
            textStyle={{ fontSize: "12px" }}
          />
        </div>
      );
    });
  };

  return (
    <div className="flex wrap justify-center" style={{}}>
      {!isLoading && showAllCards()}
    </div>
  );
};

export default CardsList;
