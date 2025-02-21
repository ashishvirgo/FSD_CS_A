const http=require("http");
const server=http.createServer(async(req,res)=>{
    res.setHeader("Content-Type","text/html")
    if(req.url=="/home"){
    const data=await fetch("https://api.github.com/search/users?q=location:ghaziabad")
    const datajson= await data.json();
    const newdata=datajson.items;
    newdata.map((i)=>{
        res.write(`<h2>${i.login}</h2>`)
      res.write(`<img src=${i.avatar_url} width="100" height="100"/>`) 
    })
}
else{
    res.write("<h1>Error Page</h1>");
}
  res.end();
})

server.listen(3001,(err)=>{
    try{
       if(err) throw err;
       console.log("Server is runnung on port 3001");
    }
    catch(err){
        console.log("Server Error:",err.message);
    }
})