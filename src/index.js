import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';
//import App from "./App";
import reportWebVitals from './reportWebVitals';

// Redux: Imports
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";

// Redux: Initial State
const initialState = {
  isLogin: false,
  user: {
    username: "",
    password: "",
  },
  appLogic: {
  }
}

// Redux: Create Store
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(

  // Redux: Provider
  <Provider store={store}>

    <React.StrictMode>
      <App />
    </React.StrictMode>

  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
