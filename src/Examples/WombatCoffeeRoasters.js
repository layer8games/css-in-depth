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
        <div className="panel">
          <p>
            Beans beans beans. We can eat beans, or we can drink beans. Coffee
            beans are grown on trees, as a nut. The nut has be taken down from
            the tree, cracked, and then the bean has to be removed, by hand.
            That means that another human has touched every single coffee bean
            that you drink!
          </p>
        </div>
        <div className="panel">
          <h2>Single-origin</h2>
          <div className="panel-body">
            We have built parternships with small farms aroun the world to
            handle-select beans at the peack of season. We then carefully roast
            in <a href="/batch-size">small batches</a> to maximize their
            potential.
          </div>
        </div>
        <div className="panel large">
          <h2>Single-origin</h2>
          <div className="panel-body">
            We have built parternships with small farms aroun the world to
            handle-select beans at the peack of season. We then carefully roast
            in <a href="/batch-size">small batches</a> to maximize their
            potential.
          </div>
        </div>
        <div>
          <p className="about-us">
            We have built a partnership with small farms around the world to
            hand-select beans at the peak of season. We then carefully roast in
            small batches to maximize their potential.
          </p>
        </div>
      </main>
      <footer className="footer">
        &copy; 2022 Wombat Coffee Roasters &mdash;
        <a href="/terms-of-use">Terms of Use</a>
      </footer>
    </>
  );
};

export default WombatCoffeeRoasters;
