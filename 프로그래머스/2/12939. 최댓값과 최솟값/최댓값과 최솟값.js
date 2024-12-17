function solution(s) {
    let numArray = s.split(" ");
    
    let max = Math.max(...numArray);
    let min = Math.min(...numArray);
    
    return min + " " + max;
}