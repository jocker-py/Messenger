export enum Path {
  PROFILE = "/profile",
  DIALOGS = "/dialogs",
  MUSIC = "/music",
  SETTINGS = "/settings",
  NEWS = "/news",
  USERS = "/users",
  USER_PROFILE = "/profile/:userId?",
}

export enum ActionType {
  addPost = "ADD-POST",
  updateNewPost = "UPDATE-NEW-POST",
  updateNewMessageText = "UPDATE-NEW-MESSAGE-TEXT",
  sendMessage = "SEND-MESSAGE",
  setUsers = "SET-USERS",
  toggleFollow = "TOGGLE-FOLLOW",
  setTotalUsersCount = "SET-TOTAL-USERS-COUNT",
  setCurrentPage = "SET-CURRENT-PAGE",
  toggleFetching = "TOGGLE-FETCHING",
  setUserProfile = "SET-USER-PROFILE",
  setAuthData = "SET-AUTH-DATA",
}

export enum EndPoint {
  // main = "https://social-network.samuraijs.com/api/1.0",
  users = "https://social-network.samuraijs.com/api/1.0/users/",
  userProfile = "https://social-network.samuraijs.com/api/1.0/profile/",
  authMe = "https://social-network.samuraijs.com/api/1.0/auth/me",
}