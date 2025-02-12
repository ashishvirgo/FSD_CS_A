const {myReadFile,myWriteFile,username, myAppendFile, myDeleteFile} =require('./filesyncdemo1');
console.log("User Name=",username);
myReadFile();
const data="fsd class";
myWriteFile(data);
const data1=" my CS VI-A fsd class";
myAppendFile(data1);
myReadFile();
myDeleteFile("dummy.txt");