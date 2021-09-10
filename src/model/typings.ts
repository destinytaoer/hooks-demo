export type ActionType = {
  type: string;
  payload?: any;
};

export type ReducerType<S = any> = (state: S, action: ActionType) => S;

export type ReducersMapObject<S = any> = {
  [K in keyof S]: ReducerType<S[K]>;
};

export type StateFromReducersMapObject<M> = M extends ReducersMapObject
  ? { [P in keyof M]: M[P] extends ReducerType<infer S> ? S : never }
  : never;

export type StatesMapObject<S = any> = {
  [K in keyof S]: S[K];
};
