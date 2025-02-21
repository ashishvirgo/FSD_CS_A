const http=require("http");
const port=3002;
const data=[{
    id: 1,
    name: "Ashish Bajpai",
    email: "ab@gmail.com"
},
{
    id: 2,
    name: "Ashish Chaudhary",
    email: "ac@gmail.com"
}]
const server=http.createServer((req,res)=>{
    url=req.url;
    
    if(url=="/users" && req.method=="GET"){
        res.writeHead(200,{"Content-Type": "application/json"});
        res.write(JSON.stringify(data));
    }
    else if(url=="/user" && req.method=="POST"){
         let body='';
         req.on("data",(chunk)=>{
             body+=chunk;
         })
         req.on("end",()=>{
            const parsedata=JSON.parse(body);
            const {name,email}=parsedata;
            console.log(parsedata);
            const arrylength=data.length;
            console.log(arrylength);
            const newid=arrylength>0 ? data[arrylength-1].id+1: 1;
            const newdata={
                id: newid,
                name,
                email
            }
            console.log(newdata);
            data.push(newdata);
         })
         res.writeHead(200,{"Content-Type": "application/json"});
        res.write("success");
    }
    else{
        res.writeHead(404,{"Content-Type": "application/json"});
        res.write("Page not Found")
    }
    res.end();
})

server.listen(port,(err)=>{
    try{
        if(err) throw err;
        console.log(`server is running on port ${port}`)
    }
    catch(err){
        console.log("Server Error:",err.message)
    }
})