import React, { Component } from "react";
import "./OrderTaxi.css";
import { connect } from "react-redux";
import { getRoute, getAddress } from "./actions";
import FormLabel from "@material-ui/core/FormLabel";

class OrderTaxi extends Component {
  state = {
    from: "",
    to: "",
    addresses: [],
  };

  getRoute = (e) => {
    e.preventDefault();
    const { from, to } = e.target;
    this.props.getRoute(from.value, to.value);
  };

  getAddress = (e) => {
    e.preventDefault();
    const { addresses } = e.target;
    this.props.getAddress(addresses.value);
}
  render() {
    const { from, to } = this.state;
    const addresses = this.props.addresses;
    
    return (
      <div className="form order-wrapper">
        <form onSubmit={this.getRoute} className="order-taxi">
          <FormLabel className="label">
            From:
            <select
              className="order-taxi__input"
              name="from"
              value={from}
              onChange={(e) => this.setState({ from: e.target.value })}
            >
              <option onChange={this.getAddress} default disabled key="default"></option>
              {addresses.map(
                (address) =>
                  address !== this.state.to && (
                    <option key={address}>{address}</option>
                  )
              )}
            </select>
          </FormLabel>
          <FormLabel className="label">
            To:
            <select
              className="order-taxi__input"
              name="to"
              value={to}
              onChange={(e) => this.setState({ to: e.target.value })}
            >
              <option onChange={this.getAddress} default disabled key="default"></option>
              {addresses.map(
                (address) =>
                  address !== this.state.from && (
                    <option key={address}>{address}</option>
                  )
              )}
            </select>
          </FormLabel>
          <button type="submit" className="order-taxi__button">
            Order Taxi
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    addresses: state.addresses.addresses,
  }),
  { getRoute }
)(OrderTaxi);
