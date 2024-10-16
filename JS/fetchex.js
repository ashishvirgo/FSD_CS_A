const promise=fetch("https://api.github.com/users/ashishvirgo");
promise.then(
    (res)=>{
        return res.json();
    }
).then(
    (data)=>console.log(data)
).catch(
    (err)=>console.log("Error: ",err)
);