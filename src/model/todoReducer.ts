import { ActionType, ReducerType } from "./typings";
export const ADD_TODO = "ADD_TODO";

export const initalTodo: string[] = [];

export const todoReducer: ReducerType<string[]> = (
  state: string[],
  action: ActionType
) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};
