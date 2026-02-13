class Solution {
  bool containsDuplicate(List<int> nums) {
    final result = nums.toSet();
    return result.length  != nums.length;
  }
}