import {DispatchType, StateType} from "./types";
import {RenderEntireThreeType} from "../index";

export interface IStore {
  _state: StateType,
  getState(): StateType,
  _callSubscriber(): void,
  subscribe(observer: RenderEntireThreeType): void,
  dispatch: DispatchType;
}
