function register(cb){
    setTimeout(()=>{
        console.log("register end");
    },1000);
    cb();
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

// callback hell 
register(
    function (){
        sendemail(
            function (){
                login(
                    function(){
                        getdata(
                            function (){
                                displaydata(); 
                            }
                        );
                        }
                );
                
            
            }
        );

    }
);

console.log("work other app");