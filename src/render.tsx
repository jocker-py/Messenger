import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, StateType} from './redux/state';

const renderEntireThree = (state:StateType) => {
  ReactDOM.render(
    <App state={state} addPost={addPost}/>,
    document.getElementById('root')
  );
}

export default renderEntireThree;