let grade
let grade2
let test_total 

grade = 'A'
grade2 = 85
test_total = 100

let calcPercenetage = ( studentGrade, test_total) => {
    let percentage = studentGrade / test_total
    return `This student get ${percentage} percent on the test`
}
console.log(calcPercenetage(grade, test_total))