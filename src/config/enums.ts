export enum Path {
  PROFILE = "/profile",
  DIALOGS = "/dialogs",
  MUSIC = "/music",
  SETTINGS = "/settings",
  NEWS = "/news",
  USERS = "/users",
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
}