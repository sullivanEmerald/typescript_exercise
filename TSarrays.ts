let numgrade:number[] =  []
let letterarrays:string[] = []

numgrade = [2,4,6,8]
letterarrays = ['sullivan', 'chigozie', 'joshua']

// UNION... this allows for multiple tyoes
// example : 
let students_grade:(string | number | boolean) = true

// UNION FOR ARRAY
let myArray:(number| boolean | string)[] = [2, 4, 6, true, 'sullivan']


// Type for arrays of objects
type Test = {
    name : string,
    total_score : number
}
let allTest:Test[] = []

allTest.push({
    name : 'sullivan',
    total_score : 100
})

console.log(allTest)


