import { useLoaderData } from "react-router-dom";
import { Drug } from "../../components/drug/drug";
import "../../App.css";

export const Shops = () => {
  const drugs = useLoaderData();
  return (
    <div className="content">
      <div className="shops">
        <div className="shop">Shop №1</div>
        <div className="shop">Shop №2</div>
        <div className="shop">Shop №3</div>
      </div>
      <div className="drugs">
        {drugs &&
          drugs.map((item, index) => (
            <Drug key={index} name={item.drugs_name} price={item.drugs_price} />
          ))}
      </div>
    </div>
  );
};
