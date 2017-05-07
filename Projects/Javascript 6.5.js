//Make Student Reports
function makeStudentsReport(data) {
  var array = [];
  for(i=0; i<data.length; i++) {
    var string = data[i].name + ": " + data[i].grade;
    array.push(string);
  }
  return array;
}

//Enroll in Summer School
function enrollInSummerSchool(students) {
  var array = [];
  for(i=0; i<students.length; i++) {
    students[i].status = 'In Summer school';
  }
  return students;
}

//Find by ID
function findById(items, idNum) {
  var object = {};
  for(i=0; i<items.length; i++) {
   if (items[i].id === idNum) {
     object = items[i]
   }
 }
  return object;
}

//Validate Object Keys
function validateKeys(object, expectedKeys) {  
 var answer = undefined;
  if (expectedKeys.length === Object.keys(object).length) {
    for(i=0; i< expectedKeys.length; i++) {
       if (expectedKeys[i] === Object.keys(object)) { //try to find a way to set this to be true
       answer = true;
       }
       else {
       answer = false;
       }
    }
  }
  else {
    answer = false;
  }
  return answer;                             
}

//Todo List Factory
