import { useState } from "react";
import pizzaData from "../database/pizzadata";
import Pizza from "./pizza";
import PopupScreen from "./popup";

export default function Menu() {
  const [selectedPizza, setSelectedPizza] = useState(null);
  // const [isPopupOpen, setPopupOpen] = useState(false);

  const handleAddChoice = (pizza) => {
    setSelectedPizza(pizza);
  };

  const closePopup = () => {
    setSelectedPizza(null); // Close the popup by resetting state
  };

  return (
    <main className="mainContainer">
      <div className="gridContainer">
        {pizzaData.map((pizza, index) => (
          <Pizza key={index} pizza={pizza} onAddChoice={handleAddChoice} />
        ))}
      </div>

      {selectedPizza && (
        <PopupScreen pizza={selectedPizza} onClose={closePopup} />
      )}
    </main>
  );
}

// pizza child component
