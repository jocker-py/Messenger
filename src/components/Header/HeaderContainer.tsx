import React, {Component} from "react";
import Header from "./Header";
import {AuthType, StateType} from "../../redux/types";
import {setAuthData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {authAPI} from "../../api/api";

export type HeaderPropsType = AuthType & {
  setAuthData: (userId: number, email: string, login: string) => void
}

class HeaderContainer extends Component<HeaderPropsType> {
  componentDidMount() {
    authAPI
      .setAuthMe()
      .then(data => data &&
        this.props.setAuthData(data.userId, data.email, data.login));
  }

  render() {
    return <Header {...this.props}/>;
  }
}

type MapStateToPropsType = (state: StateType) => AuthType;
const mapStateToProps: MapStateToPropsType = (state) => ({
  login: state.auth.login,
  email: state.auth.email,
  userId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, {setAuthData})(HeaderContainer)