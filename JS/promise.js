function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
<<<<<<< HEAD
            return reject('N/w Error during registration');
            console.log("register end");
        },1000);
    });
 
=======
             return reject("Network Error");
            console.log("register end");
            
        },4000);
    })
    
>>>>>>> 6104aa84dba12fb39f00546e0186ac7993b5e150
    
}
function sendemail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
<<<<<<< HEAD
            console.log("email send");
            resolve();
        },1000);
    });
   
=======
            console.log("mail send");
            resolve();
        },5000);
    })
    
    
>>>>>>> 6104aa84dba12fb39f00546e0186ac7993b5e150
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("login end");
            resolve();
<<<<<<< HEAD
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
=======
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
    
    
>>>>>>> 6104aa84dba12fb39f00546e0186ac7993b5e150
}
function displaydata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
<<<<<<< HEAD
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
=======
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
>>>>>>> 6104aa84dba12fb39f00546e0186ac7993b5e150
