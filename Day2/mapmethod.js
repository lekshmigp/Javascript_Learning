const products=["product1","product2","product3"];
 const display= products.map(function(product){
    return "<li>"+ product+"</li>";
});
console.log(display);
///how they are used in react ..they use keys 
const users=[
    {name: "user1",testscore:45},
    {name:"user2",testscore:50},
    {name: "user3",testscore: 24}
];
const show = users.map(user=>(
    <li key= {user.name}> {user.name}</li>
));