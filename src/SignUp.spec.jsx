import React from "react";
import SignUp from "./SignUp";
import { render } from "@testing-library/react";

describe("SignUp", () => {
  it("renders correctly", () => {
    const { getByLabelText } = render(<SignUp />);
    expect(getByLabelText('Email')).toHaveAttribute('name', 'email')
    expect(getByLabelText('Full name')).toHaveAttribute('name', 'name')
    expect(getByLabelText('Password')).toHaveAttribute('name', 'password')
  });
});