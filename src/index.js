import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/header";
import Menu from "./components/menu";
import Text from "./components/Text";
import Footer from "./components/footer";
// App component

function App() {
  return (
    <div>
      <Header />
      <Text />
      <Menu />
      <Footer />
    </div>
  );
}

// footer

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
