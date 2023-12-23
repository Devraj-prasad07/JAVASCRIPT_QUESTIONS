/* 4. Highest Marks
A teacher wants to find out the highest marks scored by a student in a class of five students. The teacher enters the marks of all five students in an array called "marks". Write a program that iterates through the array and finds the highest marks scored by any student in the class. The highest marks must then be displayed to the teacher using the console. */


function findHighestMarks(studentData){
    let highestMarks = studentData[0].marks;
    let topperName = studentData[0].name;
    for(let i = 0; i < studentData.length; i++){
      if(studentData[i].marks > highestMarks){
          highestMarks = studentData[i].marks;
          topperName = studentData[i].name;
      }
    }
    console.log(`The topper student name is ${topperName} with aggregate of ${highestMarks}`);
  }
  
  let studentData = [
      {name: "Devraj", marks:98},
      {name: "Sumit", marks: 95},
      {name: "naveen", marks: 92},
      {name: "kirat", marks: 91},
      {name: "Samy", marks: 90}
  ];
  
  findHighestMarks(studentData);