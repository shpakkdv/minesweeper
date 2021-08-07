export interface IEmptyAction<T extends string = string> {
  type: T;
}

export interface IAction<P = any, T extends string = string> extends IEmptyAction<T> {
  payload: P;
}
