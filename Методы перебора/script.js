'use strict';

//filter

// const names = ['Ivan', 'Anna', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(function (name) {
//     return name.length < 5;
// });

// console.log(shortNames);

// map

// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(item => item.toLowerCase());

// console.log(result);

//every/some

// const some = [4, 5, 7];

// console.log(some.some(item => typeof (item) === 'number'));
// console.log(some.every(item => typeof(item) === 'number'));


// reduce

// const arr = [4, 5, 1, 3, 2, 6,];
//  0    4
//  4    5
//  9    1
//  10   3
// const res = arr.reduce((sum, current) => sum + current,3);
// console.log(res);

// const arr = ['apple', 'pear', 'banana', 'plum'];

// const res = arr.reduce((sum, current) => `${sum},   ${current}`);
// console.log(res);

const obj = {
    baxa: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item [0]);

console.log(newArr);


// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/map  
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/entries