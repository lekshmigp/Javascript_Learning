function greet(name){
    return "Hello" +" "+  name ;

}

// to get the values from the user use the prompt keyword

function getAge(age){
    return "Your Age is " +" "+  age ;

}
// to get the values from the user use the prompt keyword thsi only works in browsers 
// let userAge= prompt("Enter the age of the user");
console.log(greet("nemo") )


//arrow function usage 
const greetName= (g_name)=> { //parenthesis can be also removed
    return "Hello "+ g_name;
}
console.log(greetName("nimo"));


const square = x => x*x;// can also tke zero parameters
console.log( square(9));


// arrow function with a if condition
const checkAge= (age)=>{
    if(age>=18) return "Can vote"
    return "Cannot vote "
}
console.log(checkAge(28));

// using of this concept,arrowfunction and setTimedout

const user={
    name:"aaa",
    greet: function(){
        setTimeout( ()=>{
            console.log("Hello"+ this.name);
        }, 1000);
    }
};
user.greet();

// best example: user clicks shows confirmation after 2 seconds
const form={
    status: "Submitted",
    showStatus(){
setTimeout( () => {
        console.log(this.status);

    },2000);
}
};
form.showStatus;

//best example: sending delayed messages in telegram
const users ={
    name:"User1",
    notify(){
        setTimeout( ()=> {
            console.log(`New Message from ${this.name}`);
        },1000);
    }
};
users.notify();

