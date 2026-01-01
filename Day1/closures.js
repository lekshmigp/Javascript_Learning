//Thsi shows about the closures in the asynchronous code

//use block scope of let keyword
// let is block scope -- just like other programming languages this line of code works 
for (let j=0; j<3;j++){
    setTimeout(()=> console.log("let j: ",j),0);
    
}

//use blockscope of var keyword
// var is function scoped
for (var j = 0; j < 3; j++) {
    setTimeout(() => console.log("var j:", j), 0);
}


