import React from "react";
import "./WombatCoffeeRoaster.css";

const WombatCoffeeRoasters = () => {
  return (
    <>
      <header className="page-header">
        <h1 id="page-title" className="title">
          Wombat Coffee Roasters
        </h1>
        <nav>
          <ul id="main-nav" className="nav">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/coffees">Coffees</a>
            </li>
            <li>
              <a href="/brewers">Brewers</a>
            </li>
            <li>
              <a href="/specials" className="featured">
                Specials
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <p>
          {"Be sure to check out our "}
          <a href="/specials" className="featured">
            specials!
          </a>
        </p>
      </main>
      <footer className="footer">
        &copy; 2022 Wombat Coffee Roasters &mdash;
        <a href="/terms-of-use">Terms of Use</a>
      </footer>
    </>
  );
};

export default WombatCoffeeRoasters;
