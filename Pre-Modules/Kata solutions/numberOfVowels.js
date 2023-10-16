const vowels = ['a', 'e', 'i', 'o', 'u'];

const numberOfVowels = function(data) {
  let count = 0;
  for(let char of data){
		if(vowels.includes(char)){
			count++;
    }      
  }
  return count;
};
  
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));	