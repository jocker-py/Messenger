import React, {FC} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";
import {Path} from "./config/enums";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <SidebarContainer/>
        <div className="app-wrapper-content">
          <Route path={Path.PROFILE} render={() => <Profile/>}/>
          <Route path={Path.DIALOGS} render={() => <DialogsContainer/>}/>
          <Route path={Path.USERS} render={() => <UsersContainer/>}/>
          <Route path={Path.NEWS} render={() => <News/>}/>
          <Route path={Path.MUSIC} render={() => <Music/>}/>
          <Route path={Path.SETTINGS} render={() => <Settings/>}/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>

  );
};

export default App;
