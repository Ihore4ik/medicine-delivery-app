import { NavLink } from "react-router-dom";
import "../../App.css";

export const Header = () => {
  return (
    <header className="header">
      <h1>Drugs store</h1>
      <div className="nav">
        <NavLink to="/" className={({ isActive }) => (isActive ? "bold" : "")}>
          Main
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) => (isActive ? "bold" : "")}
        >
          Cart
        </NavLink>
      </div>
    </header>
  );
};
