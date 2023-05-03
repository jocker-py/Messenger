import React from "react";
import {connect} from "react-redux";
import {StateType} from "../redux/types";
import {Redirect} from "react-router-dom";
import {Path} from "../config/enums";

type MapStateToPropsType = {
  isAuth: boolean
}

const mapStateToPropsForRedirect = (state: StateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
});


export const withAuthRedirect = (Component: React.Component) => {
  class RedirectComponent extends React.Component {
    render() {
      // @ts-ignore
      if (!this.props.isAuth) return <Redirect to={Path.LOGIN}/>;
      // @ts-ignore
      return <Component {...this.props}/>;
    }
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
};
