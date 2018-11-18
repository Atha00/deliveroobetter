import React from "react";
import DeliverooLogo from "/Users/milok/Formation-reacteur/ReactTraining/deliveroobetter/deliveroobetter/src/assets/Delivlogo.png";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div>
        <img className="logoHeader" alt="logo" src={DeliverooLogo} />
        <hr color="lightgrey" />
      </div>
    );
  }
}

export default Header;
