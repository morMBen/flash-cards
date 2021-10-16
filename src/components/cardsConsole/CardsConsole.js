import React from "react";
import { useEffect, useState } from "react";
import Button from "../../UI/button/Button";
import Card from "../card/Card";
import fakeCards from "../../constants/fakeData";
import { iterateArr } from "../../utils/helpersFunc";
const CardsConsole = () => {
  const [idsArray, setIdsArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoding, setIsLoading] = useState(true);
  const [isFronText, setIsFronText] = useState(true);
  useEffect(() => {
    const tempArrOfIds = [];
    for (const key in fakeCards) {
      tempArrOfIds.push(key);
    }
    setIdsArray(tempArrOfIds);
    setIsLoading(false);
    // return () => {
    //   cleanup
    // }
  }, []);
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        {!isLoding && (
          <Card
            frontText={fakeCards[idsArray[currentIndex]].frontText}
            backText={fakeCards[idsArray[currentIndex]].backText}
            isFronText={isFronText}
            setIsFronText={setIsFronText}
          />
        )}
      </div>
      <div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <div className="plr-10">
            <Button text="X" addClass="bg-pink black border" />
          </div>
          <div className="plr-10">
            <Button
              text={<i className="fas fa-arrow-left"></i>}
              addClass="bg-black white"
              onClick={() => {
                setCurrentIndex(iterateArr(idsArray.length, currentIndex, "-"));
                setIsFronText(true);
              }}
            />
          </div>
          <div className="plr-10 ">
            <Button
              text={<i className="fas fa-arrow-right"></i>}
              addClass="bg-black white"
              onClick={() => {
                setCurrentIndex(iterateArr(idsArray.length, currentIndex, "+"));
                setIsFronText(true);
              }}
            />
          </div>
          <div className="plr-10 ">
            <Button text="V" addClass="bg-green white border" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardsConsole;
