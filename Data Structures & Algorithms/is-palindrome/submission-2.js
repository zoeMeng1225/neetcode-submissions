class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const string = s.replace(/\s+/g, "").replace(/\p{P}/gu, "").toLowerCase()
        let i = 0, j = string.length -1;
        while(i <= j){
            if(string[i] !== string[j]){
                return false
            }
            i++;
            j--;
        }

        return true
    }
}
