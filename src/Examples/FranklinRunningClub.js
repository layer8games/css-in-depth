import React from "react";
import "./FranklinRunningClub.css";

const FranklinRunningClub = () => {
  return (
    <>
      <header>
        <h1>Franklin Running Club</h1>
      </header>
      <div className="container">
        <main className="main">
          <h2>Come join us!</h2>
          <p>
            The Franklin Running Club meets at 6:00pm every Thursday at the town
            square. Runs are three to five miles, at your own pace.
          </p>
        </main>
        <aside className="sidebar">
          <div className="widget"></div>
          <div className="widget"></div>
        </aside>
      </div>
    </>
  );
};

export default FranklinRunningClub;
