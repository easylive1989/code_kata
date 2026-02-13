class ListNode {
  int val;
  ListNode? next;

  ListNode([this.val = 0, this.next]);
}

class Solution {
  ListNode? mergeTwoLists(ListNode? list1, ListNode? list2) {
    if (list1 == null && list2 == null) return null;

    List<int> result1 = [];
    List<int> result2 = [];

    ListNode? current1 = list1;
    while (current1?.val != null) {
      result1.add(current1!.val);
      current1 = current1.next;
    }

    ListNode? current2 = list2;
    while (current2?.val != null) {
      result2.add(current2!.val);
      current2 = current2.next;
    }

    List<int> result = (result1 + result2).toList()..sort();

    final resultNode = ListNode(result[0]);
    ListNode current = resultNode;
    for (int i = 1; i < result.length; i++) {
      current.next = ListNode(result[i]);
      current = current.next!;
    }
    return resultNode;
  }
}
