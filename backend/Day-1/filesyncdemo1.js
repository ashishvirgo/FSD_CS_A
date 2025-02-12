const fs=require("node:fs");
function myReadFile(){
      const data=fs.readFileSync("./dummy.txt","utf-8");
      console.log(data);
}

function myWriteFile(data){
    
    fs.writeFileSync("./dummy.txt",data);
}
function myAppendFile(data){

    fs.appendFileSync('./dummy.txt',data)
}
function myDeleteFile(filename){
    fs.unlinkSync(filename);
}
module.exports={
    myReadFile: myReadFile,
    myWriteFile: myWriteFile,
    myAppendFile: myAppendFile,
    myDeleteFile: myDeleteFile,
    username: "Ashish",
}

