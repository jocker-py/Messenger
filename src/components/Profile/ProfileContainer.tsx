import React, {Component} from "react";
import Profile from "./Profile";
import {setUserProfile} from "../../redux/profile-reducer";
import {ProfileType, StateType, UserProfileType} from "../../redux/types";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & {
  match: {
    params: {
      userId: number
    }
  }
};

class ProfileContainer extends Component<ProfileContainerPropsType> {
  componentDidMount() {
    const userId = this.props.match.params.userId || 343434;
    usersAPI
      .getProfile(userId)
      .then(data => this.props.setUserProfile(data));
  }

  componentWillUnmount() {
    this.props.setUserProfile(null);
  }

  render() {
    return <Profile {...this.props}/>;
  }
}

type MapStateToPropsType = ProfileType;
const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    userProfile: state.profilePage.userProfile,
  };
};

type MapDispatchToPropsType = {
  setUserProfile: (userProfile: UserProfileType) => void
}

// @ts-ignore
const withRouterProfileContainer = withRouter(ProfileContainer);

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, {setUserProfile})(withRouterProfileContainer);