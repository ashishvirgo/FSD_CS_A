function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            return reject('N/w Error during registration');
            console.log("register end");
        },1000);
    });
 
    
}
function sendemail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("email send");
            resolve();
        },1000);
    });
   
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("login end");
            resolve();
        },1000);
    });
     
}
function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("got user data");
            resolve();
        },5000);
    });    
}
function displaydata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("display data");
            resolve();
        },1000);
    });   
}

register()
.then(sendemail)
.then(login)
.then(getdata)
.then(displaydata)
.catch((err)=>{
    console.log("Error: ",err);
});

console.log("work other app");