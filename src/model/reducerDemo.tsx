import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ComponentType,
  useReducer
} from "react";
import combineReducers from "./combineReducers";
import { countReducer, initalCount } from "./countReducer";
import { initalTodo, todoReducer } from "./todoReducer";
import { ActionType } from "./typings";

export const initalState = {
  todo: initalTodo,
  count: initalCount
};

export const reducer = combineReducers({
  todo: todoReducer,
  count: countReducer
});

export const context = createContext<
  typeof initalState & { dispatch: Dispatch<ActionType> }
>({ ...initalState, dispatch: () => {} });

export const Store = ({ children }: PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <context.Provider value={{ ...state, dispatch }}>
      {children}
    </context.Provider>
  );
};

export const WithContainer = (Component: ComponentType<any>) => {
  return () => {
    return (
      <Store>
        <Component />
      </Store>
    );
  };
};
