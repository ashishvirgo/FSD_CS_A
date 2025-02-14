const http=require("http");
const port=3001;
 const server=http.createServer((req,res)=>{
    const jsondata=[{
        id: 1,
        name: "Ashish Bajpai",
        email: "ab@gmail.com"
    },
    {
        id: 2,
        name: "Prashant Tomer",
        email: "pt@gmail.com"
    },
    {
        id: 3,
        name: "Aatif Jamshed",
        email: "aj@gmail.com"
    }];
    res.setHeader("Content-Type","text/html");
    res.statusCode=200;
    jsondata.map((da)=>{
        const ndata="<h3>"+da.name+"<h3>";
        res.write(ndata);
        const edata="<h3>"+da.email+"<h3>";
        res.write(edata);
    })
    res.end();
 })

 server.listen(port,(err)=>{
    try{
        if(err) throw err;
        console.log(`Server is running on ${port}`)
    }
    catch(err){
        console.log("Server Error:",err.message);
    }
 })