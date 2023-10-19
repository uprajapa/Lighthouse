let inspect = require('util').inspect;
const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

let numberOfFollowers = {};
let all = numberOfFollowers;

const convertNames = (numberOfFollowers) => {
  for (let name in numberOfFollowers) {
    switch (name) {
    case 'f01':
      numberOfFollowers['Alice'] = numberOfFollowers[name];
      delete numberOfFollowers[name];
      break;
    case 'f02':
      numberOfFollowers['Bob'] = numberOfFollowers[name];
      delete numberOfFollowers[name];
      break;
    case 'f03':
      numberOfFollowers['Charlie'] = numberOfFollowers[name];
      delete numberOfFollowers[name];
      break;
    case 'f04':
      numberOfFollowers['Debbie'] = numberOfFollowers[name];
      delete numberOfFollowers[name];
      break;
    case 'f05':
      numberOfFollowers['Elizabeth'] = numberOfFollowers[name];
      delete numberOfFollowers[name];
      break;
    case 'f06':
      numberOfFollowers['Finn'] = numberOfFollowers[name];
      delete numberOfFollowers[name];
      break;
    default:
      console.log("Sorry!");
    }
  }
};

// returns the name of the individual who follows the most people
const biggestFollower = () => {
  let countFollower = 0;
  let personName = "";
  for (const person in data) {
    if (data[person].follows.length > countFollower) {
      countFollower = data[person].follows.length;
      personName = data[person].name;
    }
  }
  return personName;
};

// returns the name of the most popular (most followed) individual
const mostPopular = () => {
  let mostFollowed = "";
  let counter = 0;

  for (const person in data) {
    for (const follow of data[person].follows) {
      if (numberOfFollowers[follow] === undefined) {
        numberOfFollowers[follow] = 1;
      } else if (numberOfFollowers[follow] !== undefined) {
        numberOfFollowers[follow] += 1;
      }
    }
  }

  convertNames(numberOfFollowers);

  for (const name in numberOfFollowers) {
    if (numberOfFollowers[name] > counter) {
      counter = numberOfFollowers[name];
      mostFollowed = name;
    } else if (numberOfFollowers[name] === counter) {
      mostFollowed += `, ${name}`;
    }
  }
  
  return `Most popular people are ${mostFollowed} with ${counter} followers`;
};


// outputs a list of everyone and for each of them,
//  the names of who they follow and who follows them
const printAll = () => {
  mostPopular();
  for (let person in data) {
    all[data[person].name] = { 'Followers': all[data[person].name],
      'Following': data[person].follows.length};
  }
  return `Printing all: ${inspect(all)}`;
};

const unrequitedFollowers = () => {
  let tempArray = [];
  let outputArray = [];
  for (const person in data) {
    console.log(`Person: ${inspect(data[person])}`);
    for (const follow of data[person].follows) {
      if (!data[follow].follows.includes(person)) {
        outputArray.push(data[person].name);
        break;
      }
      tempArray.push(follow);
    }
    tempArray = [];
  }
  return `Output: ${outputArray}`;
};
// Output should be: ["Alice", "Bob", "Charlie", "Debbie"]

// console.log(biggestFollower());
// console.log(mostPopular());
// console.log(printAll());
console.log(unrequitedFollowers());
