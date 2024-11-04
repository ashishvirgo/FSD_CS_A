function register(cb){
    setTimeout(()=>{
        console.log("register end");
        cb();
    },1000);
}
function sendemail(cb){
    setTimeout(()=>{
        console.log("email send");
        cb();
    },6000);
    
}
function login(cb){
    setTimeout(()=>{
        console.log("login end");
        cb();
    },2000); 
    
}
function getdata(cb){
    setTimeout(()=>{
        console.log("got user data");
        cb();
    },1000);
    
    
}
function displaydata(){
    setTimeout(()=>{
        console.log("display data");
    },1000);
   
}

// callback hell 
register(function(){
    sendemail(function(){
         login(function(){
            getdata(function(){
                displaydata();
            });
         });
    });
});

console.log("work other app");