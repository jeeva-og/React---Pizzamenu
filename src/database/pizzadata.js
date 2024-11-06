const pizzaData = [
  {
    id: 1,
    name: "Margherita",
    size: ["Small", "Medium", "Large"],
    price: { Small: 150, Medium: 250, Large: 350 },
    ingredients: ["Tomato Sauce", "Mozzarella", "Basil"],
    isAvailable: true,
    description:
      "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese,",
    photo: "/asserts/img/margeritta.jpg",
  },
  {
    id: 2,
    name: "Pepperoni",
    size: ["Small", "Medium", "Large"],
    price: { Small: 200, Medium: 300, Large: 400 },
    ingredients: ["Tomato Sauce", "Mozzarella", "Pepperoni"],
    isAvailable: true,
    description:
      "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese,",
    photo: "/asserts/img/pepperioni.jpg",
  },
  {
    id: 3,
    name: "Veggie Delight",
    size: ["Small", "Medium", "Large"],
    price: { Small: 180, Medium: 280, Large: 380 },
    ingredients: ["Bell Peppers", "Onions", "Olives", "Tomato Sauce"],
    isAvailable: true,
    description:
      "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese,",
    photo: "/asserts/img/veg-delight.jpg",
  },
  {
    id: 4,
    name: "BBQ Chicken",
    size: ["Small", "Medium", "Large"],
    price: { Small: 250, Medium: 350, Large: 450 },
    ingredients: ["BBQ Sauce", "Chicken", "Red Onions", "Mozzarella"],
    isAvailable: false, // Currently not available
    description:
      "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese,",
    photo: "/asserts/img/BBQ-piiza.jpg",
  },
  {
    id: 5,
    name: "Hawaiian",
    size: ["Small", "Medium", "Large"],
    price: { Small: 220, Medium: 320, Large: 420 },
    ingredients: ["Ham", "Pineapple", "Mozzarella", "Tomato Sauce"],
    isAvailable: true,
    description:
      "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese,",
    photo: "/asserts/img/Hawalian.jpg",
  },
  {
    id: 6,
    name: "Four Cheese",
    size: ["Small", "Medium", "Large"],
    price: { Small: 240, Medium: 340, Large: 440 },
    ingredients: ["Mozzarella", "Cheddar", "Parmesan", "Blue Cheese"],
    isAvailable: true,
    description:
      "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese,",
    photo: "/asserts/img/cheesepizza.jpg",
  },
  {
    id: 7,
    name: "Spicy Paneer",
    size: ["Small", "Medium", "Large"],
    price: { Small: 190, Medium: 290, Large: 390 },
    ingredients: ["Paneer", "Jalapenos", "Capsicum", "Mozzarella"],
    isAvailable: true,
    description:
      "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese",
    photo: "/asserts/img/paneerpizza.jpg",
  },
  {
    id: 8,
    name: "Meat Lover's Pizza",
    size: ["Small", "Medium", "Large"],
    price: { Small: 300, Medium: 400, Large: 500 },
    ingredients: ["Pepperoni", "Ham", "Bacon", "Sausage", "Mozzarella"],
    isAvailable: false,
    description:
      "pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese,",
    photo: "/asserts/img/Meatlovers.jpg",
  },
];
// return pizzaData;
export default pizzaData;


const softDrinks = [
  {
    name: "Coca-Cola",
    sizes: ["Small", "Medium", "Large"],
    price: { Small: 50, Medium: 80, Large: 100 },
    isAvailable: true,
    photo: "/assets/img/coca-cola.jpg",
    description: "Refreshing, classic cola drink with a hint of vanilla and caramel.",
  },
  {
    name: "Pepsi",
    sizes: ["Small", "Medium", "Large"],
    price: { Small: 45, Medium: 75, Large: 95 },
    isAvailable: true,
    photo: "/assets/img/pepsi.jpg",
    description: "Crisp and refreshing cola with bold flavor.",
  },
  {
    name: "Sprite",
    sizes: ["Small", "Medium", "Large"],
    price: { Small: 40, Medium: 70, Large: 90 },
    isAvailable: true,
    photo: "/assets/img/sprite.jpg",
    description: "Lemon-lime flavored soda, perfect for quenching thirst.",
  },
  {
    name: "Fanta",
    sizes: ["Small", "Medium", "Large"],
    price: { Small: 45, Medium: 75, Large: 95 },
    isAvailable: true,
    photo: "/assets/img/fanta.jpg",
    description: "Orange-flavored soda with a fruity punch.",
  },
  {
    name: "Mountain Dew",
    sizes: ["Small", "Medium", "Large"],
    price: { Small: 50, Medium: 80, Large: 100 },
    isAvailable: false,
    photo: "/assets/img/mountain-dew.jpg",
    description: "Citrus-flavored soda with a bold, refreshing taste.",
  },
];
