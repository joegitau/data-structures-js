// IMPLEMENTATION OF JAVASCRIPT'S ARRAY OBJECT

function Array() {
    // Object.create() -> creates a new object using an existing object as the prototype of the newly created object
  let arr = Object.create(Array.prototype);
  arr.length = 0;

  for (key in arguments) {
    arr[key] = arguments[key];
    arr.length += 1;
  }

  return arr;
}

const namesArray = Array('Joe', 'Mason', 'Gitau');
console.log(namesArray);
