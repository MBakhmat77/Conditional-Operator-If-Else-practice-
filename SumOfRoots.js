   function roots(a,b,c){
 
      a*x^2-bx-c=0
     let x1 ;
     let x2 ;
     let realPart = (-b / (2 * a));
     let imagPart = (Math.sqrt(-D) / (2 * a));
     let sumOfRoots = (x1 + x2);
     let D =( b * b ) - 4 * a * c;
     if ( D > 0){
       x1 =(- b + Math.sqrt(( b * b ) - 4 * a * c))/(2 * a) ;
       x2 =(- b - Math.sqrt(( b * b ) - 4 * a * c))/ (2 * a) ;
     return sumOfRoots = +(x1 + x2).toFixed(2);
     }else if (( b * b ) - 4 * a * c === 0 ){
       x1 = x2 = - b / ( 2 * a);
       return sumOfRoots = +((- b / ( 2 * a)) + (- b / ( 2 * a))).toFixed(2);
     }  else if (D < 0){
    x1 = realPart + imagPart;
    x2 = realPart - imagPart;
    }return sumOfRoots = +(x1 + x2).toFixed(2);
     else return null;
 }
