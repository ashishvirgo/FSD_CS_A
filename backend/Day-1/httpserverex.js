const http=require("http");
const fs=require("fs/promises");
   const server=http.createServer(async(req,res)=>{
     const url=req.url;
     res.setHeader("Content-type","text/html");
     if(url=="/home" && req.method=="GET"){
        res.statusCode=200;
        const data=await fs.readFile("./Home.html")
        res.write(data);
     }
     else if(url=="/about" && req.method=="GET"){
        res.statusCode=200;
        const data=await fs.readFile("./About.html");
        res.write(data);
     }
     else{
        res.statusCode=404;
        res.write("<h1>404 Error</h1>");
     }
     res.end();
   });

   server.listen(3001,()=>{
    console.log("Server is Running on port 3001");
   })

