import React from "react";
import {SidebarType, StateType} from "../../redux/types";
import {connect} from "react-redux";
import Sidebar from "./Sidebar";
import {compose} from "redux";

type MapStateToPropsType = (state: StateType) => SidebarType
const mapStateToProps: MapStateToPropsType = (state) => {
  return {
    navLinks: state.sidebar.navLinks,
    friends: state.sidebar.friends,
  };
};

export default compose<any>(connect(mapStateToProps, {}))(Sidebar)