class Solution {
    public double solution(int[] arr) {
        double num = 0;
        int length = arr.length;
        
        for(int i = 0; i < arr.length; i++){
            num += arr[i];
        }
        return num / length;
    }
}