//using o fthe spread operator 
const arr1=[1,2,3,4,5];
const arr2= [7,8,9,0];
const numbers= [...arr1,...arr2];
console.log(numbers)
//spread operator can be used in objects also
//spread operator can used in overwriting the values and cannot be used most of the times 
//can be used in the scenario where the values needs to be overwrite for worng marks like that scenarios
//instead of using objects the correct way of using willbe using arrya and not objects

const student1 ={
    name: "user1",
    testcore:45
}
const student2= {
    name:"user2",
    testcore:50
}
const student3={    
    name: "user3",
    mark:[34,"failed"]
}
const totalStudenstList = {...student1,...student2,...student3};
console.log(totalStudenstList) ;

const updatestudent3={
    ...student3,mark: [42,"passed"]
};
const StudenstList = {...student1,...student2,...updatestudent3};
console.log(StudenstList) ;
//many overwriting happens here if i use like this  so use array instead of the objects

