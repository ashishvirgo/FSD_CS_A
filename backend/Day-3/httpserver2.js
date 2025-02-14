const http =require("http");
const server=http.createServer(async(req,res)=>{
    res.setHeader("Content-Type","text/html");
    res.statusCode=200;
     const data=await fetch("http://dummyjson.com/recipes");
     const datajson=await data.json();  
     console.log(datajson);
     const dataarray=datajson.recipes;
     dataarray.map((recipe)=>{
        const data="<h3 style='color: red'>"+recipe.name+"<h3>";
          res.write(data);   
     })
     res.end();
     })

 server.listen(3001,(err)=>{
     try{
        if(err) throw err;
        console.log("Server is running on port 3001");
     }
     catch(err){
        console.log("Server Error:",err.message);
     }
 })    

