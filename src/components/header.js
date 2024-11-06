import SeeMenu from "../components/button";

// Header
export default function Header() {
  return (
    <header className="header">
      {/* <div className="brandContainer">
        <img
          src="/asserts/img/pizza.png"
          alt="brand-logo"
          className="brand"
        ></img>
      </div> */}
      {/* <div className="bg-video">
        <video Autoplay loop className="video">
          <source src="/asserts/img/pizza.mp4"></source>
        </video>
      </div> */}
      <h1 className="primaryHeading">
        <span className="brandName">Jk Pizza hut</span>
        <span className="slogan">Get your choice now</span>
        <SeeMenu />
      </h1>
    </header>
  );
}
