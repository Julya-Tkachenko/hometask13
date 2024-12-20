'use strict'

// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

// наприклад, для масиву 
// [ 1, NaN, 12, '123', 2, null, { a: 10 } ] 
// має повертати 5
const array = [ 1, NaN, 12, '123', 2, null, { a: 10 } ] 

function calcAverage(a) {
    let num = 0;
    let count = 0;
    for(let i = 0; i < a.length; i++) {
        if(isNaN(a[i]) || typeof a[i] !== 'number') continue
         num += a[i]
         count++
    }
    console.log(num);
return num/count
}
const result = calcAverage(array);
console.log(result);
