import React, {FC} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";
import {Path} from "./config/enums";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer/>
        <SidebarContainer/>
        <div className="app-wrapper-content">
          <Route path={Path.USER_PROFILE} render={() => <ProfileContainer/>}/>
          {/*<Route path={Path.PROFILE} render={() => <ProfileContainer/>}/>*/}
          <Route path={Path.DIALOGS} render={() => <DialogsContainer/>}/>
          <Route path={Path.USERS} render={() => <UsersContainer/>}/>
          <Route path={Path.NEWS} render={() => <News/>}/>
          <Route path={Path.MUSIC} render={() => <Music/>}/>
          <Route path={Path.SETTINGS} render={() => <Settings/>}/>
          <Route path={Path.LOGIN} render={() => <Login/>}/>
        </div>
        <Footer/>
      </div>
    </BrowserRouter>

  );
};

export default App;
