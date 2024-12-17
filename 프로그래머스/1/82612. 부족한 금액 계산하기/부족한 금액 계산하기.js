function solution(price, money, count) {
    let totalPrice = 0;
    let i = 1;
    
    do {
      totalPrice += price * i;
        i++
    } while (i <= count)
        
        console.log(totalPrice)
    
    let shortage = totalPrice - money;
        console.log(shortage)
    
    return shortage > 0 ? shortage : 0
}