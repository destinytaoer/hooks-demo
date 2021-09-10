import {
  ActionType,
  ReducersMapObject,
  ReducerType,
  StateFromReducersMapObject
} from "./typings";
export default function combineReducers<
  R extends { [key: string]: ReducerType<any> }
>(reducers: R) {
  const reducerKeys = Object.keys(reducers);
  const finalReducers: ReducersMapObject = {};
  for (let i = 0; i < reducerKeys.length; i++) {
    const key = reducerKeys[i];

    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  const finalReducerKeys = Object.keys(finalReducers);

  return function combination(
    state: StateFromReducersMapObject<typeof reducers>,
    action: ActionType
  ): StateFromReducersMapObject<R> {
    let hasChanged = false;
    const nextState: any = {};
    for (let i = 0; i < finalReducerKeys.length; i++) {
      const key = finalReducerKeys[i];
      const reducer = finalReducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducer(previousStateForKey, action);

      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged =
      hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
