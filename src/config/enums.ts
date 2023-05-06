export enum Path {
  PROFILE = "/profile",
  DIALOGS = "/dialogs",
  MUSIC = "/music",
  SETTINGS = "/settings",
  NEWS = "/news",
  USERS = "/users",
  USER_PROFILE = "/profile/:userId?",
  LOGIN = "/login",
}

export enum ActionType {
  addPost = "ADD-POST",
  updateNewPost = "UPDATE-NEW-POST",
  updateNewMessageText = "UPDATE-NEW-MESSAGE-TEXT",
  sendMessage = "SEND-MESSAGE",
  setUsers = "SET-USERS",
  follow = "FOLLOW",
  unfollow = "UNFOLLOW",
  setTotalUsersCount = "SET-TOTAL-USERS-COUNT",
  setCurrentPage = "SET-CURRENT-PAGE",
  toggleFetching = "TOGGLE-FETCHING",
  setUserProfile = "SET-USER-PROFILE",
  setAuthData = "SET-AUTH-DATA",
  togglePendingFollow = "TOGGLE-PENDING-FOLLOW",
}

export enum EndPoint {
  root = "https://social-network.samuraijs.com/api/1.0/",
  users = "users/",
  profile = "profile/",
  status = "profile/status/",
  authMe = "auth/me",
  follow = "follow/",
}