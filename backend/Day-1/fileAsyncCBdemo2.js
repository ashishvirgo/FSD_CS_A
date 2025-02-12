const { myReadFileAsync, myWriteFileAsync } = require("./fileAsyncCBdemo1");
function f1(){
    console.log("First");
    f2();
}
function f2(){
    console.log("Second")
}
setTimeout(()=>{
    console.log("Timer0")
},0)
f1();
process.nextTick(()=>{
    console.log("Tick-1")
})
myReadFileAsync();
const data1="Hello User Welcome in FSD Class";
myWriteFileAsync(data1);
myReadFileAsync();
console.trace();