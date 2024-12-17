function solution(s){
    var answer = true;
   
    let lowerStr = s.toLowerCase();
    let p = (lowerStr.match(/p/g) || []).length;
    let y = (lowerStr.match(/y/g) || []).length;
    
    if(p !== y) answer = false;
    console.log(p,y);
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

    return answer;
}