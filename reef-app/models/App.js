const firebase = require("firebase");
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCHLRCFs1yU16v9-iCHJ0CpfaJrt7qPJkc",
    authDomain: "reef-app-90b21.firebaseapp.com",
    databaseURL: "https://reef-app-90b21.firebaseio.com",
    projectId: "reef-app-90b21",
    storageBucket: "reef-app-90b21.appspot.com",
    messagingSenderId: "676623739019"
  };
  firebase.initializeApp(config);

//  <span class="MuiTouchRipple-root-316"></span> upload image button

//   const database = firebase.database();

let storageRef = firebase.storage().ref();
  
export default firebase;