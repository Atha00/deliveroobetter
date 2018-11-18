import React, { Component } from "react";
import "./RestaurantHeader.css";

class RestaurantHeader extends Component {
  render() {
    return (
      <div className="fixWhite">
        <div className="restaurantHeaderItem">
          <div className="restaurantHeaderText">
            <h2>{this.props.restoName}</h2>
            <p>{this.props.restoDescription}</p>
          </div>
          <div className="restaurantHeaderImage">
            <img
              className="imageRestaurant"
              alt="photoRestau"
              src={this.props.imageURL}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantHeader;
