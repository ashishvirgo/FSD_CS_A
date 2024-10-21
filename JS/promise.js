function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
             return reject("Network Error");
            console.log("register end");
            
        },4000);
    })
    
    
}
function sendemail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("mail send");
            resolve();
        },5000);
    })
    
    
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("login end");
            resolve();
        },6000);
    })
    
    
}
function getuserdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Got User Data");
            resolve();
        },5000);
    })
    
    
}
function displaydata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Display User Data");
            resolve();
        },5000);
    })
    
    
}

register().then(sendemail).then(login)
          .then(getuserdata)
          .then(displaydata)
          .catch((err)=>{
           console.log("Error:"+err);
          })
