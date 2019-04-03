module.exports = function(admin,app){
  let auth = admin.auth();
  let _db = admin.database();

  app.post('/api/auth/user/create',(req,res)=>{

    console.log("Recieved a request..");
    
    let displayName = req.body.username;
    let email = req.body.email;
    let isVerified = false;
    let password = req.body.password;
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;

    let userData = {
      displayName:displayName,
      email:email,
      isVerified:isVerified,
      password:password
    }
    // Create User 
    
    auth.createUser(userData).then(function(u_data){
      res.send("User Created Successfully");
      
      // Initialize new user with uid and add user in database.
      _db.ref(`/Users/${u_data.uid}`).set({ 
        Email:email,
        Password:password,
        Username:displayname,
        led:'off',
        buz:'off',
      })

    })

    .catch(function(err){
      res.send("Error Creating User: ",err);
    })
  })
}
