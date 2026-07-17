class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let string = "";

        for(let str of strs) {
            string += str.length + "$" + str;
        }

        console.log(string);

        return string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
     decode(str) {
    let array = [];
    let i = 0;

    while (i < str.length) {
        let j = i;

        // find the $
        while (str[j] !== "$") {
            j++;
        }

        // length is from i to j-1
        let count = Number(str.substring(i, j));

        // actual word starts after $
        let word = str.substring(j + 1, j + 1 + count);
        array.push(word);

        // move i to the next encoded word
        i = j + 1 + count;
    }

    return array;
}
}
