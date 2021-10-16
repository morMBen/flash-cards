import React from "react";

import buttonsFlow from "../utils/buttonsFlow";
import MediumHeading from "../UI/MediumHeading";
import Button from "../UI/button/Button";
const Selection = ({ current, setCurrent }) => {
  return (
    <div>
      <div className="mtb-10 flex justify-center">
        <MediumHeading
          addClass="white text-shadow "
          text={buttonsFlow[current].message}
        />
      </div>
      <div className="mtb-10 flex justify-center">
        <div className="plr-10">
          <Button
            text={buttonsFlow[current].buttons.left}
            addClass="bg-green border white"
            onClick={() => {
              setCurrent(buttonsFlow[current].onClick.left);
            }}
          />
        </div>
        {buttonsFlow[current].buttons.num > 2 && (
          <div className="plr-10">
            <Button
              text={buttonsFlow[current].buttons.center}
              addClass="bg-yellow border"
              onClick={() => {
                setCurrent(buttonsFlow[current].onClick.center);
              }}
            />
          </div>
        )}
        {buttonsFlow[current].buttons.num > 1 && (
          <div className="plr-10">
            <Button
              text={buttonsFlow[current].buttons.right}
              addClass="bg-pink border"
              onClick={() => {
                setCurrent(buttonsFlow[current].onClick.right);
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Selection;
