function solution(arr) {
    if(arr.length === 1) return [-1];
    let min = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
    }
    return arr.filter((e) => e != min);
}