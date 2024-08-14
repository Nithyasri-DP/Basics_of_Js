/*
SUM OF TWO INTEGERS
Given an array of integers, return indices of 2 no's such that they add up to a specific target.
Also assuming that each input have exactly 1 solution and should not use the same element twice.
Given nums - [2,7,11,15], target = 9.*/


/** 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let storage = {};
    for(let [index, num] of nums.entries()) {
       if(storage[num] !== undefined) return [storage[num], index];
        storage[target-num] = index;
    }
};


