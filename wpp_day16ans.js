function swap(arr) {
    [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
    return arr;
  }
  
  console.log(swap([1, 2, 3, 4])); 
  console.log(swap([0, 2, 1]));    
  