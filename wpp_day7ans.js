function string(str) {
    if (str.length < 3) {
        return "String length must be at least 3.";
    }

    const lastThree = str.substring(str.length - 3);
    return lastThree + str + lastThree;
}

const result = string("swift")
console.log(result);