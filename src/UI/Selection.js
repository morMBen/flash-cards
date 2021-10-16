import React from "react";

import { messages, buttonTexts, onClick } from "../constants/messages";
import MediumHeading from "../UI/MediumHeading";
import Button from "../UI/button/Button";
const Selection = ({ current, setCurrent }) => {
  return (
    <div>
      <div className="mtb-10 flex justify-center">
        <MediumHeading addClass="white text-shadow " text={messages[current]} />
      </div>
      <div className="mtb-10 flex justify-center">
        <div className="plr-10">
          <Button
            text={buttonTexts[current].left}
            addClass="bg-green border white"
            onClick={() => {
              setCurrent(onClick[current].left);
            }}
          />
        </div>
        {buttonTexts[current].num > 2 && (
          <div className="plr-10">
            <Button
              text={buttonTexts[current].center}
              addClass="bg-yellow border"
              onClick={() => {
                setCurrent(onClick[current].center);
              }}
            />
          </div>
        )}
        {buttonTexts[current].num > 1 && (
          <div className="plr-10">
            <Button
              text={buttonTexts[current].right}
              addClass="bg-pink border"
              onClick={() => {
                setCurrent(onClick[current].right);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Selection;
