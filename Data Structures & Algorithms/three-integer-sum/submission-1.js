class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        //sort the array nums
        nums.sort((a, b) => a-b);
        const result = [];
    
        for(let i = 0; i < nums.length - 2; i++){
        
            //if fixed num is greater than 0, the sum can not be 0
            if(nums[i] > 0) break;
            //skip duplicate fixed nums to prevent duplicate triplets;
            if(i > 0 && nums[i] === nums[i-1]) continue;

            let left = i + 1, right = nums.length -1;
            while(left < right){
                const sum = nums[i] + nums[left] + nums[right];

                if(sum ===0){
                    result.push([nums[i], nums[left], nums[right]])

                    //skip the duplicate for left and right pointers
                    while(left < right && nums[left] === nums[left + 1]) left ++;
                    while(left < right && nums[right] === nums[right + 1]) right --;

                    left++;
                    right--;
                }else if(sum < 0){
                    left ++;
                }else{
                    right--
                }
            }
        }

        return result;
    }
}
