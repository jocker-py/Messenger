import React from "react";
import "./index.css";
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";

export type RenderEntireThreeType = () => void;
const renderEntireThree: RenderEntireThreeType = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById("root"),
  );
};

renderEntireThree();
store.subscribe(renderEntireThree);