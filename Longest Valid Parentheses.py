class Solution:
    def longestValidParentheses(self, s: str) -> int:
        
        length = 0
        stack = []
        stack.append(-1)
        for i in range(0, len(s)):
            if s[i] == "(":
                stack.append(i)
            else:
                stack.pop()                
                if len(stack) == 0:
                    stack.append(i)
                else:
                    length = max(length, i - stack[-1])
        return length
                