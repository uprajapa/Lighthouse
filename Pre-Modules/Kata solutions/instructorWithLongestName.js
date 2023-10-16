const instructorWithLongestName = function (instructors) {
  let counter = 0;
  let finalAnswer = {};
  for(let instructor in instructors){
    if(instructors[instructor].name.length > counter){
      counter = instructors[instructor].name.length;
      finalAnswer = instructors[instructor];
    }    
  }
	return finalAnswer;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);