import React from "react";
import {StateType} from "../../redux/types";
import {connect} from "react-redux";
import Sidebar from "./Sidebar";

const mapStateToProps = (state: StateType) => {
  return {
    navLinks: state.sidebar.navLinks,
    friends: state.sidebar.friends,
  };
};

const mapDispatchToProps = (dispatch: StateType) => {
  return {};
};

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;