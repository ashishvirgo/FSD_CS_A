function register(){
    setTimeout(()=>{
        console.log("register end");
    },1000);
    return new Promise();
}
function sendemail(cb){
    setTimeout(()=>{
        console.log("email send");
    },1000);
    cb();
}
function login(cb){
    setTimeout(()=>{
        console.log("login end");
    },1000);
    cb();
    
}
function getdata(cb){
    setTimeout(()=>{
        console.log("got user data");
    },1000);
    cb();
    
}
function displaydata(){
    console.log("display data");
}

register()
.then(sendemail)
.then(login)
.then(getdata)
.then(displaydata);

console.log("work other app");