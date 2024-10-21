function register(callback){
    setTimeout(()=>{
        console.log("register end");
        callback();
    },4000);
    
}
function sendemail(cb){
    setTimeout(()=>{
        console.log("mail send");
        cb();
    },5000);
    
}
function login(cb){
    setTimeout(()=>{
        console.log("login end");
        cb();
    },6000);
    
}
function getuserdata(cb){
    setTimeout(()=>{
        console.log("Got User Data");
        cb();
    },5000);
    
}
function displaydata(){
    setTimeout(()=>{
        console.log("Display User Data");
    },5000);
    
}
//callback hell
register(function (){
    sendemail(function (){
        login(function (){
            getuserdata(function (){
                displaydata();
            });
        });
    }); 
});
