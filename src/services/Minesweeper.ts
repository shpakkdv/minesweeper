import { GameLevel } from 'constant';
import { Field } from 'models';
import { convertDataToField } from 'utils/convertDataToField';

let minesweeper: Minesweeper = null;

export function getMinesweeper(): Minesweeper {
  if (minesweeper) {
    return minesweeper;
  }

  throw new Error('Game finished!');
}

export function startMinesweeper(url: string): Promise<Minesweeper> {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(url);

    socket.onopen = () => {
      minesweeper = new Minesweeper(socket);
      resolve(minesweeper);
    };

    socket.onclose = (event) => {
      reject(event);
    };

    socket.onerror = (event) => {
      reject(event);
    };
  });
}

export class Minesweeper {
  // TODO: type
  private callbacks: {
    resolve: (value?: any) => void;
    reject: (reason?: any) => void;
  } | null = null;

  constructor(
    private socket: WebSocket,
  ) {
    socket.onopen = null;

    socket.onmessage = this.onMessage;

    socket.onclose = (event) => {
      this.reject(event);
    };

    socket.onerror = (event) => {
      this.reject(event);
    };
  }

  public start(level: GameLevel): Promise<Field> {
    return this.send<Field>(`new ${level}`);
  }

  public openItem(x: number, y: number): Promise<Field> {
    return this.send<Field>(`open ${x} ${y}`);
  }

  public async finish(): Promise<void> {
    minesweeper = null;
    return this.socket.close();
  }

  private send<T>(message: string): Promise<T> {
    return new Promise((resolve, reject) => {
      if (!this.socket) {
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('Game finished!');
      }

      this.callbacks = {
        resolve,
        reject,
      };
      this.socket.send(message);
    });
  }

  private onMessage = (event: MessageEvent): void => {
    const response = String(event.data);

    switch (true) {
      case ['new: OK', 'open: OK'].includes(response): {
        this.socket.send('map');
        break;
      }

      case response.startsWith('map'): {
        const field = convertDataToField(response);
        this.resolve(field);
        break;
      }

      case response.includes('You lose'): {
        this.reject(response);
        break;
      }

      case response.includes('You win'): {
        this.reject(response);
        break;
      }

      default: {
        // just in case - in order to avoid hanging of promises
        this.resolve();
      }
    }
  };

  private resolve(value?): void {
    if (this.callbacks) {
      this.callbacks.resolve(value);
      this.callbacks = null;
    }
  }

  private reject(reason?): void {
    if (this.callbacks) {
      this.callbacks.reject(reason);
      this.callbacks = null;
    }
  }
}

// L = 1, 10*10, mines = 15
// You win. The password for this level is: ThisWasEasy

// L = 2, 40*20, mines = 150
// open: You win. The password for this level is: NotSoMuch

// L = 3, 100*50, mines = 1000
// open: You win. The password for this level is: NoMoreMines

// L = 4, 500*50, mines = 3500
// open: You win. The password for this level is: PleaseNoMore
