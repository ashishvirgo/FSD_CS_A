const fs=require("fs");
function myReadFileAsync(){
  fs.readFile("./dummy.txt","utf-8",(err,data)=>{
    try{
    if(err) throw err;
    console.log(data);
    }
    catch(err){
        console.log("File handling Error: ",err.message);
    }
  })   
}
function myWriteFileAsync(data){
fs.writeFile("./dummy.txt",data,(err)=>{
    try{
    if(err) throw err;
    console.log("Success");
    }
    catch(err){
        console.log("File Writing Error=",err.message);
    }
})
}
module.exports={
    myReadFileAsync,myWriteFileAsync
}


