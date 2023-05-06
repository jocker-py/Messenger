import React, {ChangeEvent, Component} from "react";

type ProfileStatusPropsType = {
  status: string
  updateStatus: (status: string) => void
}

type ProfileStatusStateType = {
  editMode: boolean
  text: string
}

class ProfileStatus extends Component <ProfileStatusPropsType, ProfileStatusStateType> {
  state = {
    editMode: false,
    text: this.props.status || "No status",
  };

  activeEditMode = () => {
    this.setState({editMode: true});
  };

  activeViewMode = () => {
    this.setState({editMode: false});
  };

  onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({text: e.currentTarget.value});
  };

  render() {
    return (
      this.state.editMode ? <div>
        <input value={this.state.text} onChange={this.onChangeText} onBlur={this.activeViewMode} autoFocus/>
        <button onClick={this.activeViewMode}>Save</button>
      </div> : <div>
        <span onClick={this.activeEditMode}>{this.state.text}</span>
      </div>
    );
  }
}

export default ProfileStatus;