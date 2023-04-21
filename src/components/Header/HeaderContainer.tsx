import React, {Component} from "react";
import Header from "./Header";
import {AuthType, StateType} from "../../redux/types";
import {setAuthData} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import axios from "axios";
import {LinkPath} from "../../config/enums";

export type HeaderPropsType = AuthType & {
  setAuthData: (userId: number, email: string, login: string) => void
}

class HeaderContainer extends Component<HeaderPropsType> {
  componentDidMount() {
    axios.get(LinkPath.authMe, {
      withCredentials: true,
    }).then(res => {
      console.log(res);
      if (res.data.resultCode === 0) {
        const {id, login, email} = res.data.data;
        this.props.setAuthData(id, login, email);
      }
    });
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

export default connect(mapStateToProps, {setAuthData})(HeaderContainer);