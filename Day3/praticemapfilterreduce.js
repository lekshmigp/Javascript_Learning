// simple example of filter method
const numbers = [12,45,789,134,25];
 const new_number= numbers.filter((num)=>num%2==0);
console.log(new_number)

//example of student getiing paseesd alone  list
const students=[
    {name: "user1",testscore:45},
    {name:"user2",testscore:50},
    {name: "user3",testscore:34},
    {name:"user4",testscore:32}
];
const passed_students= students.filter((pass_stu)=> pass_stu.testscore >=35);
console.log( "passed students list = " ,passed_students); // we use comma nd not +

// console.log(
//     "passed students list = " + JSON.stringify(passed_students)
//   ); this is the form of json stingify 

//using map function just to print alone the name who got the score above 50 
const passedStudentsName= passed_students.map(user=> user.name);
console.log(passedStudentsName);
//using of map function here
// const highScore= passed_students.map(score=> score.testscore);
// const maxScore= Math.max(...highScore);
// console.log(maxScore)

 // using of the reduce function
 const highScore= passed_students.reduce(
    (max,score)=> score.testscore>max ? score.testscore: max,
    0);
 console.log(highScore);
