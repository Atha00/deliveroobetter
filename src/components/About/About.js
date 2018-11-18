import React from "react";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <Link to="/">Liens vers Home</Link>
      </div>
    );
  }
}

export default About;
