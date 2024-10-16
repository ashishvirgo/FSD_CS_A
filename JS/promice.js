const promice=new Promise(
    (resolve,reject)=>{
        console.log("first promise");
        // resolve("successfuly fetch data");
        reject("network error");
    }
);
promice.then(
    (msg)=>console.log(msg)
).catch(
    (err)=>console.log("Error:" ,err)
);