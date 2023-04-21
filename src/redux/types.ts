import {ActionType} from "../config/enums";

export type PostType = {
  likes: number,
  message: string,
  id: number
};

export type MessageType = {
  id: number,
  message: string
};

export type DialogType = {
  id: number;
  name: string;
}

type PhotoType = {
  small: null | string
  large: null | string
}

export type UserType = {
  followed: boolean
  id: number
  name: string
  photos: PhotoType
  status: null | string
  uniqueUrlName: null | string
}

export type UsersType = {
  users: Array<UserType>
  totalUsersCount: number
  currentPage: number
  pageSize: number
  isFetching: boolean
}

export type NavbarLinkType = {
  title: string;
  href: string;
  id: number;
};

export type FriendType = {
  id: number;
  name: string;
  src: string;
}

type ContactsType = {
  github: string
  vk: string
  facebook: string
  instagram: string
  twitter: string
  website: string
  youtube: string
  mainLink: string
}
export type UserProfileType = null | {
  aboutMe: string
  userId: number
  lookingForAJob: boolean
  lookingForAJobDescription: string
  fullName: string
  contacts: ContactsType
  photos: PhotoType
}

export type ProfileType = {
  posts: Array<PostType>;
  newPostText: string;
  userProfile: UserProfileType;
};

export type AuthType = {
  userId: number | null;
  login: string | null;
  email: string | null;
  isAuth: boolean;
}

export type DialogsType = {
  messages: Array<MessageType>,
  dialogs: Array<DialogType>,
  newMessageText: string
};

export type SidebarType = {
  navLinks: Array<NavbarLinkType>,
  friends: Array<FriendType>
};

export type StateType = {
  sidebar: SidebarType,
  profilePage: ProfileType,
  dialogsPage: DialogsType,
  usersPage: UsersType,
  auth: AuthType,
};

export type IAction = {
  type: ActionType,
  text?: string,
  users?: Array<UserType>,
  id?: number,
  usersCount?: number,
  page?: number,
  isFetching?: boolean,
  userProfile?: UserProfileType
  login?: string,
  email?: string,
  userId?: number,
};
