// psuedo code..

// need some sort of loop through the number starting from m all the way through n
// check if the current number has any divisors.. square the numbers and add them all
// check the square root of nunmber and if it isn't a decimal/float it one! Math.sqrt()
// 1.  while loop! until m == to n
// 2.  for every number check if it has any divisiors and store them....
// 3.  loop through the store array and square each one then add them all up.
// 4. check the square root of it and if it has a whole number it counts as one.
// 5 push the number and the sum of the squared divisior in the finalArr;


function listSquared(m, n) {
    var increment = m;
    var storeDivisors = [];
    var result = 0;
    var finalArr = [];
    while(increment <= n) {
        for (var i = 0; i <= increment; i++) {            
            if (increment % i === 0) {
                storeDivisors.push(i * i);
            }
        }

        if (storeDivisors !== 0) {
            storeDivisors.forEach(function (current) {
                result += current;
            });

            storeDivisors = [];
        }

        if (Number.isInteger(Math.sqrt(result))) {
            console.log(result, increment)
            finalArr.push([increment, result]);
        }

        result = 0;
        increment++;
    }

    console.log(finalArr);
    
    return finalArr;
    
}

listSquared(42, 250) // [[42, 2500], [246, 84100]]