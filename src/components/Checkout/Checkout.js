import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Cart from "../Cart/Cart";
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
    console.log(this.props.location.submittedCart);

    return (
      <div className="global">
        <Header />
        <div className="mainCheckout">
          <div className="bodyCheckout">
            <h3>Adresse de livraison</h3>

            <form
              onSubmit={() => {
                alert(this.state.address);
                // axios.post("", {});
              }}
            >
              <div>
                <label>Etage et numéro d'appartement</label>
                <br />
                <input
                  type="text"
                  placeholder="ex:Appartement n°15"
                  onChange={event => {
                    this.setState({
                      // event : Evenement déclenché
                      // target : La balise html qui a déclenché l'évènement
                      // value : La valeur du champs
                      stageNumber: event.target.value
                    });
                  }}
                  value={this.state.stageNumber}
                />
                <br />
                <label>Digicode</label>
                <br />
                <input
                  type="text"
                  placeholder="ex:B123"
                  onChange={event => {
                    this.setState({ digit: event.target.value });
                  }}
                  value={this.state.digit}
                />
                <br />
              </div>
              <div>
                <label>Adresse</label>
                <br />
                <input
                  type="text"
                  placeholder="ex:100 Rue de Rivoli"
                  onChange={event => {
                    this.setState({ address: event.target.value });
                  }}
                  value={this.state.address}
                />
                <br />
                <p>Inclut le nom de votre rue et le numéro de votre bâtiment</p>
              </div>
              <div>
                <label>Code postal</label>
                <br />
                <input
                  type="text"
                  placeholder="ex:75001"
                  onChange={event => {
                    this.setState({ cityCode: event.target.value });
                  }}
                  value={this.state.cityCode}
                />
                <br />
                <label>Ville</label>
                <br />
                <input
                  type="text"
                  placeholder="ex:Paris"
                  onChange={event => {
                    this.setState({ city: event.target.value });
                  }}
                  value={this.state.city}
                />
                <br />
              </div>
              <div>
                <label>Numéro de téléphone</label>
                <br />
                <input
                  type="text"
                  placeholder="+33 9 77 55 98 89"
                  onChange={event => {
                    this.setState({ phoneNumber: event.target.value });
                  }}
                  value={this.state.phoneNumber}
                />
                <br />
              </div>
              <div>
                <label>Instructions pour votre livreur ?</label>
                <br />
                <input
                  type="textarea"
                  placeholder="ex:Porte juste à coté du bar à Junky lorsque vous arrivez."
                  onChange={event => {
                    this.setState({ details: event.target.value });
                  }}
                  value={this.state.details}
                />
                <br />
              </div>
              <div>
                <p>Votre commande arrivera dans 15-25 minutes.</p>
                <button type="submit">Confirmer &amp; payer</button>
              </div>
            </form>
          </div>
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
