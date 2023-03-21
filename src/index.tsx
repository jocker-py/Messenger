import React from 'react';
import './index.css';
import store from './redux/redux-store';
import ReactDOM from "react-dom";
import App from "./App";

export type RenderEntireThreeType = () => void;
const renderEntireThree:RenderEntireThreeType = () => {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
}

renderEntireThree();
store.subscribe(renderEntireThree);