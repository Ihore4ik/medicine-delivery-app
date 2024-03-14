import pillsImage from "../../../src/assets/images/pills.jpg";
import "../../App.css";

export const Drug = ({ name, price }) => {
  return (
    <div className="drug">
      <img src={pillsImage} alt="pills" />
      <div className="name">
        <span>{name}</span>
      </div>
      <div className="btns">
        <span>Price: {price}$</span>
        <button>Add</button>
      </div>
    </div>
  );
};
