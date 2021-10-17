import React from "react";
import { useEffect, useState, useRef } from "react";
import Button from "../../UI/button/Button";
import Card from "../card/Card";
import fakeCards from "../../constants/fakeData";
import { iterateArr, removeIndexFromArr } from "../../utils/helpersFunc";
import "./style.css";

const CardsConsole = () => {
  const [idsArray, setIdsArray] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoding, setIsLoading] = useState(true);
  const [isFronText, setIsFronText] = useState(true);
  const [scores, setScores] = useState();
  let cardsNumInRound = useRef("");

  useEffect(() => {
    const tempArrOfIds = [];
    for (const key in fakeCards) {
      tempArrOfIds.push(key);
    }
    setIdsArray(tempArrOfIds);
    cardsNumInRound.current = tempArrOfIds.length;
    setScores(tempArrOfIds.length);
    setIsLoading(false);
    // return () => {
    //   cleanup
    // }
  }, []);
  return (
    <>
      {idsArray.length > 0 && !isLoding && (
        <>
          <div className="font-20 blue text-shadow bold ls-5 text-align">
            Cards left{" "}
            <span className="yellow font-25 font-800">{`${idsArray.length}`}</span>
          </div>
          <div className="card-console-container flex justify-center">
            <Card
              frontText={fakeCards[idsArray[currentIndex]].frontText}
              backText={fakeCards[idsArray[currentIndex]].backText}
              isFronText={isFronText}
              setIsFronText={setIsFronText}
            />
          </div>
        </>
      )}
      <div>
        {idsArray.length > 0 && !isLoding && (
          <div>
            <div className="card-console-buttons flex justify-center">
              <div className="plr-10">
                <Button
                  text="X"
                  addClass="bg-pink black border"
                  onClick={() => {
                    setIdsArray(removeIndexFromArr(idsArray, currentIndex));
                    setScores(scores - 1);
                    setCurrentIndex(
                      iterateArr(idsArray.length, currentIndex, "-")
                    );
                    setIsFronText(true);
                    console.log(scores);
                  }}
                />
              </div>
              <div className="plr-10">
                <Button
                  text={<i className="fas fa-arrow-left"></i>}
                  addClass="bg-black white"
                  onClick={() => {
                    setCurrentIndex(
                      iterateArr(idsArray.length, currentIndex, "-")
                    );
                    setIsFronText(true);
                  }}
                />
              </div>
              <div className="plr-10 ">
                <Button
                  text={<i className="fas fa-arrow-right"></i>}
                  addClass="bg-black white"
                  onClick={() => {
                    setCurrentIndex(
                      iterateArr(idsArray.length, currentIndex, "+")
                    );
                    setIsFronText(true);
                  }}
                />
              </div>
              <div className="plr-10 ">
                <Button
                  text="V"
                  addClass="bg-green white border"
                  onClick={() => {
                    setIdsArray(removeIndexFromArr(idsArray, currentIndex));
                    setCurrentIndex(
                      iterateArr(idsArray.length, currentIndex, "-")
                    );
                    setIsFronText(true);
                    console.log(scores);
                  }}
                />
              </div>
            </div>
            <div className="flex justify-center ptb-10">
              <div>
                <div className="font-20 yellow text-shadow font-600 ls-5 text-align">
                  {`${scores - idsArray.length}`}{" "}
                  <span class="blue font-500 ">/</span>{" "}
                  {`${cardsNumInRound.current}`}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CardsConsole;
