import React, {Component} from "react";
import Profile from "./Profile";
import axios from "axios";
import {EndPoint} from "../../config/enums";
import {setUserProfile} from "../../redux/profile-reducer";
import {ProfileType, StateType, UserProfileType} from "../../redux/types";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

type ProfileContainerPropsType = ProfileType & {
  setUserProfile: (userProfile: UserProfileType) => void
  match: {
    params: {
      userId: number;
    }
  }
}

class ProfileContainer extends Component<ProfileContainerPropsType> {
  componentDidMount() {
    const userId = this.props.match.params.userId || 2;
    axios
      .get(EndPoint.userProfile + userId, {
        withCredentials: true,
      })
      .then(res => this.props.setUserProfile(res.data));
  }

  componentWillUnmount() {
    this.props.setUserProfile(null);
  }

  render() {
    return <Profile {...this.props}/>;
  }
}

type MapStateToPropsType = (state: StateType) => ProfileType;
const mapStateToProps: MapStateToPropsType = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    userProfile: state.profilePage.userProfile,
  };
};

const withRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withRouterProfileContainer);