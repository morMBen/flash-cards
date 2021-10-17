import React from "react";
import { useState } from "react";
import Card from "../card/Card";
import "./style.css";

const CardsList = ({
  currentCardSelected,
  setCurrentCardSelected,
  allCards,
}) => {
  const [isFrontText, setIsFrontText] = useState(true);

  const showAllCards = () => {
    return allCards.map((e, i) => {
      return (
        <div key={i} className="card-list-card">
          <Card
            frontText={e.frontText}
            backText={e.backText}
            isFronText={currentCardSelected !== i ? true : isFrontText}
            addClass="plr-5"
            setIsFronText={() => {
              if (currentCardSelected === i) {
                setIsFrontText(!isFrontText);
              } else {
                setIsFrontText(true);
                setCurrentCardSelected(i);
              }
            }}
            style={{
              width: "150px",
              height: "200px",
              borderWidth: `${currentCardSelected === i ? "5px" : "4px"}`,
              borderColor: `${
                currentCardSelected === i ? "var(--blue)" : "var(--green)"
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
      {showAllCards()}
    </div>
  );
};

export default CardsList;
