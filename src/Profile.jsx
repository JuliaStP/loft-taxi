import React from "react";
import { signIn, signOut } from "./actions";
import { connect } from "react-redux";
import Input from "./Input";

export class Profile extends React.Component {
  // unauth = (e) => {
  //   e.preventDefault();
  //   this.props.signOut();
  // };

  state = {
    token: "",
    cardNumber: "",
    expiryDate: "",
    cardName: "",
    cvc: "",
  };

  render() {
    const { cardNumber, expiryDate, cardName, cvc } = this.state;
    return (
      <>
        <div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <h1>Profile</h1>
              <p>Payment Method</p>
              <div>
                <fieldset>
                  <Input
                    label="Card Number"
                    type="text"
                    name="cardNumber"
                    value={cardNumber}
                    changeHandler={this.handlerInputChange}
                  />
                  <Input
                    label="Expiration date"
                    type="text"
                    name="expirationDate"
                    value={expiryDate}
                    changeHandler={this.handlerInputChange}
                  />
                </fieldset>
                <fieldset className="card">
                  <Input
                    label="Name:"
                    type="text"
                    name="cardName"
                    value={cardName}
                    changeHandler={this.handlerInputChange}
                  />
                  <Input
                    label="CVC:"
                    type="password"
                    name="cvc"
                    value={cvc}
                    changeHandler={this.handlerInputChange}
                  />
                </fieldset>
              </div>
              <button text="Save" />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export const ProfileWithConnect = connect(null, { signIn, signOut })(Profile);
