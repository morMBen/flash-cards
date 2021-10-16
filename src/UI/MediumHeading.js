import React from "react";

const MediumHeading = ({ text, addClass }) => {
  return <div className={`ls-5 bold font-20 ${addClass}`}>{text}</div>;
};

export default MediumHeading;
