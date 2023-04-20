import React from "react";
import {SidebarType, StateType} from "../../redux/types";
import {connect} from "react-redux";
import Sidebar from "./Sidebar";

type MapStateToPropsType = (state: StateType) => SidebarType
const mapStateToProps: MapStateToPropsType = (state) => {
  return {
    navLinks: state.sidebar.navLinks,
    friends: state.sidebar.friends,
  };
};


const SidebarContainer = connect(mapStateToProps, {})(Sidebar);

export default SidebarContainer;