class Solution {
  int lengthOfLongestSubstring(String s) {
    int maxLength = 0;
    int currentMaxLength = 0;
    for (int i = 0 ; i< s.length - 1; i++) {
      if (s[0] != s[i]) {
        currentMaxLength++;
      }
      if (currentMaxLength > maxLength) {
        maxLength = currentMaxLength;
      }
    }
    return maxLength;
  }
}