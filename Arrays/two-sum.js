/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let h = i + 1; h < nums.length; h++) {
      if (nums[i] + nums[h] === target) {
        return [i, h];
      }
    }
  }
  return [];
};

let number = [2, 7, 11, 15];
// let number = [3, 2, 4];
// let number = [3, 3];
let target = 9;
// let target = 6;

console.log(twoSum(number, target));
