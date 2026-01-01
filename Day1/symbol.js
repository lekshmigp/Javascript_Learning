//This shows about the use of Symbol keyword 
//mostly used in  hiding contents 
let user1 ={name : "benny", id : 121}
let user2= {name: "benny" , id :122}
const password = Symbol("pass")
user1[password]= 1211
user2[password]=1222
console.log(user1)
console.log(user2)
