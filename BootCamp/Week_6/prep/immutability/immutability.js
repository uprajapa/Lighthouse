const object = {
  key: "Value of Key",
};

const copyOfObject = object;
const newCopyOfObject = { ...object };

//Arrays
const arrayOfNumbers = [1, 2, 3, 4, 5];

const copyArrayOfNumbers = arrayOfNumbers;
copyOfObject.key = "New new value";
newCopyOfObject.key = "New copy value";
copyArrayOfNumbers.push(7);

console.log(`ArrayofNumbers: ${arrayOfNumbers} , copy : ${copyArrayOfNumbers}`);
console.log(`Object: ${JSON.stringify(object)} , copy : ${JSON.stringify(copyOfObject)}, new Copy: ${JSON.stringify(newCopyOfObject)}`);