import React, {FC} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import {Path} from "./config/enums";
import {StoreType} from "./redux/redux-store";


interface IApp { store: StoreType }
const App: FC<IApp> = ({store}) => {
  const state = store.getState();
  const dispatch = store.dispatch.bind(store);
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Sidebar state={state.sidebar}/>
        <div className='app-wrapper-content'>
          <Route path={Path.PROFILE}
                 render={() =>
                   <Profile state={state.profilePage} dispatch={dispatch}/>} />
          <Route path={Path.DIALOGS} render={() => <Dialogs state={state.dialogsPage} dispatch={dispatch}/>} />
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
