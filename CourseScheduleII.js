var findOrder = function(numCourses, prerequisites) {
    const adjList = new Map();
    const indegree = Array(numCourses).fill(0);
    const topologicalOrder = Array(numCourses).fill(0);
    let isPossible = true;
    
    for(let i = 0; i < prerequisites.length; i++){
        if(adjList.has(prerequisites[i][1])){
            adjList.get(prerequisites[i][1]).push(prerequisites[i][0])
        } else {
            adjList.set(prerequisites[i][1], [prerequisites[i][0]]);
        }
        indegree[prerequisites[i][0]]++;
    }

    const q = [];
    
    for(let i = 0; i < numCourses; i++){
        if(indegree[i] === 0){
            q.push(i);
        }
    }

    let i = 0;
    
    while(q.length > 0){
        let curr = q.pop();
        topologicalOrder[i++] = curr;

        if(adjList.has(curr)){
            for(let child of adjList.get(curr)){
                indegree[child]--;
                
                if(indegree[child] === 0){
                    q.push(child);
                }
            }
        }
    }
  
    if(i === numCourses){
        return topologicalOrder;
    }

    return [];
};