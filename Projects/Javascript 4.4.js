//Max and Min
function max(numbers) {
 var value = numbers[0];
  for (i=0; i< numbers.length; i++) {
   if (numbers[i] > value) {
     value = numbers[i];
   }
  }
  return value;
}


function min(numbers) {
 var value = numbers[0];
 for (i=0; i< numbers.length; i++){
   if (numbers[i] < value) {
     value = numbers[i];
     }
  }
  return value;
}

//Average
function average(numbers) {
  var value = 0;
  var average = 0;
  for (i=0; i<numbers.length; i++) {
    value = value + numbers[i]
    average = value /(i+1);
  }
  return average;
}

//FizzBuzz
function fizzBuzz(countTo) {
  var array = [];
  var value = 0;
  for (i=1; i<=countTo; i++) {
    if (i%3 === 0 && i%5 === 0) {
      value = "fizzbuzz";
      array.push(value);
    }
    else if (i%3 === 0) {
      value = "fizz";
      array.push(value);
    }
    else if (i%5 === 0) {
      value = "buzz";
      array.push(value);
    }
    else {
      value = i
      array.push(value);
    }
  }
  return array;        
}