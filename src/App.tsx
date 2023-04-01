import React, {FC} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import {Path} from "./config/enums";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App: FC = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Sidebar/>
        <div className="app-wrapper-content">
          <Route path={Path.PROFILE} render={() => <Profile/>}/>
          <Route path={Path.DIALOGS} render={() => <DialogsContainer/>}/>
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
