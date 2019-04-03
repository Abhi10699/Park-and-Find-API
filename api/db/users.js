module.exports = (admin,app)=>{
  let db = admin.database();
    
  app.get('/',(req,res)=>{
    res.send("Okay");
  })
  
  // Test API
  app.get('/test',function(req,res){
    ref.push({
      name:"AbhiPatel",
      age:20
    })
    res.send("success!")
  })

  // Retrieve a user
  app.post('/api/user/find',function(req,res){
    let uId = req.body.uid
    
    db.ref(`/Users/${uId}`).once('value',function(snapshot){
      
    });
  
  });

  app.post('/api/user/led',function(req,res){
    let uId = req.body.uid;
    let vehicle_id = req.body.vId;
    let status = req.body.led_status;
    console.log(status);
    let updates = {};
    db.ref(`/Users/${uId}/Vehicles/${vehicle_id}/led/`).set(status)
    res.send("Working")
  })
}
