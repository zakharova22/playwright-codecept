/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type LoginPage = typeof import('./pages/LoginPage.js');
type loginPagePage = typeof import('./pages/LoginPage.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, LoginPage: LoginPage, loginPagePage: loginPagePage }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
