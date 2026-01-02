const users={
    name: "SAm",
    age:23,
    country: "Usa"
}
// object destructing without dot operator 
// const name= users.name likewise
const{ name, age,country:coun}= users
console.log(users)

