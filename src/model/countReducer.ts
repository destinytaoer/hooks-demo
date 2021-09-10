import { ActionType, ReducerType } from "./typings";
export const INCREMENT = "INCREMENT";

export const initalCount = 0;

export const countReducer: ReducerType<number> = (
  state: number,
  action: ActionType
) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};
