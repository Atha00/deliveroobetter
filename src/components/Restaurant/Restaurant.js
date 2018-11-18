import React from "react";
import axios from "axios";
import "./Restaurant.css";
import Header from "../Header/Header";
import RestaurantHeader from "../RestaurantHeader/RestaurantHeader";
import Menu from "../Menu/Menu";

class Restaurant extends React.Component {
  state = {
    restaurant: {},
    menu: {},
    cart: []
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
            <Menu
              menu={this.state.menu}
              cart={this.state.cart}
              addItems={(id, label, price) => {
                const newCart = [...this.state.cart];
                let existCart = false;
                for (let i = 0; i < newCart.length; i++) {
                  if (newCart[i].id === id) {
                    newCart[i].quantity++;
                    existCart = true;
                  }
                }
                if (existCart === false) {
                  newCart.push({
                    quantity: 1,
                    id: id,
                    title: label,
                    price: price
                  });
                }

                this.setState({
                  cart: newCart
                });
              }}
              onChange={(id, qty) => {
                const newCart = [...this.state.cart];
                for (let i = 0; i < newCart.length; i++) {
                  if (newCart[i].id === id) {
                    newCart[i].quantity = newCart[i].quantity + qty;
                    if (newCart[i].quantity < 1) {
                      newCart.splice(i, 1);
                    }
                  }
                }
                this.setState({
                  cart: newCart
                });
              }}
            />
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
