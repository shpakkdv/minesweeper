export {};

// import store from 'store';
// import { convertDataToField } from 'utils/convertDataToField';

// export const socket = {
//   socket: new WebSocket('wss://hometask.eg1236.com/game1/'),
//   resolve: null as any,
//   reject: null as any,
// };

// socket.socket.onopen = (event) => {
//   socket.socket.send('new 1');
// };

// socket.socket.onmessage = (event) => {
//   const { data } = event;
//   console.log('DATA', data)

//   if (['new: OK', 'open: OK'].includes(data)) {
//     return socket.socket.send('map');
//   }

//   if (data.startsWith('map')) {
//     const field = convertDataToField(data);
//     window['FIELDdata'] = data;
//     window['FIELD'] = field;

//     if (socket.resolve) {
//       socket.resolve(field);
//       socket.resolve = null;
//       socket.reject = null;
//     } else {
//       // store.dispatch({ type: 'GameField_SET_FIELD', payload: { field }});
//     }

//     return;
//   }

//   if (data.includes('You lose')) {
//     if (socket.reject) {
//       socket.reject(data);
//       socket.resolve = null;
//       socket.reject = null;
//     } else {
//       alert(data);
//     }

//     console.error(data);
//   }

//   if (data.includes('You win')) {
//     if (socket.reject) {
//       socket.reject(data);
//       socket.resolve = null;
//       socket.reject = null;
//     }

//     alert(data);
//   }

//   // just in case - in order to avoid hanging promises
//   if (socket.reject || socket.resolve) {
//     (socket.reject || socket.resolve)();
//     socket.reject = null;
//     socket.resolve = null;
//   }
// };

// socket.socket.onclose = () => {
//   if (socket.reject) {
//     socket.reject();
//     socket.resolve = null;
//     socket.reject = null;
//   }
// };

// socket.socket.onerror = () => {
//   if (socket.reject) {
//     socket.reject();
//     socket.resolve = null;
//     socket.reject = null;
//   }
// };

// // L = 1, 10*10, mines = 15
// // You win. The password for this level is: ThisWasEasy

// // L = 2, 40*20, mines = 150
// // open: You win. The password for this level is: NotSoMuch

// // L = 3, 100*50, mines = 999+ (1000)
// // open: You win. The password for this level is: NoMoreMines

// // L = 4, 500*50, mines = 3500
// // open: You win. The password for this level is: PleaseNoMore


// // class Socket {
// //   #socket = ;
// //   #resolve = ;
// //   #reject = ;

// //   constructor() {
// //     this.#resolve = ;
// //     this.#reject = ;
// //     this.#socket = ;
// //   }


// // }

// // export const socketAsync = {
// //   open,
// //   send,
// // };

// // function open(x: number, y: number): Promise<number[][]> {
// //   return send(`open ${x} ${y}`);
// // }

// // function send(message: string): Promise<any> {
// //   return new Promise((res, rej) => {
// //     socket.resolve = res;
// //     socket.reject = rej;
// //     socket.socket.send(message);
// //   });
// // }
