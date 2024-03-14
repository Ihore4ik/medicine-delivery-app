import { Form } from "../../components/form/form";
import { Drug } from "../../components/drug/drug";
import "../../App.css";

export const Cart = () => {
  return (
    <div className="cart">
      <div className="form">
        <Form />
      </div>
      <div className="cart_items">
        <Drug name="some" price="100" />
        <Drug name="some" price="100" />
        <Drug name="some" price="100" />
        <Drug name="some" price="100" />
      </div>
    </div>
  );
};
