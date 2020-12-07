import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { theme } from "loft-taxi-mui-theme"; // Импортируем саму тему
// import { MuiThemeProvider } from "@material-ui/core/styles";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* <MuiThemeProvider theme={theme}> */}
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    {/* </MuiThemeProvider> */}
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
