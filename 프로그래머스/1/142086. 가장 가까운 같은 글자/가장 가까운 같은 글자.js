function solution(s) {
  var answer = [];
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) answer.push(i - map.get(s[i]));
    else answer.push(-1);
    map.set(s[i], i);
  }
  return answer;
}