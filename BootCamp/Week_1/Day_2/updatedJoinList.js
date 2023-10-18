const joinList = function(conceptList) {
  let newList = "";
  for (const concept of conceptList) {
    newList = newList !== "" ? newList + ", " + concept : concept;
  }
  return newList;
};

const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);