const http=require("http");
const port=3005;
const users=[];
const server=http.createServer((req,res)=>{
  const url=req.url;
  
  if(url=="/users" && req.method=="GET"){
    res.writeHead(200,{"content-type":"application/json"})
    res.write(JSON.stringify(users));
  }
  else if(url=="/user" && req.method=="POST"){
    let body='';
    req.on("data",(chunk)=>{
         body=body+chunk;
    })
    req.on("end",()=>{
        const parseddata=JSON.parse(body);
        const {name,email}=parseddata;
        const id=users.length>0 ? (users[users.length-1].id+1) : 1001;
        const newUser={
            id: id,
            name:name,
            email:email
        }
        users.push(newUser);
        
    })
    res.writeHead(201,{"content-type":"application/json"})
    res.write(JSON.stringify({message: "user created successfully" }));
  }
  else if(url=="/user" && req.method=="DELETE"){
    let body='';
    let index=-1;
    req.on("data",(chunk)=>{
         body=body+chunk;
    })
    req.on("end",()=>{
        const parseddata=JSON.parse(body);
        const uid=parseddata.id;
        index=users.findIndex(index=>index.id==uid);
        console.log("index:",index)
        if(index!=-1){
            users.splice(index,1);
            // res.writeHead(200,{"content-type":"application/json"})
            res.write(JSON.stringify({message: "User Deleted"}));
        }
        else{
            // res.writeHead(400,{"content-type":"application/json"})
            res.write(JSON.stringify({message: "User not Found"}));
        }
  })
  
  
}
  else{
    res.writeHead(404,{"content-type":"application/json"})
    res.write(JSON.stringify({message: "Page not Found"}));
  }
  res.end();
})

server.listen(port,(err)=>{
    try{
        if(err) throw err;
        console.log(`Server is running on port ${port}`);

    }
    catch(err){
   console.log("Server Error:",err.message);
    }
})