import React from "react";
import { setCard, getCard } from "./actions";
import { connect } from "react-redux";
import Header from "./Header";
import FormLabel from "@material-ui/core/FormLabel";
import Input from "@material-ui/core/Input";
import { MCIcon } from "loft-taxi-mui-theme";
import "./Profile.css";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  state = {
    cardNumber: "",
    expiryDate: "",
    cardName: "",
    cvc: "",
    hasCard: false,
  };

  componentDidMount() {
    // this.props.getCard();

    // setTimeout(() => {
    this.setState({ cardNumber: this.props.cardNumber });
    this.setState({ expiryDate: this.props.expiryDate });
    this.setState({ cardName: this.props.cardName });
    this.setState({ cvc: this.props.cvc });
    this.setState({ hasCard: true });
    // }, 800);
  }

  setCard = (e) => {
    e.preventDefault();
    const { cardNumber, expiryDate, cardName, cvc } = e.target;
    this.props.setCard(
      cardNumber.value,
      expiryDate.value,
      cardName.value,
      cvc.value
    );
    this.state = {
      hasCard: true,
    };
  };

  render() {
    const { cardNumber, expiryDate, cardName, cvc, hasCard } = this.state;
    return (
      <>
        <Header />
        <div className="profile-container">
          {this.props.hasCard ? (
            <div className="form profile-form">
              <h2>Profile</h2>
              <p>
                Your information has been added. You may proceed to your order
              </p>
              <button className="button">
                <Link to="./map">Go to Map</Link>
              </button>
            </div>
          ) : (
            <div className="form profile-form">
              <h2>Profile</h2>
              Method of Payment
              <form onSubmit={this.setCard} className="profile">
                <div className="col">
                  <div className="item">
                    <MCIcon className="mastercard" />
                    <FormLabel className="label">
                      Card Number:
                      <Input
                        className="input"
                        placeholder="0000 0000 0000 0000"
                        type="text"
                        name="cardNumber"
                        value={cardNumber}
                        onChange={(e) =>
                          this.setState({ cardNumber: e.target.value })
                        }
                      />
                    </FormLabel>
                    <FormLabel className="label" style={{ width: "40%" }}>
                      Expiration Date:
                      <Input
                        className="input"
                        placeholder="12/20"
                        type="text"
                        name="expiryDate"
                        value={expiryDate}
                        onChange={(e) =>
                          this.setState({ expiryDate: e.target.value })
                        }
                      />
                    </FormLabel>
                  </div>
                  <div className="item">
                    <FormLabel className="label">
                      Full Name:
                      <Input
                        className="input"
                        placeholder="USER NAME"
                        type="text"
                        name="cardName"
                        value={cardName}
                        onChange={(e) =>
                          this.setState({ cardName: e.target.value })
                        }
                      />
                    </FormLabel>
                    <FormLabel className="label" style={{ width: "40%" }}>
                      CVC:
                      <Input
                        className="input"
                        placeholder="***"
                        type="text"
                        name="cvc"
                        value={cvc}
                        onChange={(e) => this.setState({ cvc: e.target.value })}
                      />
                    </FormLabel>
                  </div>
                </div>
                <div className="btn-wrapper">
                  <button type="submit" className="button">
                    Save
                  </button>
                </div>
              </form>
            </div>
          )}
          {/* )}  */}
        </div>
      </>
    );
  }
}
export default connect(
  (state) => ({
    // cardNumber: state.card.cardNumber,
    // expiryDate: state.card.expiryDate,
    // cardName: state.card.cardName,
    // cvc: state.card.cvc,
    token: state.auth.token,
    hasCard: state.card.hasCard,
  }),
  { setCard, getCard }
)(Profile);
