"use strict";
class Fibonaci {
    // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233
    getNumber(index) {
        if (index == 0) {
            return 0;
        }
        if (index == 1) {
            return 1;
        }
        return this.getNumber(index - 1) + this.getNumber(index - 2);
    }
}
const fib = new Fibonaci();
const result = fib.getNumber(13);
console.log(result);
