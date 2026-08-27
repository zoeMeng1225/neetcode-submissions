class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
        const map = new Map();
        //logic: first, create a map to store each categoried the str
        //iterate each str at the array
        //sort each str by alphbet, and set the sorted srt as the key
        //and orignal str as the value
        //decide the condition: if the
        for (const str of strs) {
            const key = str.split("").sort().join("");
            const values = map.get(key) || [];

            values.push(str);
            map.set(key, values);

            // return Array.from()
        }

        return Array.from(map.values());
    }
}
