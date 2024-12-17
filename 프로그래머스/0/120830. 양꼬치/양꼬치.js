function solution(n, k) {
    let discount = Math.floor(n/10);
    console.log(discount);
    
    let total = 12000 * n + 2000 * k - discount * 2000;
        
    return total;
}