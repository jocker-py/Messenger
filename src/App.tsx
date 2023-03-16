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
import Footer from "./components/Footer/Footer";
import {StateType} from "./redux/state";

type AppType = {state: StateType}
const App = (props:AppType) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar links={props.state.navBar.links}/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile state={props.state.profilePage}/>} />
          <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>} />
          <Route path='/news' render={() => <News/>} />
          <Route path='/music' render={() => <Music/>} />
          <Route path='/settings' render={() => <Settings/>} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
