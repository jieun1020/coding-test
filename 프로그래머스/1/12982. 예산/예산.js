function solution(d, budget) {
    let sort = d.sort((a,b) => a - b);
    let count = 0;
    
    for(let i = 0;  i < sort.length; i++){
        if(budget >= sort[i]){
            budget = budget - sort[i]
            count++; 
        }else{
            break;
        }
        
        
        console.log("i" , i)
        console.log("결과",budget)
        console.log("count" , count)
    }
    
    return count;
    console.log(sort)
    
}