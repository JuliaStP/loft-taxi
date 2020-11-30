import React from "react";

export const AuthContext= React.createContext({});

export const AuthProvider = ({children}) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const signIn = (email, password) => {
    if (email !== "mail@mail.com" || password !== "password") {
      return;
    }
    setIsLoggedIn(true);
  };

  const signOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const withAuth = (WrappedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <AuthContext.Consumer>
          {(value) => {
            return <WrappedComponent {...value} {...this.props} />;
          }}
        </AuthContext.Consumer>
      );
    }
  };
};