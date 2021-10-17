import React from "react";

const MediumHeading = ({ text, addClass, style }) => {
  return (
    <div className={`ls-5 bold font-20 ${addClass}`} style={style}>
      {text}
    </div>
  );
};

export default MediumHeading;
