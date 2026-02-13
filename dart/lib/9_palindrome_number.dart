class Solution {
  bool isPalindrome(int x) {
    if (x < 10 && x >= 0) return true;
    if (x < 0) return false;
    if (x % 10 == 0) {
      return false;
    }
    final queue = [];
    int current = x;
    while (current >= 10) {
      var mod = current % 10;
      queue.add(mod);
      current = current ~/ 10;
    }

    queue.add(current );

    for (int i = 0; i < queue.length ~/ 2; i++){
      if (queue[i] != queue[queue.length - i - 1]){
        return false;
      }
    }
    return true;
  }
}