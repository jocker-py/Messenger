import React, {Component} from "react";
import Profile from "./Profile";
import axios from "axios";
import {LinkPath} from "../../config/enums";
import {setUserProfile} from "../../redux/profile-reducer";
import {ProfileType, StateType} from "../../redux/types";
import {connect} from "react-redux";

type ProfileContainerPropsType = ProfileType & {
  setUserProfile: (userProfile: ProfileType) => void
}

class ProfileContainer extends Component<ProfileContainerPropsType> {
  componentDidMount() {
    axios
      .get(`${LinkPath.userProfile}2`)
      .then(res => this.props.setUserProfile(res.data));
  }

  render() {
    return <Profile {...this.props}/>;
  }
};

type MapStateToPropsType = (state: StateType) => ProfileType;
const mapStateToProps: MapStateToPropsType = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    userProfile: state.profilePage.userProfile,
  };
};

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);