import React from "react";
import { useState, useEffect } from "react";
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
        <Card
          frontText={e.frontText}
          backText={e.backText}
          isFronText={isFrontText}
          setIsFronText={() => {
            if (currentSelected === i) {
              setIsFrontText(!isFrontText);
            } else {
              setCurrentSelected(i);
            }
          }}
          style={{
            width: "100px",
            height: "150px",
            borderWidth: "4px",
            borderColor: `${currentSelected === i ? "red" : "var(--green)"}`,
          }}
          textStyle={{ fontSize: "12px" }}
        />
      );
    });
  };

  return <div>{!isLoading && showAllCards()}</div>;
};

export default CardsList;
