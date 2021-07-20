import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

jest.mock("./SignIn", () => ({
  __esModule: true,
    namedExport: jest.fn(),
    default: () => <div>Sign In</div>
  }));
jest.mock("./Map", () => ({ Map: () => <div>Map</div> }));
jest.mock("./Profile", () => ({ Profile: () => <div>Profile</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const mockStore = {
      getState: () => ({ auth: { isLoggedIn: true } }),
      subscribe: () => {},
      dispatch: () => {},
    };

    const history = createMemoryHistory();

    const { container } = render(
      <Router history={history}>
        <Provider store={mockStore}>
          <App />
        </Provider>
      </Router>
    );
    expect(container.innerHTML).toMatch("");
  });
})