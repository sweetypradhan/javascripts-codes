function isMulof3or7(num) {
    //check if num is divisible by 3 or 7
    if (num % 3 == 0 || num % 7 == 0) {
        return true ;
    } else {
        return false;
    }
}

let result = isMulof3or7(21);
console.log(result);