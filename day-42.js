// https://leetcode.com/problems/two-sum/
// 	76 ms	37.9 MB	best of mine :)

var twoSum = function(nums, target) {
    const comp = {};
    for(let i=0; i<nums.length; i++){
        if(comp[nums[i] ]>=0){
            return [ comp[nums[i] ] , i]
        }
        comp[target-nums[i]] = i
    }
};
