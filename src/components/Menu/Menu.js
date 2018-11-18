import React from "react";
import MenuSection from "../MenuSection/MenuSection";
import Cart from "../Cart/Cart";

class Menu extends React.Component {
  render() {
    const menuSections = [];
    const entries = Object.entries(this.props.menu);
    for (let i = 0; i < entries.length; i++) {
      menuSections.push(
        <MenuSection
          label={entries[i][0]}
          menuItems={entries[i][1]}
          addItems={this.props.addItems}
        />
      );
    }
    return (
      <div>
        <Cart cart={this.props.cart} onChange={this.props.onChange} />
        <div>{menuSections}</div>
      </div>
    );
  }
}

export default Menu;
