//Object Creator
function createMyObject() {
  var object = {
  foo: "bar",
  answerToUniverse: 42,
  "olly olly": "oxen free",
  sayHello: (function(hello){return 'hello'})
  };
return object;
}

//Object Updater
function updateObject(obj) {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}

//Self Reference
function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName: function(){return this.firstName + ' ' + this.lastName}
  }
  return person;
}

//Deleting Keys
function keyDeleter(obj) {
  delete obj["foo"];
  delete obj["bar"];
  return obj
}