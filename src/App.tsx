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
import {DialogType} from "./components/Dialogs/Dialog/Dialog";
import {MessageType} from "./components/Dialogs/Message/Message";
import {PostType} from "./components/Profile/MyPosts/Post/Post";

type AppType = {dialogs: DialogType[], messages: MessageType[], posts: PostType[]}
const App = (props:AppType) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile' render={() => <Profile posts={props.posts}/>} />
          <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
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
