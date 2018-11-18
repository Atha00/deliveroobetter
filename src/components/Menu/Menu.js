import React from "react";
import MenuSection from "../MenuSection/MenuSection";

class Menu extends React.Component {
  render() {
    const menuSections = [];
    const entries = Object.entries(this.props.menu);
    for (let i = 0; i < entries.length; i++) {
      menuSections.push(
        <MenuSection label={entries[i][0]} menuItems={entries[i][1]} />
      );
    }
    return (
      <div>
        <div>{menuSections}</div>
      </div>
    );
  }
}

export default Menu;
