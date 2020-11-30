import React from "react";
import { AuthProvider, AuthContext } from "./Auth";
import { render } from "@testing-library/react";
import { act } from "react-dom/test-utils";

describe("AuthContext", () => {
  describe("#signIn", () => {
    it("sets 'isLoggedIn' to false", () => {
      let isLoggedIn;
      let signIn;

      render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => {
              isLoggedIn = value.isLoggedIn;
              signIn = value.signIn;
              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      );

      expect(isLoggedIn).toBe(false);
      act(() => {
        signIn("mail@mail.com", "password");
      })
      expect(isLoggedIn).toBe(true);
    });
  });

  describe("#signOut", () => {
    it("sets 'isLoggedIn' to false", () => {
      let isLoggedIn;
      let signOut;
      let signIn;

      render(
        <AuthProvider>
          <AuthContext.Consumer>
            {(value) => {
              signOut = value.signOut;
              signIn = value.signIn;
              isLoggedIn = value.isLoggedIn;
              return null;
            }}
          </AuthContext.Consumer>
        </AuthProvider>
      );

      act(() => {
        signIn("mail@mail.com", "password");
        signOut();
      });

      expect(isLoggedIn).toBe(false);
    });
  });
});