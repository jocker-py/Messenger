import {PostType} from "../components/Profile/MyPosts/Post/Post";
import {MessageType} from "../components/Dialogs/Message/Message";
import {DialogType} from "../components/Dialogs/Dialog/Dialog";
import {NavbarLinkType} from "../components/Sidebar/Navbar/Navbar";
import {FriendType} from "../components/Sidebar/Friends/Friends";
import {Types} from "../config/enums";

export type ProfilePageType = {posts: PostType[], newPostText: string};
export type DialogsPageType = {messages: MessageType[], dialogs: DialogType[], newMessageText: string};
export type SidebarType = {navLinks: NavbarLinkType[], friends: FriendType[]};
export type StateType = { sidebar: SidebarType, profilePage: ProfilePageType, dialogsPage: DialogsPageType };

export type ActionType = Types.addPost | Types.updateNewPost | Types.updateNewMessageText | Types.sendMessage;
export type IAction = {type: ActionType, text?:string}
export type DispatchType = (action: IAction) => void;