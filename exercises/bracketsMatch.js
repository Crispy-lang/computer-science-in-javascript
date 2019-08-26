function isBracketsMatch(word) {
  var stack = [];
  var map = {
    '{': '}',
    '[': ']',
    '(': ')',
  };
  for (let i = 0; i < word.length; i++) {
    if (word[i] === '(' || word[i] === '[' || word[i] === '{') {
      stack.push(word[i]);
    } else {
      let lastCharacter = stack.pop();
      if (word[i] !== map[lastCharacter]) {
        return false;
      }
    }
  }
  if (stack.length === 0) {
    return true;
  }
  return false;
}

console.log(isBracketsMatch('{([})}')); // Return false
console.log(isBracketsMatch('{({[{()()}]})}')); // Return true
