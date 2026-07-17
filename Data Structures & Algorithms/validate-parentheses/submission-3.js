class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        let map = new Map();
        map.set("(", ")");
        map.set("{", "}");
        map.set("[", "]");

        for (let i = 0; i < s.length; i++) {
            let char = s[i];

            // Is open paranthesis
            if (map.has(char)) {
                stack.push(char);
            } else {
                if (map.get(stack[stack.length - 1]) == char) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        return stack.length == 0;

    }
}
