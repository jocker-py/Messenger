import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, StateType, updatePostText} from './redux/state';

type RenderEntireThreeType = (state: StateType) => void;
const renderEntireThree:RenderEntireThreeType = (state) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} updatePostText={updatePostText}/>,
    document.getElementById('root')
  );
}

export default renderEntireThree;