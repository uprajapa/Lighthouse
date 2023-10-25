const titleCase = (string) => {
  let words = string.split(" ");

  if (string === "") {
    return string;
  }

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
  }
  console.log(words.join(' '));
};

titleCase("this is an example"); // should return "This Is An Example"
titleCase("test"); // should return "Test"
titleCase("i r cool");  // should return "I R Cool"
titleCase("WHAT HAPPENS HERE"); // should return "What Happens Here"
titleCase(""); // should return ""
titleCase("A"); // should return "A"