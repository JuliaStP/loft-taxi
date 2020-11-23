import React from "react";
import SignIn from "./SignIn";
import { render } from "@testing-library/react";

describe("SignIn", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<SignIn />);
    expect(getByLabelText('Email')).toHaveAttribute('name', 'email')
    expect(getByLabelText('Password')).toHaveAttribute('name', 'password')
  });
});