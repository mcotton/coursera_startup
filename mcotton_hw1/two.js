#!/usr/bin/env node

var fs = require('fs');;

var output = 'two.txt';
var out = [2,3,5,];


function isPrime(num, callback) {
    if (num % 2 == 0) {
        return false;
    } else {
        for (x=3; x<=Math.sqrt(num); x+=2) {
            if (num % x == 0) return false;
        }
    }
    callback(num); 
}

function finish(arr) {
    fs.writeFileSync(output, arr.join(','));
}

var i = 7;
while(out.length <= 100) {
   isPrime(i++, function(num) {
     out.push(num);
     if( out.length == 100 ) {
       finish(out);
       return false;
    }
  })

}
