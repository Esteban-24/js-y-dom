'use strict';

const arrayLimpio = []
const names = [
    'A-Jay',
    'Manuel',
    'Manuel',
    'Eddie',
    'A-Jay',
    'Su',
    'Reean',
    'Manuel',
    'A-Jay',
    'Zacharie',
    'Zacharie',
    'Tyra',
    'Rishi',
    'Arun',
    'Kenton',
];

for (let i = 0; i<names.length; i++){

    if (!arrayLimpio.find((al) => al === names[i])) {
        arrayLimpio.push(names[i])
    }
}
console.log(arrayLimpio)

