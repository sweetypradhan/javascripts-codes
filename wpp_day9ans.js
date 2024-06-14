function number(x,y){
    if(x!== y){
        //here we calculate the difference between x and 100 and store it in x1
        const x1 = Math.abs(x - 100);
        
        //here we calculate the difference between y and 100 and store it in y1
        const y1 = Math.abs(y - 100);

         // Compare x1 and y1 to determine which value is closer to 
         if(x1 < y1){
            return x;
         }

         if (y1 < x1){
            return y;
         }

          // Return 0 if x and y are equidistant from 100
          return 0;
    }   else {
        //return false if x is equal to y
        return false;
    }
}

console.log(number(90,95));
console.log(number(-85,-90));
console.log(number(80,80));