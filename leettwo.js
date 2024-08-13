/*
REVERSING NUM
Given 32 bits signed integers, reverse digits of an integer.*/

/**
 *  @param {number}x
 *  @return {number}
 */

const reverse = (x) => {
if(x<0) return 1
const result=(x+"").split('').reverse().join('');
console.log(result);
};