import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import axios from "axios";
import "./CheckoutForm.css";

const style = {
  base: {
    color: "#32325d",
    lineHeight: "18px",
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: "antialiased",
    fontSize: "16px",
    "::placeholder": {
      color: "#aab7c4"
    },
    border: "solid 1px #333333"
  },
  invalid: {
    color: "#fa755a",
    iconColor: "#fa755a"
  }
};

class CheckoutForm extends Component {
  handleSubmit = event => {
    // On empêche le formulaire d'être envoyé grâce à `event.preventDefault();`
    event.preventDefault();
    console.log(this.props.formAnswer);
    // On utilise la fonction createToken pour envoyer la demande de Tokenization à Stripe
    this.props.stripe
      .createToken({
        name: "Xavier Colombel",
        address_line1: "42, rue des Orteaux"
      })
      .then(({ token }) => {
        console.log("Token:", token);
        // On poste l'objet Token à notre back-end
        axios
          .post("https://d4a49429.ngrok.io/api", {
            token
          })
          .then(function(response) {
            console.log("response.data:", response.data);
          })
          .catch(function(error) {
            console.log(error);
          });
      });
  };

  render() {
    return (
      <div className="bodyCheckout">
        <h3>Adresse de livraison</h3>
        <form className="checkout-form" onSubmit={this.handleSubmit}>
          <div style={{ width: "100%" }}>
            <div className="checkout-line">
              <div className="line-component">
                <label className="component">
                  Etage et numéro d'appartement
                </label>
                <br />
                <input
                  className="component"
                  type="text"
                  placeholder="ex:Appartement n°15"
                  onChange={event => {
                    this.props.onChange(event, "stageNumber");
                  }}
                  // value={this.state.stageNumber}
                />
              </div>
              <div className="line-component">
                <label className="component">Digicode</label>
                <br />
                <input
                  className="component"
                  type="text"
                  placeholder="ex:B123"
                  onChange={event => this.props.onChange(event, "digit")}
                  // value={this.state.digit}
                />
                <br />
              </div>
            </div>

            <div>
              <label className="component">Adresse</label>
              <br />
              <input
                className="component"
                type="text"
                placeholder="ex:100 Rue de Rivoli"
                onChange={event => this.props.onChange(event, "address")}
                // value={this.state.address}
              />
              <br />
              <p className="component">
                Inclut le nom de votre rue et le numéro de votre bâtiment
              </p>
            </div>
            <div>
              <label>Code postal</label>
              <br />
              <input
                type="text"
                placeholder="ex:75001"
                onChange={event => this.props.onChange(event, "cityCode")}
                // value={this.state.cityCode}
              />
              <br />
              <label>Ville</label>
              <br />
              <input
                type="text"
                placeholder="ex:Paris"
                onChange={event => this.props.onChange(event, "city")}
                // value={this.state.city}
              />
              <br />
            </div>
            <div>
              <label>Numéro de téléphone</label>
              <br />
              <input
                type="text"
                placeholder="+33 9 77 55 98 89"
                onChange={event => this.props.onChange(event, "phoneNumber")}
                // value={this.state.phoneNumber}
              />
              <br />
            </div>
            <div>
              <label>Instructions pour votre livreur ?</label>
              <br />
              <input
                type="textarea"
                placeholder="ex:Porte juste à coté du bar à Junky lorsque vous arrivez."
                onChange={event => this.props.onChange(event, "details")}
                // value={this.state.details}
              />
              <br />
            </div>
            <div
              style={{
                border: "solid 1px #333333",
                padding: 10,
                borderRadius: 3
              }}
            >
              <CardElement style={style} />
            </div>
            <button type="submit">Confirmer &amp; payer</button>
          </div>
        </form>
      </div>
    );
  }
}
// On injecte les fonctionnalités de Stripe dans CheckoutForm grâce à la logique de High Order Component (HOC)
export default injectStripe(CheckoutForm);
