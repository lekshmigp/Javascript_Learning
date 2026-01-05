const students=[
    {name:"user1", score:42},
    {name:"user2",score :50},
    {name:"user3",score :32 }
];
console.log(students)
// just printing alone the students who got below the passing score
const failedStudents= students.filter((fail_stu) => fail_stu.score<35);
console.log("Failed Students List is " ,failedStudents)
//usage of block inside the arrow function use the keyword return 
const updateStudents= students.map( (student) =>{
     return student.name === "user3" ? {...student,score:40, status:"passed"} :  student
});
console.log(updateStudents)