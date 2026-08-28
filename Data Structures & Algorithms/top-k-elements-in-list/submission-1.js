class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        //create a map to store
        const map = new Map();

        //iterate through the nums array
        //map strcture should be like this: [[num:count]]
        for(const num of nums){
            //each time when get the value just add 1, initilly is 0+1, which means the 
            //element shows here first time.
            let count = (map.get(num) || 0)+ 1;
            map.set(num, count) 
            
        }

        //convert the map the an array， use map.entire() because we need keep the both key and value 
        //and then use the sort() to reverse the order
      
        let fullArray = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
          console.log(fullArray.slice(0, k).map(item => item[0]))
        return fullArray.slice(0, k).map(item => item[0])
    }
}
