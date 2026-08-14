/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */
// starting time[0,5,15]
//ending time [10,20,40]


class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if(intervals.length === 0) return 0;

        const starts = []
        const ends = []
        for(let i = 0; i < intervals.length; i++){
            starts.push(intervals[i].start)
            ends.push(intervals[i].end)
        }

        //sort 
        starts.sort((a, b) => a - b)
        ends.sort((a, b) => a - b)

        let rooms=0;
        let endindex= 0;

        for(let i = 0; i < starts.length; i++){
            if(starts[i] < ends[endindex]){
                rooms++
            }else{
                endindex++
            }
        }

        return rooms
    }

  


}
