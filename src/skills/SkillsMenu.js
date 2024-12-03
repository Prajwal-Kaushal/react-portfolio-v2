import React, { Component } from "react";
import classNames from "classnames";
import "../styles/skillsMenu.css";
import skills from "./skillsData";
import frontendIcon from "../assets/eagle-emblem.png";
import backendIcon from "../assets/hawk-emblem.png";
import dataScienceIcon from "../assets/owl-emblem.png"; // New icon for Data Science & AI

export default class SkillsMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenuItem: 1, // Default to FRONT-END
    };
  }

  handleMenuItemClick = (menuItem) => {
    this.setState({
      activeMenuItem: menuItem,
    });
  };

  renderContent = (skills) => {
    return skills.map((skill, index) => (
      <div
        key={index}
        className={`skill-sub-container-${this.state.activeMenuItem}`}
      >
        <h3>{skill.title}</h3>
        <div className="level-container">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`level-point ${
                i < skill.level ? "filled" : "unfilled"
              }`}
            />
          ))}
        </div>
      </div>
    ));
  };

  render() {
    const { activeMenuItem } = this.state;
    const menuItems = ["FRONT-END", "BACK-END", "DATA SCIENCE & AI"];

    // Select the appropriate icon based on the active menu item
    const currentIcon =
      activeMenuItem === 1
        ? frontendIcon
        : activeMenuItem === 2
        ? backendIcon
        : dataScienceIcon;

    return (
      <div className="skill-menu">
        {/* Menu items */}
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={classNames("skill-item", {
              activeSkill: activeMenuItem === index + 1,
            })}
            onClick={() => this.handleMenuItemClick(index + 1)}
          >
            <h2 className="skill-title">{item}</h2>
          </div>
        ))}
        {/* Dynamic Icon */}
        <img className="skill-icon" src={currentIcon} alt="current skill" />
        {/* Skills content */}
        <div className="skill-sub-container">
          {this.renderContent(skills[activeMenuItem])}
        </div>
      </div>
    );
  }
}
