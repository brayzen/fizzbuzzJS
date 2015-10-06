var expect = require('chai').expect;
var fizzbuzz = require('../lib/fizzbuzzJS');
var fb = fizzbuzz(30);

console.log('%%%%%%%%%%%%'+ fb + '$$$$$$$$$$$$');


describe('FizzbuzzJS', function() {
  it('should return Fizz for number % 3', function(){
    var answer = fizzbuzz(33);
    console.log(answer)
    expect(answer).last.to.equal('Fizz');
  });

  it('should return Buzz for number % 5', function(){
    var answer = fizzbuzz(25);
    expect(answer).last.to.include('Buzz');
  });

  it('should return FizzBuzz for number % 15', function(){
    var answer = fizzbuzz(30);
    expect(answer).last.to.equal('FizzBuzz');
  });
})

