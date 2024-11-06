// PizzaPopup.js
import React from "react";
// Add styles for the popup
import "./pop.css";
import Ratecard from "../components/rateCard";
const PopupScreen = ({ pizza, onClose }) => {
  if (!pizza) return null;

  return (
    <div className="popupOverlay">
      <div className="popupContent">
        <div className="flex">
          <img src={pizza.photo} alt={pizza.name} className="popupImage" />

          <div className="Pizzainfo">
            <h2 className="PopprimaryHedaing ">{pizza.name}</h2>
            <p className="Popparagarph">{pizza.description}</p>
            <p className="incredients">Ingredients: {pizza.ingredients}</p>
            <p className="size">
              {" "}
              <span className="sizes"> Small: ${pizza.price.Small}</span>{" "}
              <span className="sizes">Medium: ${pizza.price.Medium}</span>{" "}
              <span className="sizes">Large: ${pizza.price.Large}</span>
            </p>
            <button onClick={onClose} className="button">
              Close
            </button>
          </div>
          <div className="rate">
            {" "}
            <Ratecard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupScreen;
