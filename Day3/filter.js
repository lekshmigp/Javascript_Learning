const students=[
    {name:"user1",testscore:24},
    {name:"user2",testscore:45},
    {name:"user3",testscore:50},
    {name:"user4",testscore:49},
    {name:"user5",testscore:29}
];
//get the data of the students who is passed: score is above =35 we use the filter functionn
const passedStudents=students.filter(pass=>pass.testscore>=35);
console.log( "Passesd Students list =" ,passedStudents)
//getiing the anme alone of the apssed students 
const passedNames= passedStudents.map(names=>names.name);
console.log(passedNames);
// getting the score of the passes students alone
const passedScore= passedStudents.map(scores=>scores.testscore);
console.log(passedScore);
//get the highest score of the test the reduce function
const highScore = passedScore.reduce(
    (max,score) => score > max ? score : max,0);
console.log(highScore);