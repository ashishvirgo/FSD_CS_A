const num=[1,5,2,4,3,7];
const c=num.filter((n)=>(n%2==0));
console.log(c);
const d=num.map((n)=>(n*2));
console.log(d);
const e=num.filter((n)=>(n%2==0)).map((n)=>(n*2));    
console.log(e);
const f=num.filter((n)=>(n%2==0)).map((n)=>(n*2))
         .reduce((n,s)=>(n+s));
console.log(f);