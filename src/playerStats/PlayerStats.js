import React from "react";
import "../styles/playerStats.css";

const PlayerStats = () => {
  return (
    <div id="playerStats">
      <h1>Prajwal Kaushal LEVEL 100</h1>
      <div id="playerStats__lines">
        <span id="playerStats__lines__thick"></span>
        <span id="playerStats__lines__thin"></span>
      </div>
      <h2>Fullstack Developer</h2>
      <h2>Data Scientist</h2>
    </div>
  );
};

export default PlayerStats;
