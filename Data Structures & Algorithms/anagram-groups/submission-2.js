class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    let map = new Map();

    for(const str of strs){
        const castedKey = str.split('').sort().join('');
        const values = map.get(castedKey) || [];

        values.push(str);
        map.set(castedKey, values);
    }

        console.log(map)
        return Array.from(map.values())
    }
}
