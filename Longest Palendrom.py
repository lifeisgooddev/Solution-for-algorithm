/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

function longestCommonPrefix(strs: string[]): string {
    let i:number = 0;
    let prefix:string = "";
    if(strs.length == 0)
        return ""
    let maxLength:number = strs[0].length;
    loop1:
    while(i < maxLength){
        let j:number = 0;
        let common:string = strs[0][i];
        let index:number;
        for(index = 1; index < strs.length; index ++){
            if(common == undefined || strs[index][i] == undefined)
                break loop1;
            else if(common != strs[index][i])
                break loop1;
        }
        if(index == strs.length)
            prefix += common;
        i++;
    }
    return prefix;
};