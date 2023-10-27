let a=prompt("enter the first number");
let b=prompt("enter the second number");

let operation=(x,y,divide)=>{
    divide(x,y)
}

divide=(x,y)=>{
    let z=x/y
    document.write(`the division of two numbers are ${z}`)
}
operation(a,b,divide8