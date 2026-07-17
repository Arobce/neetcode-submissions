/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start);
        let data = [intervals[0]];

        for(let i = 1; i < intervals.length; i++) {
            if(data[data.length - 1].end > intervals[i].start ) {
                return false;
            }
            data.push(intervals[i]);
        }

        return true;

    }
}
