function register(callback){
    setTimeout(()=>{
        console.log("register end");
<<<<<<< HEAD
        cb();
    },1000);
}
function sendemail(cb){
    setTimeout(()=>{
        console.log("email send");
        cb();
    },6000);
=======
        callback();
    },4000);
    
}
function sendemail(cb){
    setTimeout(()=>{
        console.log("mail send");
        cb();
    },5000);
>>>>>>> 6104aa84dba12fb39f00546e0186ac7993b5e150
    
}
function login(cb){
    setTimeout(()=>{
        console.log("login end");
        cb();
<<<<<<< HEAD
    },2000); 
=======
    },6000);
>>>>>>> 6104aa84dba12fb39f00546e0186ac7993b5e150
    
}
function getuserdata(cb){
    setTimeout(()=>{
<<<<<<< HEAD
        console.log("got user data");
        cb();
    },1000);
    
=======
        console.log("Got User Data");
        cb();
    },5000);
>>>>>>> 6104aa84dba12fb39f00546e0186ac7993b5e150
    
}
function displaydata(){
    setTimeout(()=>{
<<<<<<< HEAD
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
=======
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
>>>>>>> 6104aa84dba12fb39f00546e0186ac7993b5e150
