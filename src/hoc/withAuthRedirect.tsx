import React from "react";
import {connect} from "react-redux";
import {StateType} from "../redux/types";
import {Redirect} from "react-router-dom";
import {Path} from "../config/enums";

type MapStateToPropsType = {
  isAuth: boolean;
};

const mapStateToPropsForRedirect = (state: StateType): MapStateToPropsType => ({
  isAuth: state.auth.isAuth,
});

export function withAuthRedirect<T>(
  Component: React.ComponentType<T>,
) {
  const RedirectComponent = (props: MapStateToPropsType) => {
    const {isAuth, ...restProps} = props;
    if (!isAuth) return <Redirect to={Path.LOGIN}/>;
    return <Component {...restProps as T} />;
  };

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
}
