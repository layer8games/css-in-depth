import React from "react";
import runner from "../../assets/runner.png";
import shoes from "../../assets/shoes.png";
import "./RunningTips.css";

const RunningTips = () => {
  return (
    <body>
      <div className="container">
        <header>
          <h1>Franklin Running Club</h1>
        </header>
        <main className="main clearfix">
          <h2>Running Tips</h2>
          <div>
            <div className="media">
              <img className="media-image" src={runner} alt="" />
              <div className="media-body">
                <h4>Strength</h4>
                <p>
                  Strength training is an important part of injury prevention.
                  Focus on your core&mdash; especially your abs and glutes.
                </p>
              </div>
            </div>
            <div className="media">
              <img className="media-image" src={shoes} alt="" />
              <div className="media-body">
                <h4>Cadence</h4>
                <p>
                  Check your stride turnover. The most efficient runners take
                  about 180 steps per minute.
                </p>
              </div>
            </div>
            <div className="media">
              <img className="media-image" src={shoes} alt="" />
              <div className="media-body">
                <h4>Change it up</h4>
                <p>
                  Don't run the same every time you hit the road. Vary your
                  pace, and vary the distance of your runs.
                </p>
              </div>
            </div>
            <div className="media">
              <img className="media-image" src={runner} alt="" />
              <div className="media-body">
                <h4>Focus on form</h4>
                <p>
                  Run tall but relaxed. Your feet should hit the ground beneath
                  your hips, not out in the front of you.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </body>
  );
};

export default RunningTips;
