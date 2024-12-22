/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function (nums1, m, nums2, n) {
  let a = nums2.length - 1;
  for (let i = nums1.length - 1; i > 0; i--) {
    if (nums1[i] == 0) {
      nums1[i] = nums2[a];
      a--;
    }
  }
  nums1.sort((a, b) => a - b);
  return nums1;
};

// let nums1 = [1, 2, 3, 0, 0, 0];
// let m = 3;
// let nums2 = [2, 5, 6];
// let n = 3;


console.log(merge(nums1, m, nums2, n));
