//using guard class 

function userLogin(id,pass){
 if(!id || !pass ) return "Invalid user . Cant login "
 if(id !== storedUser.id || pass !== storedUser.pass) return "Invalid user. Cant login "
 return "Welcome to the dashboard!!"
}
const storedUser={
    id: "admin123",
    pass:"pass123"
}
console.log(userLogin("admin123","pass123"));
console.log(userLogin("amin123","pass123"));
console.log(userLogin("admin123","pass111"));