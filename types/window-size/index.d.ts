// Type definitions for window-size 0.2.0
// Project: https://github.com/jonschlinkert/window-size
// Definitions by: Pouya Kary <https://github.com/pmkary>
//                 Origin1 Tech <https://github.com/origin1tech>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'window-size' {

  interface IOptions {
    name?: string;
    tty?: any; // ws uses tty.getWindowSize but deprecated since v.0.6.0
  }

  interface IResult {
    width: number;
    height: number;
    type: string;
  }

  interface IWindowSize {
    get?(): IResult;
  }

  const ws: IWindowSize & IResult;

  export = ws;

}
