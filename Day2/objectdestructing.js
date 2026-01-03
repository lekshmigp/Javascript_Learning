const users={
    name: "SAm",
    age:23,
    country: "Usa"
}
// object destructing without dot operator 
// const name= users.name likewise
const{ name, age,country:coun}= users
console.log(users)

// objects destructing is also done by functions
function calling({name,ages,city}){
    console.log(name,ages,city)
}
// calling({name:"bruno"})
calling({name:"bruno",ages:12, city:"Bangalore"})

//nested object destructing
const details={
    name: "asha",
    address:{
        city:"Nagercoil",
        pincode:"629003"
    }
};
const { address:{city,pincode}}= details;
console.log(city);
console.log(pincode);