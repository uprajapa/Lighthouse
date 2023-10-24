const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {
  it("should return an empty string", () => {
    const name = "";
    assert.isEmpty(nameInverter(name), "Name is not empty");
  }),
  it("should return same name if single name passed", () => {
    const inputName = "Urvish";
    const expectedOutput = "Urvish";
    assert.strictEqual(nameInverter(inputName), expectedOutput, 'Not the same name');
  }),
  it("should return name with no extra spaces", () => {
    const inputName = " Urvish ";
    const expectedOutput = "Urvish";
    assert.strictEqual(nameInverter(inputName), expectedOutput, 'Extra spaces');
  }),
  it("should return a last-name, first-name when passed a first and last-name", () => {
    const inputName = "Urvish Prajapati";
    const expectedOutput = "Prajapati, Urvish";
    assert.strictEqual(nameInverter(inputName), expectedOutput, 'Not the expected output');
  })

});