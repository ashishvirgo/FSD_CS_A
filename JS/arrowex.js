function hello(){
    console.log("Hello");
}
hello();
const hello1=()=>console.log("hello1");
hello1();
function add(a,b){
    return a+b;
}
const sum=add(2,5);
console.log("sum=",sum);
const add1=(a,b)=>{
    return (a+b);
}
const sum1=add1(12,15);
console.log("sum=",sum1);
