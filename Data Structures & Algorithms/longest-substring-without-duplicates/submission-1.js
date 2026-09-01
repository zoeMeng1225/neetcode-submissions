class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength = 0;
        let left = 0;
        const set = new Set();

        for(let right = 0; right < s.length; right++){
            let currentNum = s[right];

            while(set.has(currentNum)){
                set.delete(s[left]);
                left++;
            }

            set.add(currentNum);
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    
    }
}
