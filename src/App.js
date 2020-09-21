import React, { useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Navbar from "./components/layout/Navbar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import store from './store';
import {Provider} from 'react-redux'
//! IMPORTS END

const App = () => {
  useEffect(() => {
    M.AutoInit();
    //eslint-disable-next-line
  }, []);
  //console.log("in app js")
  return (
    <Provider store={store}>
      <Navbar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Provider>
  );
};

export default App;
