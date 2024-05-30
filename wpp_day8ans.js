function startWithJava(str) {
    if(str.length < 4) {
        return "String length must be at least 4.";
    }

//Extract first 4 charachter of str
front = str.substring(0,4);

//check if front is equal to java
if (front == 'Java') {
    return true;
}else {
    return false;
}
}

const result = startWithJava("Javascript")
console.log(result);