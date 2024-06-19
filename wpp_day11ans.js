function checkMode(a, b, c) {
    if (a < b && b < c) {
      return 'Strict mode';
    } else if (a <= b && b <= c) {
      return 'Soft mode';
    } else {
      return 'Undefined';
    }
  }
  
 
  console.log(checkMode(10, 15, 31)); 
  console.log(checkMode(24, 22, 31)); 
  console.log(checkMode(22, 22, 31)); 
  