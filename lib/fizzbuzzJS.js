var fizzbuzz = {

  fizzbuzzNum: function(num){
    if(num % 15 == 0){
      return 'FizzBuzz';//str += 'FizzBuzz\n';
    } else if(num % 3 == 0){
      return 'Fizz';//str += 'Fizz\n';
    } else if(num % 5 == 0){
      return 'Buzz';//str += 'Buzz\n';
    } else {
      return num;//str += (i + '\n');
    }
  },

  fizzbuzzLimit: function(upperLimit) {
    var str = '';
    for(i = 1; i <= upperLimit; i++){
      if(i % 15 == 0){
        str += 'FizzBuzz\n';
      } else if(i % 3 == 0){
        str += 'Fizz\n';
      } else if(i % 5 == 0){
        str += 'Buzz\n';
      } else {
        str += (i + '\n');
      };
    };
      return str;
  },
}

module.exports = fizzbuzz;
// fizzbuzz(100);

