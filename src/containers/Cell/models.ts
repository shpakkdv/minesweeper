import { IAction } from 'models';

export namespace Payload {
  export interface OpenItem {
    x: number;
    y: number;
  }
}

export namespace Action {
  export type OpenItem = IAction<Payload.OpenItem>;
}

export namespace ActionCreator {
  export type OpenItem = (x: number, y: number) => Action.OpenItem;
}
