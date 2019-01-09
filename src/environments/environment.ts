// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBD1VjPmm20q1AeeqoM42Hg5H3HOSV2IaU',
    authDomain: 'projects-cs-lc.firebaseapp.com',
    databaseURL: 'https://projects-cs-lc.firebaseio.com',
    projectId: 'projects-cs-lc',
    storageBucket: 'projects-cs-lc.appspot.com',
    messagingSenderId: '334102820196'
  }
};