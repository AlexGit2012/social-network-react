import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./Components/Redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import SamuraiJSApp from "./App";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJSApp/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
