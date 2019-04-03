let express = require('express');
let app = express();
let http = require('http').Server(app);
let bodyParser = require('body-parser');

var admin = require("firebase-admin");

var serviceAccount = require("./sf_main.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://park-and-find.firebaseio.com"
});


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

let database_api = require('./api/db/users.js')(admin,app);
let auth_api = require('./api/auth/auth.js')(admin,app);

http.listen(process.env.PORT || 8000,function(){
  console.log("Server has started on port: 8000")
})
