import React, {Component} from "react";
import Header from "./Header";
import {AuthType, StateType} from "../../redux/types";
import {setAuthMe} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {compose} from "redux";


export type HeaderPropsType = MapStateToPropsType & MapDispatchToPropsType

class HeaderContainer extends Component<HeaderPropsType> {
  componentDidMount() {
    this.props.setAuthMe();
  }

  render() {
    return <Header {...this.props}/>;
  }
}

type MapDispatchToPropsType = {
  setAuthMe: () => void
}
type MapStateToPropsType = AuthType;
const mapStateToProps = (state: StateType): MapStateToPropsType => ({
  login: state.auth.login,
  email: state.auth.email,
  userId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose<any>(connect(mapStateToProps, {setAuthMe}))(HeaderContainer);