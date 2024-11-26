/*  8.    Use array methods like map, filter,
 and reduce to manipulate the array of students. */

 let students = [
    { name: 'John', grade: 95 },
    { name: 'Emily', grade: 80 },
    { name: 'David', grade: 75 },
    { name: 'Michael', grade: 90 }]

// map
console.log("for map");
let names = students.map(student => student.name);
console.log(names); 

// filter
console.log("for filter");
let passedStudents = students.filter(student => student.grade >= 80);
console.log(passedStudents);

// reduce
console.log("for reducer");
let averageGrade = students.reduce((total, student) => total + student.grade, 0) / students.length;
console.log(averageGrade);

