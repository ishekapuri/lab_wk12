part//2
function conslog(a){
    console.log(a);
}

part//3
const students = [
    { name: "Tasha", grades: [ 80, 67, 75, 62 ] },
    { name: "Tuvok", grades: [ 90, 88, 91, 92 ] },
    { name: "Dax", grades: [ 88, 90, 89, 85 ] },
    { name: "Neelix", grades: [ 60, 54, 48, 50 ] }
  ]

function averageCalc(group) {
  

const studentsScholarship = []
  
for (const person of group ) {
    let avg = person.grades.reduce((x,y) => x+y,0) / person.grades.length;
    if (avg >= 80){
        studentsScholarship.push({name: person.name, gradeAvg: avg})
    }
}
  
console.log(studentsScholarship)
}

averageCalc(students)
  
console.log(studentsScholarship)
part//4

function nightMode() {
    const nightMode = document.querySelector("body")
}
nightMode()