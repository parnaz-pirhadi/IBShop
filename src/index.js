import React ,{Suspense} from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from "./resources/theme";
import {BrowserRouter} from "react-router-dom";
import {Provider as ReduxProvider} from 'react-redux'
import {ThemeProvider} from "styled-components";
import configureStore from "./redux/configureStore";
const root = ReactDOM.createRoot(document.getElementById('root'));
const store=configureStore();

root.render(
  <React.StrictMode>
      <ReduxProvider store={store}>
          <ThemeProvider theme={theme}>
              <Suspense fallback={<div/>}>
                  <BrowserRouter>
                      <App/>
                  </BrowserRouter>

              </Suspense>
          </ThemeProvider>
      </ReduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
