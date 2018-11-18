import React from "react";
import axios from "axios";
import "./Restaurant.css";
import Header from "../Header/Header";
import RestaurantHeader from "../RestaurantHeader/RestaurantHeader";
import Menu from "../Menu/Menu";

class Restaurant extends React.Component {
  state = {
    restaurant: {},
    menu: {}
  };

  render() {
    return (
      <div>
        <Header />
        <div className="main">
          <div>
            <RestaurantHeader
              restoName={this.state.restaurant.name}
              restoDescription={this.state.restaurant.description}
              imageURL={this.state.restaurant.picture}
            />
          </div>
          <div className="body">
            <Menu menu={this.state.menu} />
          </div>
        </div>
      </div>
    );
  }

  //Appel à Axios après le premier render... Le setState enverra un second render :
  componentDidMount() {
    axios.get("https://deliveroo-api.now.sh/menu").then(response => {
      this.setState({
        restaurant: response.data.restaurant,
        menu: response.data.menu
      });
    });
  }
}

export default Restaurant;
