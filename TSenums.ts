enum Month {
    Jan,
    Feb,
    Mar,
    Apr,
    May, 
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}


function isItSummer(month: Month){
    let isSummer:boolean
    let monthname :  string = typeof month === 'string' ? month : Month[month]
    switch (month){
        case Month.Jun:
            case Month.Jul:
                case Month.Aug:
                    isSummer = true
                    break;
        default :
        isSummer = false
        break;
    }

    return `${monthname} is ${isSummer}`
}


console.log(isItSummer(5))