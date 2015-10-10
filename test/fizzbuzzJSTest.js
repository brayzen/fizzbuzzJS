var expect = require('chai').expect;
var fizzbuzz = require('../lib/fizzbuzzJS');

console.log('%%%%%%%%%%%%$$$$$$$$$$$$');


describe('FizzbuzzJS', function() {
  it('should return Fizz for number % 3', function(){
    var answer = fizzbuzz.fizzbuzzNum(33);
    console.log(answer)
    expect(answer).to.equal('Fizz');
  });

  it('should return Buzz for number % 5', function(){
    var answer = fizzbuzz.fizzbuzzNum(25);
    expect(answer).to.equal('Buzz');
  });

  it('should return FizzBuzz for number % 15', function(){
    var answer = fizzbuzz.fizzbuzzNum(30);
    expect(answer).to.equal('FizzBuzz');
  });

  it('should return entire string of the upperlimit', function(){
    var answer = fizzbuzz.fizzbuzzLimit(15);
    expect(answer).to.include('Fizz');
    expect(answer).to.include('Buzz');
    expect(answer).to.include('FizzBuzz');
    expect(answer).to.include('8');
  });
})

