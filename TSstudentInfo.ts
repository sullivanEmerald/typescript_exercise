
type Student = {
    student_id:number,
    first_name:string,
    last_name:string,
    middle_name?:string, 
    is_enrolled:boolean
}
// the use of ? undicates that the property wouldnt be strictly needed in function call

type StudentGPA = {
    GPA_value : number
}

type StudentWithGPA =  Student & StudentGPA

// let numbers_info = (student_id:number, first_name:string, last_name:string, middle_name:string,  is_enrolled:boolean) : string => {
//     let enrolled = is_enrolled ? '' : 'not'
//     return `${first_name} ${last_name} is ${enrolled} enrolled}`
// } 

let numbers_info = (info:Student, school:string = 'Cambridge university') : string => {
    let enrolled = info.is_enrolled ? '' : 'not'
    return `${info.first_name} ${info.last_name} is ${enrolled} enrolled ${school}`
}

console.log(numbers_info({
    student_id : 555,
    first_name : 'sullivan',
    last_name : 'joshua',
    is_enrolled : true,
}, 'Oxford University'))