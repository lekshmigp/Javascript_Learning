const nums=[1,2,3,4,5]
const squares= nums.map((num )=> num *num);
//console.log(squares)
const names =["alice","Bob","charlie","danile"]
const capi = names.map((name)=>{
    return name.charAt(0).toUpperCase()+name.slice(1)
    
}

)
//console.log(capi)
const pokemon=["monsters", "pikachu","pinn"]
const monster= pokemon.map( mon => `<p>${mon}</p>`)
console.log(monster)