'use strict';

/*

Вам нужно написать функцию, которая принимает один параметр.
При первом вызове она его запоминает, при втором — суммирует переданный
параметр с тем, что передали первый раз и тд.
Например: sum(3) = 3; sum(5) = 8; sum(20) = 28

 */

const sumAdd = () => {
    let i = 0;

    const sumPlus = (num) => {

        i += num;

        return i;
    }

    return sumPlus;

}

const sum = sumAdd();

console.log(sum(3));
console.log(sum(4));
console.log(sum(10));