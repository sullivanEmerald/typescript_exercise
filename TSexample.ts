let grade:string = '85'
let grade2:number  = 85
let test_total:number = 100


let calcPercenetage = ( studentGrade:number, test_total:number):string => {
    let percentage = studentGrade / test_total
    return `This student get ${percentage} percent on the test!!`
}
console.log(calcPercenetage(grade2, test_total))

export{}