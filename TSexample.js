"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let grade = '85';
let grade2 = 85;
let test_total = 100;
let calcPercenetage = (studentGrade, test_total) => {
    let percentage = studentGrade / test_total;
    return `This student get ${percentage} percent on the test!!`;
};
console.log(calcPercenetage(grade2, test_total));
