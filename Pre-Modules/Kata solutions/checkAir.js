const checkAir = function (samples, threshold) {
  // Code here!
  let count = 0;
  for(let sample of samples){
    if(sample === "dirty"){
      count++;
    }    
  }
   return samples.length*(threshold) < count ? "Polluted" :  "Clean";
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))