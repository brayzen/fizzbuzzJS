var fizzbuzz = function(upperLimit) {
  var str = '';
  for(i = 1; i <= upperLimit; i++){
    // var str = "";
    if(i % 15 == 0){
      str = 'FizzBuzz';
    } else if(i % 3 == 0){
      str = 'Fizz';
    } else if(i % 5 == 0){
      str = 'Buzz';
    } else {
      str = i;
    };
    console.log(str);
  };
  return str;
}

module.exports = fizzbuzz;
// fizzbuzz(100);

