const jsonString = '{"a":1, "b":2, "foo":"bar"}'; // string version of a JS Object
const obj = JSON.parse(jsonString) // a string, of course :)
delete obj.foo;
const newString = JSON.stringify(obj);
console.log(newString);