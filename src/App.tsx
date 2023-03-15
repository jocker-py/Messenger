import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";

import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' component={Profile} ></Route>
          <Route path='/profile' component={Dialogs} ></Route>
          <Route path='/profile' component={News} ></Route>
          <Route path='/profile' component={Music} ></Route>
          <Route path='/profile' component={Settings} ></Route>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
