// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAJtmVvaKO1j_fIwTfiWC1wwT_RY1D1vYM',
    authDomain: 'shopping-list-maker-b6d4f.firebaseapp.com',
    databaseURL: 'https://shopping-list-maker-b6d4f.firebaseio.com',
    projectId: 'shopping-list-maker-b6d4f',
    storageBucket: 'shopping-list-maker-b6d4f.appspot.com',
    messagingSenderId: '402855942387'
  }
};
