//usage of map function
const numbers= [1,2,3,4];
const doubled = numbers.map(num => num*2);
console.log( doubled)
// real worls example
const users=[
    {name: "user1",testscore:45},
    {name:"user2",testscore:50},
    {name: "user3",testscore: 24}
];
const testMark= users.map(score=>score.testscore)
console.log(testMark)