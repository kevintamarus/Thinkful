//Creating Arrays
function makeList(item1, item2, item3) {
  var array = [];
  array.push(item1, item2, item3);
  return array
}


//Adding array items
function addToList(list, item) {
  list.push(item);
  return list;
}


//Accessing array items
function accessFirstItem(array) {
  var value = array[0];
  return value;
}

function accessThirdItem(array) {
  var value = array[2];
  return value;
}


//Array length and access
function findLength(array) {
  return array.length;
}

function accessLastItem(array) {
  number = array.length;
  return array[number-1];
}


//Array copying I
function firstFourItems(array) {
  var array2 = [];
  for (i=0; i<4; i++) {
    array2.push(array[i]);
  }
  return array2;
}


function lastThreeItems(array) {
  var array2 = [];
  var position = array.length - 3;
  for (i=position; i < array.length; i++) {
    array2.push(array[i]);
  }
  return array2;
}


//Array copying II    -Returns Correct answer, but copyFirstHalf won't pass in Thinkful jsbin
function minusLastItem(array) {
  array.splice(-1,1);
  return array;
}


function copyFirstHalf(array) {
  var half = array.length/2;
  if (array.length%2 === 0) {
    array.splice(half, half);
  }
  else {
    half = (array.length-1)/2
    array.splice(half, half+1);
  }
  return array;
}


//Squares with map
function squares(array) {
  return array.map(function(number){return Math.pow(number, 2)})
}

//Sort
function greatestToLeast(array) {
  return array.sort(function(a,b){return b-a})
}

//Filter
function shortWords(array) {
  return array.filter(function(x){return x.length<5}) 
}

//Find
function divisibleBy5(array) {
  return array.find(function(x){return x%5===0})
}