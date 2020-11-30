import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

jest.mock("./SignIn", () => ({
  __esModule: true,
    namedExport: jest.fn(),
    default: () => <div>Sign In</div>
  }));
jest.mock("./Map", () => ({ Map: () => <div></div> }));
jest.mock("./Profile", () => ({ Profile: () => <div>Profile</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch("default");
  });

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const { getByText, container } = render(<App />);
      fireEvent.click(getByText('Sign In'));
      expect(container.innerHTML).toMatch("Sign In");
      fireEvent.click(getByText('Map'));
      expect(container.innerHTML).toMatch("");
      fireEvent.click(getByText('Profile'));
      expect(container.innerHTML).toMatch("Profile");
    });
  });
});