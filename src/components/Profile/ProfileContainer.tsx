import React, {Component} from "react";
import Profile from "./Profile";
import {getProfile, getProfileStatus, updateProfileStatus} from "../../redux/profile-reducer";
import {ProfileType, StateType} from "../../redux/types";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type ProfileContainerPropsType = MapStateToPropsType & MapDispatchToPropsType & {
  match: {
    params: {
      userId: number
    }
  }
};

class ProfileContainer extends Component<ProfileContainerPropsType> {
  componentDidMount() {
    const userId = this.props.match.params.userId || 2;
    this.props.getProfile(userId);
    this.props.getProfileStatus(userId);
  }

  render() {
    return <Profile {...this.props}/>;
  }
}

type MapStateToPropsType = ProfileType;
const mapStateToProps = (state: StateType): MapStateToPropsType => {
  return {
    posts: state.profilePage.posts,
    userProfile: state.profilePage.userProfile,
    profileStatus: state.profilePage.profileStatus,
  };
};

type MapDispatchToPropsType = {
  getProfile: (userId: number) => void
  getProfileStatus: (userId: number) => void
  updateProfileStatus: (status: string) => void
}


export default compose<any>(
  connect<MapStateToPropsType, MapDispatchToPropsType, {}, StateType>(mapStateToProps, {
    getProfile,
    getProfileStatus,
    updateProfileStatus,
  }),
  withRouter)(ProfileContainer);

// TODO: withAuthRedirect