/*
Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/

function letterCombinations(digits: string): string[] {
    if(digits.length == 0) 
        return [];
    
    const table: string[] = ['0','1','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    
    let res: string[] = new Array();
    let que: string[] = [''];
    
    while(que.length > 0) {
        let str: string = que[0];
        que.shift();
        
        if(str.length == digits.length) 
            res.push(str);
        else{
            let index: number = Number(digits.charAt(str.length));
            let s: string = table[index];
            for(let i = 0; i < s.length; i ++){
                que.push(str + s.charAt(i));
            }
        }
    }
    
    return res;
};
