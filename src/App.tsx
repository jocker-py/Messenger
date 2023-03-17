import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";
import {AddPostType, StateType, UpdatePostTextType} from "./redux/state";
import Sidebar from "./components/Sidebar/Sidebar";
import {Path} from "./config/enums";

type AppType = {state: StateType, addPost: AddPostType, updatePostText: UpdatePostTextType}
const App = (props:AppType) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar state={props.state.sidebar}/>
        <div className='app-wrapper-content'>
          <Route path={Path.PROFILE}
                 render={() =>
                   <Profile state={props.state.profilePage} addPost={props.addPost}
                            updatePostText={props.updatePostText}/>} />
          <Route path={Path.DIALOGS} render={() => <Dialogs state={props.state.dialogsPage}/>} />
          <Route path={Path.NEWS} render={() => <News/>} />
          <Route path={Path.MUSIC} render={() => <Music/>} />
          <Route path={Path.SETTINGS} render={() => <Settings/>} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
