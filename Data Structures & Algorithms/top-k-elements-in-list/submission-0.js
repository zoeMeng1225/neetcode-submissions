class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    /** my logic is if we want find Kth most frequent element
     * first we need a map to store, and the map like this:
     * [1: number of appearance, 2:number of appearance... ]
     * which means: [key(number): number of appearance]
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for(const num of nums){
            const value = (map.get(num) || 0) + 1
            map.set(num, value)
             
            
        }
        let fullArray = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
        return fullArray.slice(0, k).map(item => item[0])
       
    }
}
