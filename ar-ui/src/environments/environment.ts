// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: '',
  restUrl: '/api',
  firebaseConfig: {
    apiKey: 'AIzaSyBZ1EAHYYO1BkR6F0xf7L7-tqtqmK51YPU1',
    authDomain: 'argumentative-reality.firebaseapp.com',
    projectId: 'argumentative-reality',
    storageBucket: 'argumentative-reality.appspot.com',
    messagingSenderId: '771731017080',
    appId: '1:771731017080:web:0a074fd3cb6fb6fba24c8d',
    measurementId: 'G-19CJB88VLX'
  },
  databaseQuery: {
    urlPathRef: '/url',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
