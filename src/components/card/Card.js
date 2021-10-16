import MediumHeading from "../../UI/MediumHeading";

import "./style.css";

const Card = ({ frontText, backText, isFronText, setIsFronText }) => {
  return (
    <div
      onClick={() => {
        setIsFronText(!isFronText);
      }}
      className={`card-container flex align-center justify-center capitalize ${
        isFronText ? "bg-turquoise" : "bg-white"
      }`}
    >
      <MediumHeading
        addClass="black "
        text={isFronText ? frontText : backText}
        backText={backText}
      />
    </div>
  );
};

export default Card;
