const fspromises=require("fs/promises");
const data="Hi How are you?";
function myWriteFilePr(){
const pr=fspromises.writeFile("./dummy.txt",data);
 pr.then(()=>{
    console.log("File written Successfully ",data)
 })
 .catch((err)=>{
    console.log("File Writing Error",err.message);
 })
}

function myReadFilePr(){
    const pr=fspromises.readFile("./dummy.txt","utf-8");
 pr.then((data)=>{
    console.log(data)
 })
 .catch((err)=>{
    console.log("File Reading Error",err.message);
 })
}

myReadFilePr();
myWriteFilePr();
myReadFilePr();