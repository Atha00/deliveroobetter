import React from "react";
import Couverts from "/Users/milok/Formation-reacteur/ReactTraining/deliveroobetter/deliveroobetter/src/assets/couverts.jpg";
import "./MenuItem.css";

class MenuItem extends React.Component {
  renderImage(url) {
    if (url) {
      return <img src={this.props.imageURL} alt="image" />;
    } else {
      return <img src={Couverts} alt="couverts" />;
    }
  }
  renderPopular(star) {
    if (star) {
      return <span className="itemPop">Popular</span>;
    } else {
      return null;
    }
  }
  render() {
    const caseDescription =
      this.props.description.length > 150
        ? this.props.description.substring(0, 150) + "..."
        : this.props.description;
    return (
      <div
        className="itemCase"
        onClick={() => {
          this.props.addItems(
            this.props.id,
            this.props.label,
            this.props.price
          );
        }}
      >
        <div>
          <h4 className="itemLabel">{this.props.label}</h4>
          <p className="itemDescription">{caseDescription}</p>
          <span className="itemPrice">{this.props.price + " €"}</span>
          {this.renderPopular(this.props.popular)}
        </div>
        <div className="itemImage">{this.renderImage(this.props.imageURL)}</div>
      </div>
    );
  }
}

export default MenuItem;
