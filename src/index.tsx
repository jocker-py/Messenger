import React from "react";
import "./index.css";
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "./redux/StoreContext";

export type RenderEntireThreeType = () => void;
const renderEntireThree: RenderEntireThreeType = () => {
  ReactDOM.render(
    <Provider>
      <App/>
    </Provider>,
    document.getElementById("root"),
  );
};

renderEntireThree();
store.subscribe(renderEntireThree);