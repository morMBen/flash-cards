import "./style.css";

const Button = ({ addClass, onClick, text }) => {
  return (
    <div
      onClick={onClick}
      className={`button-container radius-5 mtb-10 plr-10 shadow ${addClass}`}
    >
      <div className="font-20 ls-5 p-5 bold pointer capitalize ">{text}</div>
    </div>
  );
};

export default Button;
