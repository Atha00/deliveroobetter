import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

class About extends React.Component {
  render() {
    if (this.props.cart.length === 0) {
      return <p>Votre panier est vide</p>;
    }
    const cartComponents = [];
    for (let i = 0; i < this.props.cart.length; i++) {
      const cartItemTitle =
        this.props.cart[i].title.length > 20
          ? this.props.cart[i].title.substring(0, 20) + "..."
          : this.props.cart[i].title;
      let priceWithCents =
        Math.round(
          Number(this.props.cart[i].price) *
            Number(this.props.cart[i].quantity) *
            100
        ) / 100;
      cartComponents.push(
        <div className="cartComponent">
          <div>
            <button
              className="buttonOnChange"
              onClick={() => {
                this.props.onChange(this.props.cart[i].id, -1);
              }}
            >
              -
            </button>
            <span>{this.props.cart[i].quantity}</span>
            <button
              className="buttonOnChange"
              onClick={() => {
                this.props.onChange(this.props.cart[i].id, 1);
              }}
            >
              +
            </button>
          </div>
          <div className="cartComponentText">
            <span>{cartItemTitle}</span>
            <span>{priceWithCents.toFixed(2) + " €"}</span>
          </div>
        </div>
      );
    }
    let subTotal = 0;
    for (let m = 0; m < this.props.cart.length; m++) {
      subTotal =
        subTotal +
        Math.round(
          this.props.cart[m].price * this.props.cart[m].quantity * 100
        ) /
          100;
    }
    let deliveryTax = 0;
    if (this.props.cart.length > 0) {
      deliveryTax = 2.5;
    }
    let total = 0;
    if (this.props.cart.length > 0) {
      total = subTotal + deliveryTax;
    }
    return (
      <div className="cartCase">
        <div>
          <Link to="/checkout">
            <button className="buttonValid">Valider mon panier</button>
          </Link>
        </div>
        <div>{cartComponents}</div>
        <hr />
        <div className="subAndDelivery">
          <span>Sous-total</span>
          <span>{subTotal.toFixed(2) + " €"}</span>
        </div>
        <div className="subAndDelivery">
          <span>Frais de livraison</span>
          <span>{deliveryTax.toFixed(2) + " €"}</span>
        </div>
        <hr />
        <div className="totalLine">
          <span>Total</span>
          <span>{total.toFixed(2) + " €"}</span>
        </div>
      </div>
    );
  }
}

export default About;
