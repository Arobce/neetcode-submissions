class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let map = new Map();
        let array = [];

        map.set("[","]");
        map.set("(",")");
        map.set("{","}");

        for(var char of s) {
            console.log(char);
            if(map.has(char)) {
                array.push(map.get(char));
                console.log("Array");
                console.log(array);
            } else {
                if(array[array.length - 1] == char) {
                    array.pop();
                } else {
                    return false;
                }
            }
        }

        return array.length == 0;

    }
}
