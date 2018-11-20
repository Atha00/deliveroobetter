import React from "react";
// import Axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Cart from "../Cart/Cart";
import { Elements } from "react-stripe-elements";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./Checkout.css";
class Checkout extends React.Component {
  state = {
    stageNumber: "",
    digit: "",
    address: "",
    cityCode: "",
    city: "",
    phoneNumber: "",
    details: ""
  };
  renderCart(cartToRend) {
    if (cartToRend) {
      return (
        <Cart
          cart={this.props.location.submittedCart}
          onChange={this.props.onChange}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    // React Router va créer un objet this.props.location
    // console.log(this.props.location.submittedCart);

    return (
      <div className="global">
        <Header />
        <div className="mainCheckout">
          <Elements>
            <CheckoutForm
              formAnswer={this.state}
              onChange={(event, element) => {
                // event : Evenement déclenché
                // target : La balise html qui a déclenché l'évènement
                // value : La valeur du champs
                this.setState({ [element]: event.target.value });
              }}
            />
          </Elements>

          <div>{this.renderCart(this.props.location.submittedCart)}</div>
        </div>
        <Link
          to={{
            pathname: "/restaurant"
          }}
        >
          <button>Aller au restaurant</button>
        </Link>
      </div>
    );
  }
}

export default Checkout;
