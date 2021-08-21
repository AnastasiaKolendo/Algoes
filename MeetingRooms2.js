var minMeetingRooms = function(intervals) {
    const starts = [];
    const ends = [];
    
    for(let i = 0; i < intervals.length; i++){
        let curr = intervals[i];
       
        starts.push(curr[0]);
        ends.push(curr[1]);
    }
    
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);
    
    let rooms = 0;
    let endsItr = 0;
    
    for(let i = 0; i < starts.length; i++){
        if(starts[i] < ends[endsItr]) rooms++;
        else endsItr++;
    }
    
    return rooms;
};

console.log(minMeetingRooms([[0,30],[5,10],[15,20]]))
console.log(minMeetingRooms([[7,10],[2,4]]))