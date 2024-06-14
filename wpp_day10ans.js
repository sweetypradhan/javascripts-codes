function newString(str) {
    if (str.length < 3) {
        return str.toUpperCase();
    } else {
        return str.substring(0, 3).toLowerCase() + str.substring(3);
    }
}

console.log(newString("HELLO"));
console.log(newString("Hi"));
console.log(newString("GoOdMORNING"));
