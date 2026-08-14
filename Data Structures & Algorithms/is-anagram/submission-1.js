class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

    if(s.length !== t.length){
        return false
    }
      const mapS = new Map();
      const mapT = new Map();
      
      for(const sc of s){
        const char = mapS.get(sc) || 0;
        mapS.set(sc ,char  + 1)
      }

      for(const tc of t){
        const char = mapT.get(tc) || 0;
        mapT.set(tc, char +1)
      }
        
        //compare 2 maps
        for(const [char, count] of mapS){
            if(mapT.get(char) !== count){
                return false
            }
        }

        return true
    }
}
