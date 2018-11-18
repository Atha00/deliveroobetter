import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import "./MenuSection.css";

class MenuSection extends React.Component {
  render() {
    const menuItems = [];
    for (let i = 0; i < this.props.menuItems.length; i++) {
      menuItems.push(
        <MenuItem
          id={this.props.menuItems[i].id}
          addItems={this.props.addItems}
          label={this.props.menuItems[i].title}
          description={this.props.menuItems[i].description}
          price={this.props.menuItems[i].price}
          imageURL={this.props.menuItems[i].picture}
          popular={this.props.menuItems[i].popular}
        />
      );
    }
    return (
      <div>
        <h3 className="sectionLabel">{this.props.label}</h3>
        <div className="itemsBody">{menuItems}</div>
      </div>
    );
  }
}

export default MenuSection;
