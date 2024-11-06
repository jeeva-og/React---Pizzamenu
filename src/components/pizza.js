// import pizzaData from "../database/pizzadata";
// import "../style/pizza.css";
// import Menu from "./menu";
// import "./button.css";
export default function Pizza({ pizza, onAddChoice }) {
  return (
    <div className="flexContainer">
      <img className="img" src={pizza.photo} alt={pizza.name}></img>
      <div className="pizzCard-items">
        <h1 className="primaryHedaing">{pizza.name}</h1>
        <p className="paragarph">{pizza.ingredients}</p>
        <text>$ {pizza.price?.Small}</text>
        <p className="paragarph">{pizza.description}</p>
        <button onClick={() => onAddChoice(pizza)} className="addbutton">
          Add your choice
        </button>
      </div>
    </div>
  );
}
