import React, {Component} from "react";
import Profile from "./Profile";
import axios from "axios";
import {LinkPath} from "../../config/enums";
import {setUserProfile} from "../../redux/profile-reducer";
import {ProfileType, StateType} from "../../redux/types";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

type ProfileContainerPropsType = ProfileType & {
  setUserProfile: (userProfile: ProfileType) => void
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
      .get(LinkPath.userProfile + userId)
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

const withRouterProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(withRouterProfileContainer);